"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/format-price"
import { useToast } from "@/components/ui/use-toast"

export function CartSummary() {
  const { totalPrice, cartDetails, cartCount } = useShoppingCart()
  const [isLoading, setLoading] = useState(false)
  const { toast } = useToast()
  const isDisabled = isLoading || (cartCount ?? 0) === 0
  const ShippingAmount = (cartCount ?? 0) > 0 ? 500 : 0
  const totalAmount = (totalPrice ?? 0) + ShippingAmount

  async function onCheckout() {
    try {
      setLoading(true)
      
      if (!cartDetails || Object.keys(cartDetails).length === 0) {
        console.error("Cart is empty")
        setLoading(false)
        return
      }

      const response = await fetch('/api/checkout', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartDetails)
      })

      if (!response.ok) {
        let errorMessage = "Failed to create checkout session"
        try {
          const errorData = await response.json()
          errorMessage = errorData.error || errorMessage
        } catch (parseError) {
          console.error("Could not parse error response:", parseError)
        }
        toast({
          title: "Checkout Failed",
          description: errorMessage,
          variant: "destructive"
        })
        setLoading(false)
        return
      }

      const data = await response.json()
      console.log("Response data:", data)
      
      if (!data.url) {
        console.error("No checkout URL in response:", data)
        toast({
          title: "Checkout Failed",
          description: "Could not generate checkout URL. Please try again.",
          variant: "destructive"
        })
        setLoading(false)
        return
      }

      console.log("Stripe session created, redirecting to checkout")
      
      window.location.href = data.url
    } catch (error) {
      console.error("Checkout error:", error)
      setLoading(false)
    }
  }

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm">Subtotal</dt>
          <dd className="text-sm font-medium">{formatPrice(totalPrice || 0, "Rs.")}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="flex items-center text-sm">
            <span>Shipping estimate</span>
          </dt>
          <dd className="text-sm font-medium">{formatPrice(ShippingAmount, "Rs.")}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="text-base font-medium">Order total</dt>
          <dd className="text-base font-medium">{formatPrice(totalAmount, "Rs.")}</dd>
        </div>
      </dl>

      <div className="mt-6">
        <Button onClick={onCheckout} className="w-full" disabled={isDisabled}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Loading..." : "Checkout"}
        </Button>
      </div>
    </section>
  )
}

import { NextResponse } from "next/server"
import { validateCartItems } from "use-shopping-cart/utilities"

import { inventory } from "@/config/inventory"
import { stripe } from "@/lib/stripe"

export async function POST(request: Request) {
    try {
      const cartDetails = await request.json()
      console.log("Cart details received:", Object.keys(cartDetails).length)
      
      const lineItems = validateCartItems(inventory, cartDetails)
      console.log("Line items:", lineItems)
      
      if (!lineItems || lineItems.length === 0) {
        return NextResponse.json({ error: "No valid items in cart" }, { status: 400 })
      }
      
      const origin = request.headers.get('origin')
      console.log("Origin:", origin)
      
      const successUrl = `${origin}/api/checkout-success?session_id={CHECKOUT_SESSION_ID}`
      console.log("Success URL template:", successUrl)
      
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ['card'],
        line_items: lineItems,
        shipping_address_collection:{
          allowed_countries: ['IN', 'US', 'GB', 'CA', 'AU']
        },
        billing_address_collection: "auto",
        success_url: successUrl,
        cancel_url: `${origin}/cart`,
        customer_creation: "always"
      })
      console.log("Stripe session created:", session.id)
      console.log("Session URL:", session.url)
      return NextResponse.json(session)
    } catch (error) {
      console.error("Checkout error:", error)
      const errorMessage = error instanceof Error ? error.message : "Failed to create checkout session"
      return NextResponse.json({ error: errorMessage }, { status: 500 })
    }
}


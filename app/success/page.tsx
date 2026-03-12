
import Link from "next/link"
import { stripe } from "@/lib/stripe"
import { CheckoutSession } from "@/components/checkout-session"

interface Props {
  searchParams: Promise<{
    session_id?: string
  }>
}

export default async function Page({ searchParams }: Props) {
  const params = await searchParams
  const sessionId = params?.session_id

  console.log("Success page received sessionId:", sessionId)

  if (!sessionId) {
    return (
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-slate-50 dark:bg-slate-950 text-gray-800 dark:text-gray-200">
        <div className="text-center">
          <p className="text-lg font-semibold text-red-600 mb-4">
            No session found
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Unable to retrieve checkout session. The session ID is missing.
          </p>
          <Link
            href="/"
            className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-700 transition-colors"
          >
            Go back home
          </Link>
        </div>
      </main>
    )
  }

  let customerDetails = null
  let error = null

  try {
    console.log("Retrieving Stripe session:", sessionId)
    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['customer_details']
    })
    console.log("Session retrieved successfully:", checkoutSession.id)
    customerDetails = checkoutSession?.customer_details
  } catch (err) {
    console.error("Error retrieving checkout session:", err)
    error = err instanceof Error ? err.message : "Failed to retrieve session details"
  }

  if (error) {
    return (
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-slate-50 dark:bg-slate-950 text-gray-800 dark:text-gray-200">
        <div className="text-center">
          <p className="text-lg font-semibold text-red-600 mb-4">Error</p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">{error}</p>
          <Link
            href="/"
            className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-700 transition-colors"
          >
            Go back home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-slate-50 dark:bg-slate-950 text-gray-800 dark:text-gray-200">
      <div className="text-center max-w-lg">

        <CheckoutSession customerDetails={customerDetails} />

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-700 transition-colors"
          >
            Go back home
          </Link>

          <Link
            href="/contact"
            className="text-sm font-semibold text-green-700 dark:text-green-400 hover:underline"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
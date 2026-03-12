import { redirect } from "next/navigation"

export async function GET(request: Request) {
  const url = new URL(request.url)
  const sessionId = url.searchParams.get('session_id')
  
  console.log("Checkout success endpoint called with URL:", url.toString())
  console.log("Session ID extracted:", sessionId)
  
  if (!sessionId) {
    console.error("No session_id found in checkout-success redirect")
    redirect('/cart')
  }
  
  console.log("Redirecting to /success with session_id:", sessionId)
  
  // Redirect to the success page with the session_id in the URL
  redirect(`/success?session_id=${sessionId}`)
}

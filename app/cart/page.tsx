import { CartItems } from "@/components/cart-items"
import { CartSummary } from "@/components/cart-summary"

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">

      <main className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Shopping Cart
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Review your eco-friendly items before checkout.
          </p>
        </div>

        <form className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">

          <section
            aria-labelledby="cart-heading"
            className="lg:col-span-7"
          >
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl shadow-sm p-6">
              <CartItems />
            </div>

          </section>

          <div className="mt-10 lg:mt-0 lg:col-span-5">

            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl shadow-sm p-6">

              <CartSummary />

            </div>

          </div>

        </form>

      </main>

    </div>
  )
}
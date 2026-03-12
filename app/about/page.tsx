import Image from "next/image"
import { Leaf, Award, Shield, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex-1 min-h-screen bg-slate-50 text-gray-800 dark:bg-slate-950 dark:text-gray-200">

      <section className="relative h-[420px] w-full overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="Eco Essentials"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Story
          </h1>
          <p className="mt-4 max-w-xl text-gray-200">
            Empowering sustainable living with thoughtfully curated
            eco-friendly products.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">

        <section className="grid lg:grid-cols-2 gap-14 items-center mb-28">

          <div className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/about-mission.png"
              alt="Mission"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
              OUR MISSION
            </span>

            <h2 className="mt-3 text-3xl font-bold">
              Sustainability at the Heart of Everything
            </h2>

            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              At Eco-Essentials, every product represents a commitment to
              protecting our planet. We carefully curate items that combine
              sustainability, durability, and modern design.
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              Since 2020, our goal has been simple: make eco-friendly living
              accessible and inspiring for everyone.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: Award, text: "Certified eco-friendly products" },
                { icon: Shield, text: "Ethical and fair trade sourcing" },
                { icon: Users, text: "Community driven impact" },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.text} className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                    {item.text}
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        <section className="mb-28">

          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">Our Core Values</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              These principles guide our product choices and our commitment to
              sustainable commerce.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                Icon: Leaf,
                title: "Sustainability",
                desc: "Environment-friendly decisions in every step",
              },
              {
                Icon: Award,
                title: "Quality",
                desc: "Products designed for durability and performance",
              },
              {
                Icon: Shield,
                title: "Transparency",
                desc: "Clear sourcing and ethical manufacturing",
              },
              {
                Icon: Users,
                title: "Community",
                desc: "Supporting artisans and responsible brands",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition"
              >
                <item.Icon className="h-7 w-7 text-green-600 dark:text-green-400 mb-4" />
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-28 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-100 dark:from-slate-900 dark:to-slate-800 p-14">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
              <Image
                src="/about-impact.png"
                alt="Impact"
                fill
                className="object-cover"
              />
            </div>

            <div>

              <h2 className="text-3xl font-bold mb-8">
                Our Environmental Impact
              </h2>

              <div className="grid grid-cols-2 gap-8">

                {[
                  { value: "10K+", label: "Products Sold" },
                  { value: "50 Tons", label: "CO₂ Reduced" },
                  { value: "5K+", label: "Happy Customers" },
                  { value: "100%", label: "Eco Verified" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        <section className="text-center">

          <h2 className="text-3xl font-bold">
            Ready to Start Living Sustainably?
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Discover eco-friendly products that help you reduce waste and live
            responsibly.
          </p>

          <a
            href="/products"
            className="inline-block mt-8 px-8 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            Explore Products
          </a>

        </section>

      </div>
    </div>
  )
}
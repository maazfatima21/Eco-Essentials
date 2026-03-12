"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Leaf, Shield, Heart, TrendingUp, Globe, Zap } from "lucide-react"

export default function HomePage() {
  // Mock products data for featured section
  const featuredProducts = [
    {
      name: "Reusable Bamboo Utensils",
      price: "₹499",
      image: "/products/bamboo-utensils.jpg",
      href: "/products",
    },
    {
      name: "Organic Cotton Tote Bag",
      price: "₹699",
      image: "/products/cotton-tote.jpg",
      href: "/products",
    },
    {
      name: "Eco-Friendly Water Bottle",
      price: "₹999",
      image: "/products/water-bottle.jpg",
      href: "/products",
    },
  ]

  return (
    <div className="flex-1">
      <section className="relative h-[450px] w-full flex items-center justify-center bg-gray-900">
        <Image
          src="/home-hero.jpg"
          alt="Eco-Essentials Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute text-center px-6 z-10 max-w-4xl">
          <div className="inline-block mb-4 rounded-full bg-green-500/20 px-4 py-2 backdrop-blur-sm border border-green-400/30">
            <span className="text-sm font-semibold text-green-100">Welcome to Sustainable Living</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Making Sustainability <span className="text-green-400">Accessible</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-100 max-w-2xl mx-auto mb-6">
            Discover eco-friendly products that don’t compromise on style, performance, or your values.
          </p>
          <Link href="/products">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10,000+", label: "Products Delivered", icon: TrendingUp },
              { value: "50 Tons", label: "CO₂ Reduced", icon: Leaf },
              { value: "5,000+", label: "Happy Customers", icon: Heart },
              { value: "100%", label: "Eco-Certified", icon: Shield },
            ].map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="flex flex-col items-center justify-center">
                  <Icon className="h-8 w-8 text-[#0B6623] mb-2" />
                  <dt className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</dt>
                  <dd className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</dd>
                </div>
              )
            })}
          </dl>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/home-showcase.jpg"
              alt="Eco-Essentials Products"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <span className="inline-block rounded-full bg-green-100 dark:bg-green-900/30 px-4 py-1 text-sm font-semibold text-green-600 dark:text-green-400 mb-4">
              Quality Assurance
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Carefully Curated Collection
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Every product undergoes rigorous vetting: certified suppliers, minimal environmental footprint, and ethically sourced.
            </p>
            <ul className="space-y-3">
              {[
                { icon: Shield, text: "Verified eco-certifications" },
                { icon: Globe, text: "Ethically sourced materials" },
                { icon: Heart, text: "Fair trade & ethical practices" },
                { icon: Leaf, text: "Minimal & recyclable packaging" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <item.icon className="h-6 w-6 text-[#0B6623]" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
            <Link href="/products" className="mt-8 inline-block">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Explore Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Shop by Category
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Explore our curated collections of sustainable products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Kitchen & Home", description: "Eco-friendly alternatives for your home", Icon: Leaf, items: "50+ Products" },
              { name: "Personal Care", description: "Natural and sustainable self-care", Icon: Heart, items: "40+ Products" },
              { name: "Fashion & Lifestyle", description: "Sustainable clothing and accessories", Icon: Shield, items: "60+ Products" },
            ].map((cat) => (
              <Link key={cat.name} href="/products">
                <div className="group relative bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:border-green-500 dark:hover:border-green-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{cat.description}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-50 dark:bg-green-950/30 group-hover:bg-green-100 dark:group-hover:bg-green-900/50 transition-colors">
                        <cat.Icon className="w-6 h-6 text-[#0B6623]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">{cat.items}</span>
                    <span className="text-green-600 dark:text-green-400 font-semibold group-hover:translate-x-1 transition-transform">Explore →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Featured Products</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Hand-picked sustainable products just for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Plant Based Cleaners",
                price: "₹899.00",
                image: "/products/Plant Based Cleaners-1.png", 
                href: "/products",
              },
              {
                name: "Eco-Friendly Bamboo Water Bottle",
                price: "₹699.00",
                image: "/products/Eco-Friendly Bamboo Water Bottle-1.jpg",
                href: "/products",
              },
              {
                name: "Compostable Dish Brushes",
                price: "₹1269.00",
                image: "/products/Compostable Dish Brushes-1.png",
                href: "/products",
              },
            ].map((product) => (
              <Link key={product.name} href={product.href} className="group relative bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}        
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{product.name}</h3>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-2">{product.price}</p>
                  <Button variant="outline" className="mt-4 w-full">
                    View Product
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">What Our Customers Say</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Loved by thousands of eco-conscious people</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Eco Enthusiast", content: "Eco-Essentials transformed how I shop. Finally, a brand that truly cares about our planet." },
              { name: "Michael Chen", role: "Sustainability Advocate", content: "The quality is outstanding! I'm amazed that sustainable products can be this good." },
              { name: "Emma Williams", role: "Green Living Blogger", content: "I recommend Eco-Essentials to all my followers. Authentic, transparent, and incredible." },
            ].map((t) => (
              <div key={t.name} className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-900 p-8 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i}>⭐</span>)}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 italic">"{t.content}"</p>
                <p className="font-semibold text-gray-900 dark:text-white">{t.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-600 relative overflow-hidden rounded-xl mx-6 md:mx-16 lg:mx-32">
        <div className="text-center text-white z-10 relative">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-sm md:text-base mb-6">Join thousands of people taking action. Start your sustainable journey today.</p>
          <Link href="/products">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 font-semibold">
              Shop Sustainable Products
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
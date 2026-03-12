"use client"

import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Zap,
  ChevronDown,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [showFAQ, setShowFAQ] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement

    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log("Form submitted:", formData)

    setSubmitted(true)

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="flex-1 min-h-screen bg-slate-50 text-gray-800 dark:bg-slate-950 dark:text-gray-200">

      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Let’s Talk About Sustainability
          </h1>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions about eco-friendly products, shipping, or
            collaborations? Our team is here to help.
          </p>

        </div>
      </section>


      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-3 gap-12">

          <div>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6">

              <div className="flex gap-4">

                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-100 dark:bg-green-900/30">
                  <Mail className="h-5 w-5 text-green-700 dark:text-green-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    support@eco-essentials.com
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    +91 98765 43210
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Address
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Eco Essentials HQ
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Green Street, India
                  </p>

                </div>

              </div>


              <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-slate-800">

                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                  <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Office Hours
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Mon-Fri : 9am – 6pm
                  </p>

                </div>

              </div>

            </div>


            <div className="mt-12 p-6 rounded-xl border bg-green-50 border-green-200 dark:bg-slate-900 dark:border-slate-800">

              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="text-green-700 dark:text-green-400" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Need Quick Help?
                </h3>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Check our FAQ section for answers to common questions.
              </p>

              <Button
                variant="outline"
                className="w-full 
                          border-green-600 text-green-700 dark:border-green-400 dark:text-green-400
                          hover:bg-green-100 dark:hover:bg-green-900/30
                          transition-colors"
                onClick={() => setShowFAQ(!showFAQ)}
              >
                {showFAQ ? "Hide FAQ" : "View FAQ"}
              </Button>

            </div>

          </div>


          <div className="lg:col-span-2">

            {submitted && (
              <div className="mb-8 rounded-xl border border-green-300 bg-green-50 dark:bg-green-900/20 dark:border-green-700 p-6">
                <p className="text-green-700 dark:text-green-300 font-medium">
                  Message sent successfully! We'll reply soon.
                </p>
              </div>
            )}

            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl shadow-sm p-10">

              <h2 className="text-xl font-bold mb-8 text-gray-900 dark:text-white">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid sm:grid-cols-2 gap-6">

                  <Input
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>


                <Input
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />


                <textarea
                  name="message"
                  rows={6}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 focus:ring-2 focus:ring-green-500"
                />

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
                >
                  <Zap className="h-5 w-5" />
                  Send Message
                </Button>

              </form>

            </div>

          </div>

        </div>


        {showFAQ && (

          <div className="mt-20">

            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">

              {[
                {
                  q: "What products do you sell?",
                  a: "We offer eco-friendly household, personal care and lifestyle products."
                },
                {
                  q: "Do you ship internationally?",
                  a: "Yes, we ship to many countries worldwide."
                },
                {
                  q: "What is your return policy?",
                  a: "We offer a 30-day return policy on all products."
                },
                {
                  q: "Are products biodegradable?",
                  a: "Most products are biodegradable or recyclable."
                }
              ].map((faq, i) => (

                <div
                  key={i}
                  className="border border-gray-200 dark:border-slate-800 rounded-lg overflow-hidden"
                >

                  <button
                    onClick={() =>
                      setExpandedFAQ(expandedFAQ === i ? null : i)
                    }
                    className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 dark:bg-slate-900"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">
                      {faq.q}
                    </span>

                    <ChevronDown
                      className={`transition-transform ${
                        expandedFAQ === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedFAQ === i && (
                    <div className="px-6 py-4 text-gray-600 dark:text-gray-400 bg-white dark:bg-slate-950">
                      {faq.a}
                    </div>
                  )}

                </div>

              ))}

            </div>

          </div>

        )}

      </div>


      <section className="bg-gray-100 dark:bg-slate-900 py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
            Other Ways to Connect
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              { icon: MessageSquare, title: "Live Chat" },
              { icon: Mail, title: "Email Support" },
              { icon: Phone, title: "Phone Support" },
            ].map((item) => {
              const Icon = item.icon

              return (

                <div
                  key={item.title}
                  className="bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl p-8 hover:shadow-lg transition"
                >

                  <div className="flex justify-center mb-4">

                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-100 dark:bg-green-900/30">
                      <Icon className="h-6 w-6 text-green-700 dark:text-green-400" />
                    </div>

                  </div>

                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                </div>

              )
            })}

          </div>

        </div>

      </section>

    </div>
  )
}
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { Mail, Phone, MapPin, Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-100">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* Logo and Quote Section */}
        <div className="mb-8 pb-8 border-b border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col items-start">
            <Icons.logo className="h-10 w-auto mb-0" />
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-[#0B6623] flex-shrink-0 mt-1" />
              <p className="text-sm md:text-base font-light italic text-green-300">
                "The greatest threat to our planet is the belief that someone else will save it. Let's create change together."
              </p>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Column 1 - Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2 mb-6" aria-label="Footer Links">
              {siteConfig.footer.slice(0, 4).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-green-400 transition-colors text-xs block"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <h3 className="text-base font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-gray-800 hover:bg-green-600 text-gray-400 hover:text-white transition-all rounded-full"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Column 2 - Contact Info */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-[#0B6623] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <a href="mailto:support@eco-essentials.com" className="text-xs text-gray-300 hover:text-green-400 transition-colors">
                    support@eco-essentials.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-[#0B6623] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <a href="tel:+919876543210" className="text-xs text-gray-300 hover:text-green-400 transition-colors">
                    +91 (98765) 43210
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#0B6623] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400">Address</p>
                  <p className="text-xs text-gray-300">
                    123 Green Street<br />
                    Eco City, EC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Hours */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Business Hours</h3>
            <div className="space-y-2 text-xs">
              <div>
                <p className="text-gray-400">Mon - Fri</p>
                <p className="text-gray-300">9:00 AM - 6:00 PM IST</p>
              </div>
              <div>
                <p className="text-gray-400">Saturday</p>
                <p className="text-gray-300">10:00 AM - 4:00 PM IST</p>
              </div>
              <div>
                <p className="text-gray-400">Sunday</p>
                <p className="text-gray-300">Closed</p>
              </div>
            </div>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 text-xs mb-3">
              Subscribe for eco-tips and offers.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-lg px-3 py-1.5 text-xs bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              />
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white font-semibold text-xs h-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs space-y-1">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-xs">
            <Link href="#" className="hover:text-green-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-green-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-green-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

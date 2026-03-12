"use client"

import { useRouter, useSearchParams } from "next/navigation"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "home-living", label: "Home & Living" },
      { value: "personal-care", label: "Personal Care" },
      { value: "reusable-products", label: "Reusable Products" },
      { value: "eco-kitchen", label: "Eco Kitchen" },
      { value: "sustainable-fashion", label: "Sustainable Fashion" },
    ],
  },
  {
    id: "price",
    name: "Price Range",
    options: [
      { value: "under-500", label: "Under ₹500" },
      { value: "500-1000", label: "₹500 - ₹1,000" },
      { value: "1000-2000", label: "₹1,000 - ₹2,000" },
      { value: "2000-5000", label: "₹2,000 - ₹5,000" },
      { value: "above-5000", label: "Above ₹5,000" },
    ],
  },

  {
    id: "color",
    name: "Color",
    options: [
      { value: "black", label: "Black" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "yellow", label: "Yellow" },
      { value: "silver", label: "Silver" },
      { value: "purple", label: "Purple" },
      { value: "grey", label: "Grey" },
      { value: "beige", label: "Beige" },
      { value: "transparent", label: "Transparent" },
    ],
  },
]

export function ProductFilters() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const searchvalues = Array.from(searchParams.entries())

  return (
    <form className="sticky top-20">
      <h3 className="sr-only">Categories</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name}{" "}
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                  {searchParams.get(section.id) ? `(${searchParams.get(section.id)})` : ""}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {section.options.map((option, optionIdx) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox 
                      id={`filter-${section.id}-${optionIdx}`} 
                      checked ={searchvalues.some(([key, value]) => key ===section.id && value ===
                        option.value)}
                      onClick={(event) => {
                      const parmas = new URLSearchParams(searchParams)
                      const checked = event.currentTarget.dataset.state === "checked"
                      checked ? parmas.delete(section.id) : parmas.set(section.id, option.value)
                      router.replace(`/products?${parmas.toString()}`)
                    }}/>
                    <label 
                    htmlFor={`filter-${section.id}-${optionIdx}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  )
}

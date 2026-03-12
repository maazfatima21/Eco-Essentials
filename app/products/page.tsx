import { client } from "@/sanity/lib/client"

import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"

interface Props {
  searchParams: {
    date?: string
    price?: string
    color?: string
    category?: string
    material?: string
    search?: string
  }
}

function getPriceRangeFilter(priceRange: string): { min: number; max: number } | null {
  switch (priceRange) {
    case "under-500":
      return { min: 0, max: 50000 } // under ₹500
    case "500-1000":
      return { min: 50000, max: 100000 } // ₹500-1000
    case "1000-2000":
      return { min: 100000, max: 200000 } // ₹1000-2000
    case "2000-5000":
      return { min: 200000, max: 500000 } // ₹2000-5000
    case "above-5000":
      return { min: 500000, max: 999999999 } // above ₹5000
    default:
      return null
  }
}

export default async function ProductsPage({searchParams}: Props) {

  const params = await searchParams;
  const { date = "desc", price, color, category, material, search } = params;
  const dateOrder = params.date ? `| order(_createdAt ${params.date})` : "";

  const ProductFilter = `_type == "product"`;
  const colorFilter = color ? `&& "${color}" in colors` : "";
  const categoryFilter = category ? `&& "${category}" in categories` : "";
  const materialFilter = material ? `&& "${material}" in material` : "";
  const searchFilter = search ? `&& name match "${search}"` : "";
  const filter = `*[${ProductFilter}${colorFilter}${categoryFilter}${materialFilter}${searchFilter}]${dateOrder}`;

  const query = `${filter} {
    _id,
    _createdAt,
    name,
    sku,
    images,
    currency,
    price,
    description,
    "slug": slug.current
  }`;

  let products: SanityProduct[] = await (client.fetch as any)(query);

  // Apply price range filter on client side
  if (price && (price === "under-500" || price === "500-1000" || price === "1000-2000" || price === "2000-5000" || price === "above-5000")) {
    const priceRange = getPriceRangeFilter(price);
    if (priceRange) {
      products = products.filter(
        (product: SanityProduct) => product.price >= priceRange.min && product.price <= priceRange.max
      );
    }
  }

  // Apply price sorting on client side
  if (price === "asc") {
    products = products.slice().sort((a, b) => a.price - b.price);
  } else if (price === "desc") {
    products = products.slice().sort((a, b) => b.price - a.price);
  }

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal text-gray-900 dark:text-white">Our Products</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-700 dark:text-gray-300">Browse our collection of eco-friendly products</p>
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl text-gray-900 dark:text-white">
              {products.length} result{products.length === 1 ? "" : "s"}
            </h1>
            <ProductSort/>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className={cn(
              products.length > 0
                ? "grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10"
                : "grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-x-8 gap-y-10"
            )}>
              <div className="col-span-1">
                <ProductFilters/>
              </div>
              <div className="col-span-3">
                <ProductGrid products={products} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

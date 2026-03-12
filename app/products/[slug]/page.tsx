import { client } from "@/sanity/lib/client"

import { SanityProduct, inventory } from "@/config/inventory"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"

interface Props {
  params: {
    slug: string
  }
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
}

export default async function Page({ params }: Props) {
  const { slug } = await params

  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
    _id, 
    _createdAt,
    "id": _id,
    name,
    sku,
    images,
    price,
    currency,
    description,
    sizes,
    categories,
    colors,
    "slug":slug.current
  }`
  
  let product: SanityProduct | null = null
  try {
    product = await (client.fetch as any)(query)
  } catch (error) {
    console.error("Error fetching from Sanity:", error)
  }

  if (!product) {
    const inventoryProduct = inventory.find(
      (item) => slugify(item.name) === slug
    )
    if (inventoryProduct) {
      product = {
        ...inventoryProduct,
        _id: inventoryProduct.id,
        _createdAt: new Date(),
        slug: slug,
      } as unknown as SanityProduct
    }
  }

  console.log("Product found:", product?.name || "Not found")

  if (!product) {
    return (
      <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="pb-20 text-center">
            <h1 className="text-2xl font-bold">Product not found</h1>
            <p className="text-gray-600 mt-2">The product you're looking for doesn't exist or hasn't been published yet.</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Product */}
        <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
          {/* Product gallery */}
          <ProductGallery product={product} />
          {/* Product info */}
          <ProductInfo product={product} />
        </div>
      </div>
    </main>
  )
}

import { createClient } from "@sanity/client"
import { inventory } from "@/config/inventory"

function getSeedClient() {
  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2023-05-12",
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
  })
}

export async function seedSanityData() {
  try {
    const seedClient = getSeedClient()
    const transaction = seedClient.transaction()

    inventory.forEach((item) => {
      const product = {
        _type: "product",
        _id: item.id,
        name: item.name,
        currency: item.currency,
        description: item.description,
        price: item.price,
        sku: item.sku,
        colors: item.colors,
        categories: item.categories,
        slug: {
          _type: "slug",
          current: slugify(item.name),
        },
      }
      transaction.createOrReplace(product)
    })

    await transaction.commit()
    console.log("Products created successfully")

    await seedSanityImages(seedClient)
    console.log("Sanity data seeded successfully")
  } catch (error) {
    console.error("Seed error:", error)
    throw error
  }
}

async function seedSanityImages(seedClient: ReturnType<typeof getSeedClient>) {
  await Promise.all(
    inventory.map(async (item) => {
      try {
        let images: any[] = []

        for (const image of item.images) {
          try {
            const imageAssetResponse = await fetch(image)
            const imageAssetBuffer = await imageAssetResponse.arrayBuffer()
            const imageAsset = await seedClient.assets.upload(
              "image",
              Buffer.from(imageAssetBuffer)
            )
            images.push({
              _key: imageAsset._id,
              _type: "image",
              asset: {
                _type: "reference",
                _ref: imageAsset._id,
              },
            })
          } catch (error) {
            console.error(`Failed to upload image for ${item.name}:`, error)
          }
        }

        if (images.length > 0) {
          await seedClient
            .patch(item.id)
            .set({ images })
            .commit()
          console.log(`Images updated for ${item.name}`)
        }
      } catch (error) {
        console.error(`Error processing images for ${item.name}:`, error)
      }
    })
  )
}


function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
}

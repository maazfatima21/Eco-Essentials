import { NextResponse } from "next/server"
import { seedSanityData } from "@/lib/seed"

export async function GET() {
  try {
    await seedSanityData()
    return NextResponse.json({ message: "Data seeded successfully" })
  } catch (error) {
    console.error("Seeding error:", error)
    return NextResponse.json({ error: "Failed to seed data" }, { status: 500 })
  }
}

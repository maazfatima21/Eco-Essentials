export function formatPrice(price: number, currency: string): string {
  if (currency === "Rs." || currency === "INR") {
    return `Rs. ${(price / 100).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`
  }
  
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "USD",
    minimumFractionDigits: 2,
  }).format(price / 100)
}

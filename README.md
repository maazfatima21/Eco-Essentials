# Eco-Essentials Ecommerce

Eco-Essentials is a robust e-commerce platform engineered with Next.js, Sanity CMS, Stripe for payments, and Tailwind CSS for styling. It showcases sustainable products, includes a fully functional shopping cart, streamlined checkout, and an integrated admin studio.

## Features
- Product listing and filtering
- Shopping cart and checkout
- Stripe payment integration
- Sanity CMS for product management
- Responsive design with Tailwind CSS
- Admin studio for content editing

## Screenshots

### Home Page
![Home Page](Screenshots/home.jpg)

### Products Page
![Products Page](Screenshots/products.jpg)

### About Page
![About Page](Screenshots/about.jpg)

### Contact Page
![Contact Page](Screenshots/contact.jpg)

### Cart & Payment Page
![Cart & Payment Page](Screenshots/cart%20and%20payment.jpg)

### Success Page
![Success Page](Screenshots/success.jpg)


## Getting Started

1. **Clone the repository:**
	```bash
	git clone https://github.com/maazfatima21/Eco-Essentials.git
	cd Eco-Essentials
	```
2. **Install dependencies:**
	```bash
	npm install --legacy-peer-deps
	```
3. **Set up environment variables:**
	Create a `.env.local` file and add:
	```env
	NEXT_PUBLIC_SANITY_API_VERSION=2023-05-12
	NEXT_PUBLIC_SANITY_DATASET=your_dataset
	NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
	SANITY_API_TOKEN=your_sanity_token
	STRIPE_SECRET_KEY=your_stripe_secret
	```
4. **Run the development server:**
	```bash
	npm run dev
	```

## Deployment

Deploy on [Vercel](https://vercel.com/) with the following settings:
- Build Command: `npm run build`
- Install Command: `npm install --legacy-peer-deps`
- Output Directory: Next.js default
- Add all required environment variables

## Folder Structure

- `app/` - Main application pages
- `components/` - Reusable UI components
- `config/` - Site and inventory configuration
- `lib/` - Utility libraries (Stripe, Sanity, etc.)
- `sanity/` - Sanity CMS schemas and config
- `styles/` - Global styles
- `public/` - Static assets and product images
- `types/` - Custom TypeScript declarations

## License

MIT

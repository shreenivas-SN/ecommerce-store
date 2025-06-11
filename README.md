# Ecommerce Store

A modern, responsive ecommerce store built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🛍️ Product browsing and filtering
- 🛒 Shopping cart functionality
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- 🔍 Product search and categories
- 💳 Checkout integration ready
- 🖼️ Image gallery with zoom
- 📦 Product variants (size, color)

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **UI Components:** Headless UI
- **Icons:** Lucide React
- **Notifications:** React Hot Toast

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file and add your API URL:
   ```
   NEXT_PUBLIC_API_URL=your_api_url_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── (routes)/          # Route groups
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── gallery/          # Image gallery components
├── actions/              # Server actions
├── hooks/                # Custom hooks
├── providers/            # Context providers
├── lib/                  # Utility functions
└── types.ts              # TypeScript type definitions
```

## Deployment

This project is ready for deployment on platforms like Vercel, Netlify, or any other hosting service that supports Next.js.

For Vercel deployment:
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables
4. Deploy!

## Environment Variables

- `NEXT_PUBLIC_API_URL` - Your backend API URL

## License

MIT License
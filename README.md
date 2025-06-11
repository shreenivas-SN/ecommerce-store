# Modern Ecommerce Store

A cutting-edge, responsive ecommerce store built with Next.js 15, TypeScript, and Tailwind CSS.

## ✨ Features

- 🛍️ **Product Browsing** - Browse products with advanced filtering
- 🛒 **Shopping Cart** - Add/remove items with persistent storage
- 📱 **Responsive Design** - Optimized for all devices
- 🎨 **Modern UI** - Beautiful interface with Tailwind CSS
- 🔍 **Product Search** - Filter by categories, sizes, and colors
- 💳 **Checkout Ready** - Integration-ready checkout system
- 🖼️ **Image Gallery** - Interactive product image gallery
- 📦 **Product Variants** - Support for sizes and colors
- ⚡ **Performance** - Built with Next.js 15 for optimal speed

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **UI Components:** Headless UI
- **Icons:** Lucide React
- **Notifications:** React Hot Toast
- **HTTP Client:** Axios
- **Query Strings:** query-string

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd modern-ecommerce-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=https://your-api-url.com/api
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js 15 app directory
│   ├── (routes)/          # Route groups
│   │   ├── cart/          # Shopping cart pages
│   │   ├── category/      # Category pages
│   │   └── product/       # Product detail pages
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # UI components (Button, Modal, etc.)
│   └── gallery/          # Image gallery components
├── actions/              # Server actions for data fetching
├── hooks/                # Custom React hooks
├── providers/            # Context providers
├── lib/                  # Utility functions
└── types.ts              # TypeScript type definitions
```

## 🎯 Key Components

### State Management
- **Cart Management** - Zustand store with localStorage persistence
- **Modal State** - Preview modal for quick product views

### UI Components
- **Product Cards** - Interactive product displays with hover effects
- **Image Gallery** - Tabbed gallery with thumbnail navigation
- **Filters** - Category, size, and color filtering
- **Responsive Navigation** - Mobile-friendly navigation

### Data Fetching
- **Server Actions** - Optimized data fetching with Next.js 15
- **Mock Data** - Fallback data for development
- **Caching** - Built-in Next.js caching strategies

## 🌐 API Integration

The store is designed to work with a REST API. Update the `NEXT_PUBLIC_API_URL` environment variable to connect to your backend.

### Expected API Endpoints:
- `GET /categories` - List all categories
- `GET /categories/:id` - Get category details
- `GET /products` - List products with filtering
- `GET /products/:id` - Get product details
- `GET /sizes` - List available sizes
- `GET /colors` - List available colors
- `GET /billboards/:id` - Get billboard data
- `POST /checkout` - Create checkout session

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
This project works on any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | Your backend API URL | Yes |

## 📱 Features in Detail

### Shopping Cart
- Persistent storage using localStorage
- Add/remove items with toast notifications
- Real-time cart count in navigation
- Order summary with total calculation

### Product Filtering
- Filter by category, size, and color
- URL-based filtering for shareable links
- Mobile-friendly filter drawer
- Clear filter states

### Responsive Design
- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly interactions
- Accessible navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Headless UI for accessible components
- Pexels for demo images

---

Built with ❤️ using Next.js 15 and modern web technologies.
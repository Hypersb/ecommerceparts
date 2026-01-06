# Part Thieves - Auto Parts E-Commerce Platform

A modern, fully responsive e-commerce web application for buying and selling car parts. Built with React, Vite, Tailwind CSS, and Framer Motion.

![Part Thieves](https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800)

## 🚀 Features

### User Features
- **Home Page**: Hero section with featured products and categories
- **Product Browsing**: Advanced filtering by category, brand, price, and condition
- **Product Details**: Image gallery, specifications, and compatibility information
- **Shopping Cart**: Add, remove, and manage quantities
- **Wishlist**: Save favorite items for later
- **Checkout**: Multi-step checkout process (UI only, no real payment)
- **Search**: Live product search functionality
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Dark/Light Mode**: Toggle between themes with persistent storage

### Seller Features
- **Seller Dashboard**: Manage your listings and view statistics
- **Add Products**: Create new listings with images, prices, and details
- **Edit Products**: Update existing product information
- **Delete Products**: Remove listings from the marketplace
- **Analytics**: View sales metrics and performance

### Admin Features
- **Admin Dashboard**: Comprehensive platform management
- **User Management**: View and manage buyers and sellers
- **Product Management**: Oversee all product listings
- **Order Management**: Track and manage all orders
- **Analytics**: Sales data and growth metrics

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: Lucide React
- **State Management**: React Context API

## 📁 Project Structure

```
demobuy/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   └── ProductCard.jsx
│   ├── context/         # React Context providers
│   │   ├── AuthContext.jsx
│   │   ├── CartContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/            # Mock data
│   │   └── mockData.js
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── SellerDashboard.jsx
│   │   └── AdminDashboard.jsx
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## 🎨 Design Features

- **Automotive Theme**: Custom color palette with dark grays, blacks, and red accents
- **Glassmorphism**: Modern glass-effect UI elements
- **Smooth Animations**: Page transitions, hover effects, and loading states
- **Custom Scrollbar**: Styled scrollbar matching the theme
- **Responsive Grid Layouts**: Optimized for all screen sizes
- **Accessible**: Keyboard navigation and screen reader friendly

## 🔐 Demo Credentials

### Admin Account
- Email: `admin@demobuy.com`
- Password: `admin123`

### Seller Account
- Email: `seller@demobuy.com`
- Password: `seller123`

### Buyer Account
- Email: `buyer@demobuy.com`
- Password: `buyer123`

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd demobuy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📱 Pages & Routes

| Route | Description | Access |
|-------|-------------|--------|
| `/` | Home page with featured products | Public |
| `/products` | Product listing with filters | Public |
| `/products/:id` | Product detail page | Public |
| `/cart` | Shopping cart | Public |
| `/checkout` | Checkout process | Authenticated |
| `/login` | User login | Public |
| `/register` | User registration | Public |
| `/dashboard` | Seller dashboard | Seller only |
| `/admin` | Admin dashboard | Admin only |

## 🎯 Key Components

### Context Providers

- **ThemeContext**: Manages dark/light mode with localStorage persistence
- **AuthContext**: Handles user authentication and authorization
- **CartContext**: Manages shopping cart and wishlist functionality

### Reusable Components

- **Button**: Customizable button with variants (primary, secondary, outline, ghost)
- **Card**: Animated card component with hover effects
- **Input**: Styled input field with label and error handling
- **Modal**: Animated modal dialog with customizable sizes
- **Navbar**: Responsive navigation with cart count and user menu
- **ProductCard**: Product display card with wishlist and cart actions

## 🎨 Color Palette

```css
Automotive Grays: #0d0d0d to #f8f9fa
Accent Red: #dc2626
Accent Silver: #94a3b8
Accent Gold: #f59e0b
```

## 🔄 State Management

The application uses React Context API for global state management:

- User authentication state
- Shopping cart and wishlist
- Theme preferences
- Product filters

## 📦 Mock Data

The application includes comprehensive mock data:
- 12 sample products across 11 categories
- 4 user accounts (admin, sellers, buyer)
- 3 sample orders
- Product ratings and reviews

## 🌟 Future Enhancements

- Backend API integration
- Real payment gateway
- User reviews and ratings system
- Order tracking
- Email notifications
- Advanced search with auto-complete
- Product comparison feature
- Seller analytics dashboard
- Admin moderation tools
- Multi-language support

## 📄 License

This is a demo project created for portfolio purposes.

## 👨‍💻 Author

Built as a demonstration of modern React development practices.

## 🙏 Acknowledgments

- Images from Unsplash
- Icons from Lucide React
- Fonts from Google Fonts
- UI inspiration from modern e-commerce platforms

---

**Note**: This is a frontend-only demo application. No actual transactions are processed, and all data is stored locally in the browser.


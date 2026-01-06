import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  User, 
  Moon, 
  Sun, 
  Search,
  Menu,
  X,
  Heart,
  LayoutDashboard
} from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const { cartCount, wishlist } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/bmw', label: 'BMW' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-lg border-b border-silver-300 dark:border-silver-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <img 
                src="/PT%20Images/logo/PT%20INITIAL.png" 
                alt="Part Thieves Logo" 
                className="h-12 w-auto object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors relative ${
                  isActive(link.path)
                    ? 'text-red-600 dark:text-red-500'
                    : 'text-gray-700 dark:text-silver-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-automotive-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search car parts..."
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-900 border border-silver-400 dark:border-silver-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-silver-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-silver-300"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Wishlist */}
            {user && (
              <Link
                to="/wishlist"
                className="p-2 rounded-lg hover:bg-silver-200 dark:hover:bg-gray-800 transition-colors relative text-gray-700 dark:text-silver-300"
              >
                <Heart size={20} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            )}

            {/* Cart */}
            <Link
              to="/cart"
              className="p-2 rounded-lg hover:bg-silver-200 dark:hover:bg-gray-800 transition-colors relative text-gray-700 dark:text-silver-300"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="hidden md:flex items-center gap-2">
                {(user.role === 'seller' || user.role === 'admin') && (
                  <Link to={user.role === 'admin' ? '/admin' : '/dashboard'}>
                    <Button variant="ghost" size="sm">
                      <LayoutDashboard size={18} />
                      Dashboard
                    </Button>
                  </Link>
                )}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-silver-200 dark:bg-gray-800 text-gray-900 dark:text-white">
                  <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full" />
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={logout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    <User size={18} />
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-silver-200 dark:hover:bg-gray-800 text-gray-700 dark:text-silver-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-silver-300 dark:border-silver-700 bg-white dark:bg-black"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    isActive(link.path)
                      ? 'bg-red-600 text-white'
                      : 'hover:bg-silver-200 dark:hover:bg-gray-800 text-gray-700 dark:text-silver-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {user ? (
                <>
                  {(user.role === 'seller' || user.role === 'admin') && (
                    <Link
                      to={user.role === 'admin' ? '/admin' : '/dashboard'}
                      onClick={() => setIsMenuOpen(false)}
                      className="px-4 py-2 rounded-lg hover:bg-silver-100 dark:hover:bg-secondary"
                    >
                      Dashboard
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="px-4 py-2 rounded-lg hover:bg-silver-100 dark:hover:bg-secondary text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">Login</Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="primary" className="w-full">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

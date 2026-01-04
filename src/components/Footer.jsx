import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-automotive-900 dark:bg-automotive-950 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-accent-red mb-4">DemoBuy</h3>
            <p className="text-automotive-400 mb-4">
              Your trusted marketplace for quality auto parts. Find everything you need to keep your vehicle running smoothly.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent-red transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-automotive-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-automotive-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/login" className="text-automotive-400 hover:text-white transition-colors">Login</Link></li>
              <li><Link to="/register" className="text-automotive-400 hover:text-white transition-colors">Sign Up</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/products?category=brakes" className="text-automotive-400 hover:text-white transition-colors">Brakes</Link></li>
              <li><Link to="/products?category=engine" className="text-automotive-400 hover:text-white transition-colors">Engine</Link></li>
              <li><Link to="/products?category=suspension" className="text-automotive-400 hover:text-white transition-colors">Suspension</Link></li>
              <li><Link to="/products?category=lighting" className="text-automotive-400 hover:text-white transition-colors">Lighting</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-automotive-400">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-automotive-400">
                <Mail size={18} />
                <span>support@demobuy.com</span>
              </li>
              <li className="flex items-center gap-2 text-automotive-400">
                <MapPin size={18} />
                <span>123 Auto Street, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-automotive-800 mt-8 pt-8 text-center text-automotive-400">
          <p>&copy; {new Date().getFullYear()} DemoBuy. All rights reserved. | Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

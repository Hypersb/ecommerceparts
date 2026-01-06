import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Search, ShoppingBag } from 'lucide-react';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-automotive-50 dark:bg-automotive-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="text-9xl font-bold text-accent mb-4"
        >
          404
        </motion.div>
        
        <h1 className="text-4xl font-bold mb-4 text-automotive-900 dark:text-white">
          Page Not Found
        </h1>
        
        <p className="text-lg text-automotive-600 dark:text-automotive-400 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="primary" className="flex items-center gap-2">
              <Home size={20} />
              Go Home
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="secondary" className="flex items-center gap-2">
              <ShoppingBag size={20} />
              Browse Products
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <img
            src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600"
            alt="Lost car"
            className="rounded-2xl shadow-2xl mx-auto opacity-50"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react';

const Toast = ({ message, type = 'success', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: <CheckCircle className="text-green-500" size={20} />,
    error: <XCircle className="text-red-500" size={20} />,
    warning: <AlertCircle className="text-yellow-500" size={20} />
  };

  const bgColors = {
    success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    error: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className={`${bgColors[type]} border rounded-lg shadow-lg p-4 flex items-center gap-3 min-w-[300px] max-w-md`}
        >
          {icons[type]}
          <p className="flex-1 text-sm font-medium text-automotive-900 dark:text-white">
            {message}
          </p>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className="text-automotive-500 hover:text-automotive-700 dark:text-automotive-400 dark:hover:text-automotive-200"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleCartUpdate = (e) => {
      const { action, product } = e.detail;
      const messages = {
        add: `${product.name} added to cart!`,
        remove: `Item removed from cart`,
        update: `Cart updated`
      };
      
      addToast(messages[action] || 'Cart updated', 'success');
    };

    const handleWishlistUpdate = (e) => {
      const { action, product } = e.detail;
      const messages = {
        add: `${product.name} added to wishlist!`,
        remove: `Item removed from wishlist`
      };
      
      addToast(messages[action] || 'Wishlist updated', 'success');
    };

    window.addEventListener('cart-updated', handleCartUpdate);
    window.addEventListener('wishlist-updated', handleWishlistUpdate);
    
    return () => {
      window.removeEventListener('cart-updated', handleCartUpdate);
      window.removeEventListener('wishlist-updated', handleWishlistUpdate);
    };
  }, []);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

export default Toast;

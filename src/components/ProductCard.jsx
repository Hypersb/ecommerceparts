import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from './Button';
import Card from './Card';

const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist, isInWishlist } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToWishlist(product);
  };

  return (
    <Link to={`/products/${product.id}`}>
      <Card className="overflow-hidden h-full">
        <div className="relative">
          {/* Image */}
          <div className="aspect-square overflow-hidden bg-silver-100 dark:bg-gray-900">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.featured && (
              <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">
                FEATURED
              </span>
            )}
            {product.condition === 'new' && (
              <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded">
                NEW
              </span>
            )}
            {product.stock < 10 && product.stock > 0 && (
              <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded">
                LOW STOCK
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleToggleWishlist}
            className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-colors ${
              isInWishlist(product.id)
                ? 'bg-red-600 text-white'
                : 'bg-white/90 hover:bg-red-600 hover:text-white'
            }`}
          >
            <Heart size={18} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
          </motion.button>
        </div>

        <div className="p-4">
          {/* Category & Brand */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase">
              {product.category}
            </span>
            <span className="text-xs text-automotive-500 dark:text-automotive-400">
              {product.brand}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-lg mb-2 text-automotive-900 dark:text-white line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-automotive-300 dark:text-automotive-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-automotive-600 dark:text-automotive-400">
              {product.rating} ({product.reviews})
            </span>
          </div>

          {/* Price & Actions */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-red-600 dark:text-red-500">
                ${product.price}
              </span>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <ShoppingCart size={16} />
              {product.stock === 0 ? 'Out of Stock' : 'Add'}
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;

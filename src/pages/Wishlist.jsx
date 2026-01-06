import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';
import Card from '../components/Card';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart, addToWishlist } = useCart();

  const handleMoveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  const handleRemove = (productId) => {
    removeFromWishlist(productId);
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-automotive-50 dark:bg-automotive-900 flex items-center justify-center">
        <div className="text-center">
          <Heart size={80} className="mx-auto text-automotive-400 mb-6" />
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Your wishlist is empty</h2>
          <p className="text-automotive-600 dark:text-automotive-400 mb-8">
            Start adding items to your wishlist by clicking the heart icon on products
          </p>
          <Link to="/products">
            <Button variant="primary" size="lg">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-automotive-50 dark:bg-automotive-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-automotive-900 dark:text-white mb-2">
            My Wishlist
          </h1>
          <p className="text-automotive-600 dark:text-automotive-400">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="relative">
                  {/* Image */}
                  <Link to={`/products/${product.id}`}>
                    <div className="aspect-square overflow-hidden bg-silver-100 dark:bg-gray-900">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </Link>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>

                  {/* Stock Badge */}
                  {product.stock === 0 && (
                    <div className="absolute top-3 left-3 px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">
                      OUT OF STOCK
                    </div>
                  )}
                  {product.stock > 0 && product.stock < 10 && (
                    <div className="absolute top-3 left-3 px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded">
                      LOW STOCK
                    </div>
                  )}
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
                  <Link to={`/products/${product.id}`}>
                    <h3 className="font-semibold text-lg mb-3 text-automotive-900 dark:text-white line-clamp-2 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-red-600 dark:text-red-500">
                      ${product.price}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleMoveToCart(product)}
                      disabled={product.stock === 0}
                      className="w-full"
                    >
                      <ShoppingCart size={18} />
                      Move to Cart
                    </Button>
                    <Link to={`/products/${product.id}`} className="block">
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                        <ArrowRight size={18} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="mt-12 text-center">
          <Link to="/products">
            <Button variant="secondary" size="lg">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

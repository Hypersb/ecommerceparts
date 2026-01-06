import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Minus, 
  Plus, 
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft
} from 'lucide-react';
import { products } from '../data/mockData';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, isInWishlist } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/products">
            <Button variant="primary">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-automotive-50 dark:bg-automotive-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-automotive-600 dark:text-automotive-400 hover:text-accent transition-colors"
          >
            <ChevronLeft size={20} />
            Back
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white dark:bg-automotive-800 rounded-2xl overflow-hidden shadow-xl mb-4"
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </motion.div>

            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-lg overflow-hidden ${
                      selectedImage === index
                        ? 'ring-4 ring-accent'
                        : 'ring-2 ring-automotive-200 dark:ring-automotive-700'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="text-sm font-medium text-accent uppercase">
                {product.category}
              </span>
              <span className="mx-2 text-automotive-400">•</span>
              <span className="text-sm text-automotive-600 dark:text-automotive-400">
                {product.brand}
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-4 dark:text-white">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-automotive-300 dark:text-automotive-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-medium">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-4xl font-bold text-accent mb-2">
                ${product.price}
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  product.stock > 0
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  product.condition === 'new'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                }`}>
                  {product.condition === 'new' ? 'Brand New' : 'Used'}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3 dark:text-white">Description</h2>
              <p className="text-automotive-700 dark:text-automotive-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Compatibility */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3 dark:text-white">Compatibility</h2>
              <ul className="space-y-2">
                {product.compatibility.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-automotive-700 dark:text-automotive-300"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 dark:text-white">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-white dark:bg-automotive-800 rounded-lg shadow-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-automotive-100 dark:hover:bg-automotive-700 rounded-l-lg"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="px-6 font-bold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-3 hover:bg-automotive-100 dark:hover:bg-automotive-700 rounded-r-lg"
                    disabled={quantity >= product.stock}
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <Button
                variant="primary"
                size="lg"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleBuyNow}
                disabled={product.stock === 0}
                className="flex-1"
              >
                Buy Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => addToWishlist(product)}
              >
                <Heart
                  size={20}
                  fill={isInWishlist(product.id) ? 'currentColor' : 'none'}
                />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-white dark:bg-automotive-800 rounded-xl">
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-accent" />
                <div className="text-sm font-medium dark:text-white">Fast Shipping</div>
                <div className="text-xs text-automotive-600 dark:text-automotive-400">2-5 days</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-accent" />
                <div className="text-sm font-medium dark:text-white">Guaranteed</div>
                <div className="text-xs text-automotive-600 dark:text-automotive-400">Quality checked</div>
              </div>
              <div className="text-center">
                <RotateCcw className="w-8 h-8 mx-auto mb-2 text-accent" />
                <div className="text-sm font-medium dark:text-white">Easy Returns</div>
                <div className="text-xs text-automotive-600 dark:text-automotive-400">30 days</div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 dark:text-white">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

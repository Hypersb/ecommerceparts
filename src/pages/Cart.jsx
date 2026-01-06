import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import Card from '../components/Card';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-automotive-50 dark:bg-automotive-900 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={80} className="mx-auto text-automotive-400 mb-6" />
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Your cart is empty</h2>
          <p className="text-automotive-600 dark:text-automotive-400 mb-8">
            Add some amazing auto parts to get started!
          </p>
          <Link to="/products">
            <Button variant="primary" size="lg">
              Browse Products
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const shipping = 15.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  return (
    <div className="min-h-screen bg-automotive-50 dark:bg-automotive-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover={false} className="p-6">
                    <div className="flex gap-6">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-32 h-32 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <div>
                            <Link
                              to={`/products/${item.id}`}
                              className="text-xl font-bold hover:text-accent transition-colors dark:text-white"
                            >
                              {item.name}
                            </Link>
                            <p className="text-sm text-automotive-600 dark:text-automotive-400">
                              {item.brand} • {item.category}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-automotive-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center bg-white dark:bg-automotive-700 rounded-lg shadow-md">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-automotive-100 dark:hover:bg-automotive-600 rounded-l-lg"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-4 font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-automotive-100 dark:hover:bg-automotive-600 rounded-r-lg"
                              disabled={item.quantity >= item.stock}
                            >
                              <Plus size={16} />
                            </button>
                          </div>

                          <div className="text-right">
                            <div className="text-2xl font-bold text-accent">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                            <div className="text-sm text-automotive-600 dark:text-automotive-400">
                              ${item.price} each
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-24">
              <Card hover={false} className="p-6">
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-automotive-600 dark:text-automotive-400">Subtotal</span>
                    <span className="font-semibold dark:text-white">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-automotive-600 dark:text-automotive-400">Shipping</span>
                    <span className="font-semibold dark:text-white">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-automotive-600 dark:text-automotive-400">Tax (8%)</span>
                    <span className="font-semibold dark:text-white">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-automotive-200 dark:border-automotive-700 pt-4">
                    <div className="flex justify-between text-lg">
                      <span className="font-bold dark:text-white">Total</span>
                      <span className="font-bold text-accent text-2xl">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {user ? (
                  <Link to="/checkout">
                    <Button variant="primary" size="lg" className="w-full mb-4">
                      Proceed to Checkout
                      <ArrowRight />
                    </Button>
                  </Link>
                ) : (
                  <Link to="/login?redirect=checkout">
                    <Button variant="primary" size="lg" className="w-full mb-4">
                      Login to Checkout
                      <ArrowRight />
                    </Button>
                  </Link>
                )}

                <Link to="/products">
                  <Button variant="ghost" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </Card>

              {/* Trust Badges */}
              <div className="mt-6 p-4 bg-white dark:bg-automotive-800 rounded-xl">
                <div className="flex items-center gap-3 text-sm text-automotive-600 dark:text-automotive-400">
                  <span>✓</span>
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-automotive-600 dark:text-automotive-400 mt-2">
                  <span>✓</span>
                  <span>30-Day Returns</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-automotive-600 dark:text-automotive-400 mt-2">
                  <span>✓</span>
                  <span>Fast Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

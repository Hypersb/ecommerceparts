import { motion } from 'framer-motion';
import { ArrowRight, Shield, Truck, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import * as LucideIcons from 'lucide-react';

const Home = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-automotive-900 via-automotive-800 to-automotive-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920')] opacity-10 bg-cover bg-center" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Premium Auto Parts
                <span className="block text-accent-red mt-2">at Your Fingertips</span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-automotive-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Discover top-quality car parts from trusted sellers. Fast shipping, competitive prices, and expert support.
              </motion.p>
              
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/products">
                  <Button variant="primary" size="lg">
                    Shop Now
                    <ArrowRight />
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" size="lg">
                    Become a Seller
                  </Button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-8 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div>
                  <div className="text-3xl font-bold text-accent-red">10K+</div>
                  <div className="text-automotive-400">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-red">500+</div>
                  <div className="text-automotive-400">Sellers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-red">50K+</div>
                  <div className="text-automotive-400">Orders</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800"
                alt="Auto Parts"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-automotive-50 dark:bg-automotive-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Quality Guaranteed', desc: 'All products verified' },
              { icon: Truck, title: 'Fast Shipping', desc: 'Delivered in 2-5 days' },
              { icon: Award, title: 'Trusted Sellers', desc: 'Verified & rated' },
              { icon: Zap, title: 'Easy Returns', desc: '30-day return policy' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-automotive-800 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-accent-red" />
                <h3 className="font-bold text-lg mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-automotive-600 dark:text-automotive-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Shop by Category</h2>
            <p className="text-xl text-automotive-600 dark:text-automotive-400">
              Find the perfect parts for your vehicle
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.slice(0, 8).map((category, index) => {
              const IconComponent = LucideIcons[category.icon.split('-').map((word, i) => 
                i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join('')] || LucideIcons.Box;
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={`/products?category=${category.id}`}
                    className="block bg-white dark:bg-automotive-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group"
                  >
                    <IconComponent className="w-10 h-10 text-accent-red mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-1 dark:text-white">{category.name}</h3>
                    <p className="text-sm text-automotive-600 dark:text-automotive-400">
                      {category.count} items
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-automotive-50 dark:bg-automotive-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Featured Products</h2>
            <p className="text-xl text-automotive-600 dark:text-automotive-400">
              Top-rated parts from our sellers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/products">
              <Button variant="primary" size="lg">
                View All Products
                <ArrowRight />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-red dark:bg-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-white rounded-2xl shadow-2xl p-12 border border-red-200"
          >
            <h2 className="text-4xl font-bold mb-6 text-automotive-900">
              Ready to Start Selling?
            </h2>
            <p className="text-xl mb-8 text-automotive-600">
              Join hundreds of trusted sellers and reach thousands of buyers
            </p>
            <Link to="/register">
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-automotive-900 text-white hover:bg-automotive-800"
              >
                Create Seller Account
                <ArrowRight />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

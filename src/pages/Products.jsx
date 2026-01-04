import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, X, SlidersHorizontal } from 'lucide-react';
import { products, categories } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);
  
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    brand: '',
    condition: '',
    priceRange: 'all',
    sortBy: 'featured'
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const brands = [...new Set(products.map(p => p.brand))].sort();
  
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100 - $300', value: '100-300' },
    { label: 'Over $300', value: '300-999999' }
  ];

  useEffect(() => {
    let filtered = [...products];

    // Category filter
    if (filters.category) {
      filtered = filtered.filter(p => 
        p.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Brand filter
    if (filters.brand) {
      filtered = filtered.filter(p => p.brand === filters.brand);
    }

    // Condition filter
    if (filters.condition) {
      filtered = filtered.filter(p => p.condition === filters.condition);
    }

    // Price range filter
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    // Sorting
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        filtered.sort((a, b) => b.featured - a.featured);
    }

    setFilteredProducts(filtered);
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    if (key === 'category') {
      if (value) {
        searchParams.set('category', value);
      } else {
        searchParams.delete('category');
      }
      setSearchParams(searchParams);
    }
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      brand: '',
      condition: '',
      priceRange: 'all',
      sortBy: 'featured'
    });
    setSearchParams({});
  };

  const activeFilterCount = Object.values(filters).filter(v => v && v !== 'all' && v !== 'featured').length;

  return (
    <div className="min-h-screen bg-automotive-50 dark:bg-automotive-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">Browse Products</h1>
          <p className="text-automotive-600 dark:text-automotive-400">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white dark:bg-automotive-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold dark:text-white">Filters</h2>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-accent-red hover:underline"
                  >
                    Clear all
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {/* Category */}
                <div>
                  <h3 className="font-semibold mb-3 dark:text-white">Category</h3>
                  <select
                    value={filters.category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="w-full px-3 py-2 bg-automotive-50 dark:bg-automotive-700 border border-automotive-200 dark:border-automotive-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red"
                  >
                    <option value="">All Categories</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                {/* Brand */}
                <div>
                  <h3 className="font-semibold mb-3 dark:text-white">Brand</h3>
                  <select
                    value={filters.brand}
                    onChange={(e) => handleFilterChange('brand', e.target.value)}
                    className="w-full px-3 py-2 bg-automotive-50 dark:bg-automotive-700 border border-automotive-200 dark:border-automotive-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red"
                  >
                    <option value="">All Brands</option>
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                {/* Condition */}
                <div>
                  <h3 className="font-semibold mb-3 dark:text-white">Condition</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="condition"
                        value=""
                        checked={filters.condition === ''}
                        onChange={(e) => handleFilterChange('condition', e.target.value)}
                        className="text-accent-red focus:ring-accent-red"
                      />
                      <span className="dark:text-white">All</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="condition"
                        value="new"
                        checked={filters.condition === 'new'}
                        onChange={(e) => handleFilterChange('condition', e.target.value)}
                        className="text-accent-red focus:ring-accent-red"
                      />
                      <span className="dark:text-white">New</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="condition"
                        value="used"
                        checked={filters.condition === 'used'}
                        onChange={(e) => handleFilterChange('condition', e.target.value)}
                        className="text-accent-red focus:ring-accent-red"
                      />
                      <span className="dark:text-white">Used</span>
                    </label>
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-3 dark:text-white">Price Range</h3>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="w-full px-3 py-2 bg-automotive-50 dark:bg-automotive-700 border border-automotive-200 dark:border-automotive-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red"
                  >
                    {priceRanges.map(range => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort & Mobile Filter Toggle */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <label className="font-medium dark:text-white">Sort by:</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="px-4 py-2 bg-white dark:bg-automotive-800 border border-automotive-200 dark:border-automotive-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <SlidersHorizontal size={18} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-accent-red text-white px-2 py-0.5 rounded-full text-xs">
                    {activeFilterCount}
                  </span>
                )}
              </Button>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mb-6 bg-white dark:bg-automotive-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg dark:text-white">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X size={24} />
                  </button>
                </div>
                {/* Same filters as sidebar */}
                <div className="space-y-4">
                  <select
                    value={filters.category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="w-full px-3 py-2 bg-automotive-50 dark:bg-automotive-700 border rounded-lg"
                  >
                    <option value="">All Categories</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                  <select
                    value={filters.brand}
                    onChange={(e) => handleFilterChange('brand', e.target.value)}
                    className="w-full px-3 py-2 bg-automotive-50 dark:bg-automotive-700 border rounded-lg"
                  >
                    <option value="">All Brands</option>
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                  <Button variant="primary" className="w-full" onClick={() => setShowFilters(false)}>
                    Apply Filters
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Filter size={64} className="mx-auto text-automotive-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2 dark:text-white">No products found</h3>
                <p className="text-automotive-600 dark:text-automotive-400 mb-6">
                  Try adjusting your filters
                </p>
                <Button variant="primary" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

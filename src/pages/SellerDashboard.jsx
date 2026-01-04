import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Package,
  Plus,
  Edit2,
  Trash2,
  DollarSign,
  TrendingUp,
  ShoppingBag
} from 'lucide-react';
import { products as allProducts } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import Modal from '../components/Modal';

const SellerDashboard = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState(
    allProducts.filter(p => p.sellerId === user?.id)
  );
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    brand: '',
    price: '',
    stock: '',
    condition: 'new',
    description: '',
    images: ''
  });

  const stats = [
    {
      icon: Package,
      label: 'Total Products',
      value: products.length,
      color: 'text-blue-500'
    },
    {
      icon: DollarSign,
      label: 'Total Revenue',
      value: '$12,450',
      color: 'text-green-500'
    },
    {
      icon: ShoppingBag,
      label: 'Orders',
      value: '89',
      color: 'text-purple-500'
    },
    {
      icon: TrendingUp,
      label: 'Growth',
      value: '+23%',
      color: 'text-orange-500'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newProduct = {
      id: Date.now(),
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      images: formData.images.split(',').map(url => url.trim()),
      rating: 0,
      reviews: 0,
      featured: false,
      sellerId: user?.id,
      compatibility: ['Universal']
    };

    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...editingProduct, ...formData } : p));
    } else {
      setProducts([...products, newProduct]);
    }

    setIsAddModalOpen(false);
    setEditingProduct(null);
    setFormData({
      name: '',
      category: '',
      brand: '',
      price: '',
      stock: '',
      condition: 'new',
      description: '',
      images: ''
    });
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      brand: product.brand,
      price: product.price.toString(),
      stock: product.stock.toString(),
      condition: product.condition,
      description: product.description,
      images: product.images.join(', ')
    });
    setIsAddModalOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-automotive-50 dark:bg-automotive-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 dark:text-white">Seller Dashboard</h1>
          <p className="text-automotive-600 dark:text-automotive-400">
            Welcome back, {user?.name}!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-automotive-600 dark:text-automotive-400 text-sm mb-1">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold dark:text-white">{stat.value}</p>
                  </div>
                  <stat.icon className={`${stat.color}`} size={40} />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Products Section */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold dark:text-white">My Products</h2>
            <Button
              variant="primary"
              onClick={() => setIsAddModalOpen(true)}
            >
              <Plus size={20} />
              Add Product
            </Button>
          </div>

          {products.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-automotive-200 dark:border-automotive-700">
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Product</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Category</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Price</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Stock</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Status</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b border-automotive-100 dark:border-automotive-800 hover:bg-automotive-50 dark:hover:bg-automotive-800/50"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div>
                            <p className="font-medium dark:text-white">{product.name}</p>
                            <p className="text-sm text-automotive-600 dark:text-automotive-400">
                              {product.brand}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 dark:text-white">{product.category}</td>
                      <td className="py-4 px-4 font-semibold text-accent-red">
                        ${product.price}
                      </td>
                      <td className="py-4 px-4 dark:text-white">{product.stock}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            product.stock > 0
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          }`}
                        >
                          {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(product)}
                            className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <Package size={64} className="mx-auto text-automotive-400 mb-4" />
              <p className="text-automotive-600 dark:text-automotive-400 mb-4">
                You haven't added any products yet
              </p>
              <Button variant="primary" onClick={() => setIsAddModalOpen(true)}>
                <Plus size={20} />
                Add Your First Product
              </Button>
            </div>
          )}
        </Card>
      </div>

      {/* Add/Edit Product Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setEditingProduct(null);
        }}
        title={editingProduct ? 'Edit Product' : 'Add New Product'}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Product Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
            />
            <Input
              label="Brand"
              value={formData.brand}
              onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Price"
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              required
            />
            <Input
              label="Stock"
              type="number"
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-automotive-700 dark:text-automotive-300 mb-2">
              Condition
            </label>
            <select
              value={formData.condition}
              onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
              className="w-full px-4 py-2.5 bg-white dark:bg-automotive-700 border border-automotive-300 dark:border-automotive-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red"
            >
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-automotive-700 dark:text-automotive-300 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-2.5 bg-white dark:bg-automotive-700 border border-automotive-300 dark:border-automotive-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red"
              required
            />
          </div>

          <Input
            label="Image URLs (comma-separated)"
            value={formData.images}
            onChange={(e) => setFormData({ ...formData, images: e.target.value })}
            placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
            required
          />

          <div className="flex gap-4">
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setIsAddModalOpen(false);
                setEditingProduct(null);
              }}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary" className="flex-1">
              {editingProduct ? 'Update Product' : 'Add Product'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default SellerDashboard;

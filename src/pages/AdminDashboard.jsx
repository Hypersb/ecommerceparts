import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Package,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import { users as allUsers, products, orders } from '../data/mockData';
import { useCart } from '../context/CartContext';
import Card from '../components/Card';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { cart, wishlist, cartTotal } = useCart();

  // Real-time stats
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0) + cartTotal;
  const activeOrders = orders.length + (cart.length > 0 ? 1 : 0);

  const stats = [
    {
      icon: Users,
      label: 'Total Users',
      value: allUsers.length,
      change: '+12%',
      color: 'text-blue-500'
    },
    {
      icon: Package,
      label: 'Total Products',
      value: products.length,
      change: '+8%',
      color: 'text-purple-500'
    },
    {
      icon: ShoppingBag,
      label: 'Active Carts / Orders',
      value: `${cart.length > 0 ? '1 cart / ' : ''}${orders.length} orders`,
      change: cart.length > 0 ? '🛒 Live' : '+23%',
      color: 'text-green-500'
    },
    {
      icon: DollarSign,
      label: 'Total Revenue',
      value: '$' + totalRevenue.toFixed(2),
      change: cartTotal > 0 ? `+$${cartTotal.toFixed(2)} pending` : '+18%',
      color: 'text-orange-500'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'users', label: 'Users' },
    { id: 'products', label: 'Products' },
    { id: 'orders', label: 'Orders' }
  ];

  return (
    <div className="min-h-screen bg-automotive-50 dark:bg-automotive-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 dark:text-white">Admin Dashboard</h1>
          <p className="text-automotive-600 dark:text-automotive-400">
            Manage your e-commerce platform
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`${stat.color}`} size={40} />
                  <span className="text-green-500 text-sm font-semibold">
                    {stat.change}
                  </span>
                </div>
                <p className="text-automotive-600 dark:text-automotive-400 text-sm mb-1">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold dark:text-white">{stat.value}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex gap-2 border-b border-automotive-200 dark:border-automotive-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-accent'
                    : 'text-automotive-600 dark:text-automotive-400 hover:text-accent'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Sales Chart */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="text-accent" size={24} />
                <h2 className="text-xl font-bold dark:text-white">Sales Analytics</h2>
              </div>
              <div className="space-y-4">
                {[
                  { month: 'January', sales: 12400, bar: 85 },
                  { month: 'February', sales: 15200, bar: 100 },
                  { month: 'March', sales: 10800, bar: 70 },
                  { month: 'April', sales: 14500, bar: 95 },
                  { month: 'May', sales: 13200, bar: 87 }
                ].map((data, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm dark:text-white">{data.month}</span>
                      <span className="text-sm font-semibold dark:text-white">
                        ${data.sales.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-2 bg-automotive-200 dark:bg-automotive-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${data.bar}%` }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 dark:text-white">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { action: 'New user registered', user: 'John Smith', time: '5 min ago' },
                  { action: 'Order placed', user: 'Order #1234', time: '12 min ago' },
                  { action: 'Product added', user: 'Brake Pads', time: '1 hour ago' },
                  { action: 'User became seller', user: 'Mike Johnson', time: '2 hours ago' }
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-automotive-50 dark:bg-automotive-800 rounded-lg"
                  >
                    <div>
                      <p className="font-medium dark:text-white">{activity.action}</p>
                      <p className="text-sm text-automotive-600 dark:text-automotive-400">
                        {activity.user}
                      </p>
                    </div>
                    <span className="text-xs text-automotive-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'users' && (
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">User Management</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-automotive-200 dark:border-automotive-700">
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">User</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Email</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Role</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-automotive-100 dark:border-automotive-800"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <span className="font-medium dark:text-white">{user.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 dark:text-white">{user.email}</td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.role === 'admin'
                            ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                            : user.role === 'seller'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {activeTab === 'products' && (
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Product Management</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-automotive-200 dark:border-automotive-700">
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Product</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Category</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Price</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Stock</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {products.slice(0, 10).map((product) => (
                    <tr
                      key={product.id}
                      className="border-b border-automotive-100 dark:border-automotive-800"
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
                      <td className="py-4 px-4 font-semibold text-accent">
                        ${product.price}
                      </td>
                      <td className="py-4 px-4 dark:text-white">{product.stock}</td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          product.stock > 0
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}>
                          {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {activeTab === 'orders' && (
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Order Management</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-automotive-200 dark:border-automotive-700">
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Order ID</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Date</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Items</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Total</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-automotive-100 dark:border-automotive-800"
                    >
                      <td className="py-4 px-4 font-medium dark:text-white">{order.id}</td>
                      <td className="py-4 px-4 dark:text-white">{order.date}</td>
                      <td className="py-4 px-4 dark:text-white">{order.items.length} items</td>
                      <td className="py-4 px-4 font-semibold text-accent">
                        ${order.total.toFixed(2)}
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === 'delivered'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : order.status === 'shipped'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

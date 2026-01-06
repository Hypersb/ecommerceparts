import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Zap, Shield, Heart, ShoppingCart } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import CompareModels from '../components/CompareModels';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const BMW = () => {
  const [showAllModels, setShowAllModels] = useState(false);
  const { addToCart, addToWishlist, isInWishlist } = useCart();

  const bmwModels = [
    {
      id: 1001,
      name: "BMW M3 Competition",
      series: "3 Series",
      image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&h=800&fit=crop&q=85",
      images: ["https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&h=800&fit=crop&q=85"],
      description: "The ultimate driving machine with a twin-turbo inline-6 engine producing 503 hp.",
      specs: ["503 HP", "0-60 in 3.4s", "Twin-Turbo I6"],
      price: 73000,
      category: "BMW",
      brand: "BMW",
      stock: 5,
      condition: "new",
      rating: 5.0,
      reviews: 127
    },
    {
      id: 1002,
      name: "BMW M5 CS",
      series: "5 Series",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop&q=85",
      images: ["https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop&q=85"],
      description: "High-performance luxury sedan with a 4.4L V8 engine delivering 627 hp.",
      specs: ["627 HP", "0-60 in 2.9s", "V8 Twin-Turbo"],
      price: 142000,
      category: "BMW",
      brand: "BMW",
      stock: 3,
      condition: "new",
      rating: 5.0,
      reviews: 94
    },
    {
      id: 1003,
      name: "BMW M5 Competition",
      series: "5 Series",
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&h=800&fit=crop&q=85",
      images: ["https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&h=800&fit=crop&q=85"],
      description: "Executive sports sedan with 617 hp and all-wheel drive performance.",
      specs: ["617 HP", "0-60 in 3.1s", "V8 Twin-Turbo"],
      price: 110000,
      category: "BMW",
      brand: "BMW",
      stock: 7,
      condition: "new",
      rating: 4.9,
      reviews: 85
    },
    {
      id: 1004,
      name: "BMW X5 M Competition",
      series: "X Series",
      image: "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=1200&h=800&fit=crop&q=85",
      images: ["https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=1200&h=800&fit=crop&q=85"],
      description: "Performance SUV combining luxury, space, and the power of M division.",
      specs: ["617 HP", "0-60 in 3.8s", "Twin-Turbo V8"],
      price: 108000,
      category: "BMW",
      brand: "BMW",
      stock: 4,
      condition: "new",
      rating: 4.9,
      reviews: 112
    },
    {
      id: 1005,
      name: "BMW M4 Competition",
      series: "4 Series",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=800&fit=crop&q=85",
      images: ["https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=800&fit=crop&q=85"],
      description: "Pure driving dynamics with 503 hp and rear-wheel precision.",
      specs: ["503 HP", "0-60 in 3.8s", "Twin-Turbo I6"],
      price: 75000,
      category: "BMW",
      brand: "BMW",
      stock: 6,
      condition: "new",
      rating: 4.8,
      reviews: 98
    },
    {
      id: 1006,
      name: "BMW M4 CSL",
      series: "4 Series",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&h=800&fit=crop&q=85",
      images: ["https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&h=800&fit=crop&q=85"],
      description: "Track-focused coupe with lightweight construction and 543 hp.",
      specs: ["543 HP", "0-60 in 3.6s", "Carbon Fiber"],
      price: 139000,
      category: "BMW",
      brand: "BMW",
      stock: 2,
      condition: "new",
      rating: 5.0,
      reviews: 76
    },
    {
      id: 1007,
      name: "BMW M8 Competition Gran Coupe",
      series: "8 Series",
      image: "https://images.unsplash.com/photo-1580414057011-c13920d670f3?w=1200&h=800&fit=crop&q=85",
      images: ["https://images.unsplash.com/photo-1580414057011-c13920d670f3?w=1200&h=800&fit=crop&q=85"],
      description: "Gran Coupe excellence with 617 hp from a twin-turbo V8 engine.",
      specs: ["617 HP", "0-60 in 3.1s", "V8 Twin-Turbo"],
      price: 146000,
      category: "BMW",
      brand: "BMW",
      stock: 3,
      condition: "new",
      rating: 5.0,
      reviews: 62
    },
    {
      id: 1008,
      name: "BMW M2 Competition",
      series: "2 Series",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&h=800&fit=crop&q=85",
      images: ["https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&h=800&fit=crop&q=85"],
      description: "Compact performance machine with 405 hp and perfect balance.",
      specs: ["405 HP", "0-60 in 4.2s", "Twin-Turbo I6"],
      price: 58900,
      category: "BMW",
      brand: "BMW",
      stock: 8,
      condition: "new",
      rating: 4.9,
      reviews: 143
    },
    {
      id: 1009,
      name: "BMW i4 M50",
      series: "i Series",
      image: "https://images.unsplash.com/photo-1617704548623-340376564e68?w=1200&h=800&fit=crop&q=85",
      images: ["https://images.unsplash.com/photo-1617704548623-340376564e68?w=1200&h=800&fit=crop&q=85"],
      description: "All-electric performance with instant torque and 536 hp.",
      specs: ["536 HP", "0-60 in 3.7s", "All-Electric"],
      price: 67300,
      category: "BMW",
      brand: "BMW",
      stock: 5,
      condition: "new",
      rating: 4.8,
      reviews: 89
    },
    {
      id: 1010,
      name: "BMW X3 M Competition",
      series: "X Series",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&h=800&fit=crop&q=85",
      images: ["https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&h=800&fit=crop&q=85"],
      description: "Compact performance SUV with 503 hp and M division engineering.",
      specs: ["503 HP", "0-60 in 4.0s", "Twin-Turbo I6"],
      price: 73900,
      category: "BMW",
      brand: "BMW",
      stock: 6,
      condition: "new",
      rating: 4.8,
      reviews: 104
    },
    {
      id: 1011,
      name: "BMW X6 M Competition",
      series: "X Series",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&h=800&fit=crop&q=85",
      images: ["https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&h=800&fit=crop&q=85"],
      description: "Sports Activity Coupe with 617 hp and commanding presence.",
      specs: ["617 HP", "0-60 in 3.8s", "V8 Twin-Turbo"],
      price: 111000,
      category: "BMW",
      brand: "BMW",
      stock: 4,
      condition: "new",
      rating: 4.9,
      reviews: 78
    },
    {
      id: 1012,
      name: "BMW M340i xDrive",
      series: "3 Series",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&h=800&fit=crop&q=85",
      images: ["https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&h=800&fit=crop&q=85"],
      description: "Sport sedan with 382 hp and all-wheel drive capability.",
      specs: ["382 HP", "0-60 in 4.4s", "Twin-Turbo I6"],
      price: 54700,
      category: "BMW",
      brand: "BMW",
      stock: 10,
      condition: "new",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 1013,
      name: "BMW M550i xDrive",
      series: "5 Series",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&h=800&fit=crop&q=85",
      images: ["https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&h=800&fit=crop&q=85"],
      description: "Executive performance with 523 hp V8 power and luxury.",
      specs: ["523 HP", "0-60 in 3.9s", "Twin-Turbo V8"],
      price: 76800,
      category: "BMW",
      brand: "BMW",
      stock: 7,
      condition: "new",
      rating: 4.8,
      reviews: 92
    },
    {
      id: 1014,
      name: "BMW M440i xDrive",
      series: "4 Series",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&h=800&fit=crop&q=85",
      images: ["https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&h=800&fit=crop&q=85"],
      description: "Coupe elegance with 382 hp and athletic performance.",
      specs: ["382 HP", "0-60 in 4.5s", "Twin-Turbo I6"],
      price: 58500,
      category: "BMW",
      brand: "BMW",
      stock: 8,
      condition: "new",
      rating: 4.7,
      reviews: 118
    },
    {
      id: 1015,
      name: "BMW iX M60",
      series: "i Series",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&h=800&fit=crop&q=85",
      images: ["https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&h=800&fit=crop&q=85"],
      description: "Electric luxury SUV with 619 hp and cutting-edge technology.",
      specs: ["619 HP", "0-60 in 3.6s", "Dual Motors"],
      price: 111500,
      category: "BMW",
      brand: "BMW",
      stock: 4,
      condition: "new",
      rating: 4.9,
      reviews: 67
    },
    {
      id: 1016,
      name: "BMW M760i xDrive",
      series: "7 Series",
      image: "https://images.unsplash.com/photo-1555652355-8b698b82c2b8?w=1200&h=800&fit=crop&q=85",
      images: ["https://images.unsplash.com/photo-1555652355-8b698b82c2b8?w=1200&h=800&fit=crop&q=85"],
      description: "Flagship luxury with 601 hp V12 engine and ultimate refinement.",
      specs: ["601 HP", "0-60 in 3.6s", "V12 Twin-Turbo"],
      price: 156700,
      category: "BMW",
      brand: "BMW",
      stock: 2,
      condition: "new",
      rating: 5.0,
      reviews: 45
    },
    {
      id: 1017,
      name: "BMW X4 M Competition",
      series: "X Series",
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=1200&h=800&fit=crop&q=85",
      images: ["https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=1200&h=800&fit=crop&q=85"],
      description: "Performance coupe-SUV with 503 hp and sporty styling.",
      specs: ["503 HP", "0-60 in 4.0s", "Twin-Turbo I6"],
      price: 75900,
      category: "BMW",
      brand: "BMW",
      stock: 5,
      condition: "new",
      rating: 4.8,
      reviews: 87
    },
    {
      id: 1018,
      name: "BMW M850i xDrive",
      series: "8 Series",
      image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=1200&h=800&fit=crop&q=85",
      description: "Grand tourer with 523 hp V8 and luxurious appointments.",
      specs: ["523 HP", "0-60 in 3.6s", "V8 Twin-Turbo"]
    }
  ];

  const bmwParts = [
    {
      category: "Performance",
      items: [
        { name: "M Performance Exhaust", price: "$3,499", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80" },
        { name: "Carbon Fiber Front Splitter", price: "$1,299", image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&q=80" },
        { name: "M Performance Brakes", price: "$8,999", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&q=80" },
        { name: "Cold Air Intake System", price: "$899", image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400&q=80" }
      ]
    },
    {
      category: "Styling",
      items: [
        { name: "M Sport Body Kit", price: "$4,999", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80" },
        { name: "Carbon Fiber Mirror Caps", price: "$499", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f1f10?w=400&q=80" },
        { name: "LED Taillights", price: "$1,299", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&q=80" },
        { name: "19\" M Performance Wheels", price: "$3,299", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" }
      ]
    }
  ];

  const modifications = [
    {
      title: "Stage 1 ECU Tune",
      description: "Unlock hidden power with professional ECU remapping. Gain 50-80 HP with optimized fuel and timing maps. Perfect for daily drivers seeking more punch.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80",
      icon: Zap,
      benefit: "+50-80 HP"
    },
    {
      title: "Coilover Suspension",
      description: "Adjustable height and damping for perfect handling balance. Track-ready performance with street comfort. Transform your BMW's cornering ability.",
      image: "https://images.unsplash.com/photo-1580414057011-c13920d670f3?w=600&q=80",
      icon: Wrench,
      benefit: "Improved Handling"
    },
    {
      title: "Turbo Upgrade Kit",
      description: "Larger turbos for massive power gains. Complete kit includes upgraded intercooler and wastegate. Professional installation recommended.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
      icon: Shield,
      benefit: "+150-200 HP"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-black to-gray-900 text-white overflow-hidden py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1920&q=80')] opacity-15 bg-cover bg-center" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-6xl lg:text-8xl font-bold mb-6">
              BMW
              <span className="block text-red-500 mt-2">The Ultimate Driving Machine</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Your premier destination for authentic BMW parts, performance upgrades, and professional modifications.
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              From OEM replacement parts to track-ready performance packages, we offer everything you need to maintain, restore, or enhance your BMW's legendary performance and style.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/products?brand=BMW">
                <Button variant="primary" size="lg">
                  Shop BMW Parts
                  <ArrowRight />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              BMW Model Lineup
            </h2>
            <p className="text-xl text-gray-400 mb-2">
              From the track-focused M cars to luxury grand tourers
            </p>
            <p className="text-md text-gray-500 max-w-3xl mx-auto">
              We stock parts for all BMW models including the legendary M3, powerful M5, versatile X5 M, track-ready M4, luxurious M8, and innovative electric i4 M50. Each model represents BMW's commitment to performance and engineering excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllModels ? bmwModels : bmwModels.slice(0, 6)).map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={model.image} 
                      alt={model.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {model.series}
                    </div>
                    {/* Wishlist Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        addToWishlist(model);
                      }}
                      className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-colors ${
                        isInWishlist(model.id)
                          ? 'bg-red-600 text-white'
                          : 'bg-white/90 hover:bg-red-600 hover:text-white'
                      }`}
                    >
                      <Heart size={18} fill={isInWishlist(model.id) ? 'currentColor' : 'none'} />
                    </motion.button>
                    {/* Stock Badge */}
                    {model.stock < 5 && model.stock > 0 && (
                      <div className="absolute bottom-4 left-4 px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded">
                        LOW STOCK
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {model.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {model.description}
                    </p>
                    <div className="flex gap-2 flex-wrap mb-4">
                      {model.specs.map((spec, i) => (
                        <span 
                          key={i}
                          className="bg-silver-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                    {/* Price and Actions */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        ${model.price.toLocaleString()}
                      </div>
                    </div>
                    <Button
                      variant="primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(model);
                      }}
                      disabled={model.stock === 0}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <ShoppingCart size={18} />
                      Add to Cart
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Show More/Less Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            {!showAllModels ? (
              <Button
                variant="primary"
                size="lg"
                onClick={() => setShowAllModels(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              >
                Show More Models ({bmwModels.length - 6} More)
                <ArrowRight />
              </Button>
            ) : (
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  setShowAllModels(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 text-lg"
              >
                Show Less
              </Button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Parts Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Premium BMW Parts
            </h2>
            <p className="text-xl text-gray-400 mb-2">
              OEM and aftermarket parts for your BMW
            </p>
            <p className="text-md text-gray-500 max-w-3xl mx-auto">
              Our extensive catalog includes genuine BMW parts and high-quality aftermarket alternatives. From performance upgrades like exhaust systems and brakes to styling enhancements like body kits and wheels, we ensure every part meets BMW's exacting standards.
            </p>
          </motion.div>

          {bmwParts.map((category, catIndex) => (
            <div key={catIndex} className="mb-16">
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8 border-l-4 border-red-600 pl-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden group cursor-pointer">
                      <div className="relative h-48 overflow-hidden bg-gray-800">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 bg-gray-800">
                        <h4 className="font-bold text-white mb-2">
                          {item.name}
                        </h4>
                        <p className="text-2xl font-bold text-red-500">
                          {item.price}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modifications Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold mb-4">
              Performance Modifications
            </h2>
            <p className="text-xl text-gray-400 mb-2">
              Take your BMW to the next level with professional upgrades
            </p>
            <p className="text-md text-gray-500 max-w-3xl mx-auto">
              Our modification packages are designed by BMW specialists to maximize performance while maintaining reliability. Choose from ECU tuning for instant power gains, suspension upgrades for superior handling, or complete turbo kits for maximum performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modifications.map((mod, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900 backdrop-blur-sm rounded-2xl border-2 border-blue-600 hover:border-red-600 transition-colors overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={mod.image} 
                    alt={mod.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                    {mod.benefit}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <mod.icon className="w-10 h-10 text-blue-500" />
                    <h3 className="text-2xl font-bold">{mod.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6">{mod.description}</p>
                  <Button variant="primary" className="w-full">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Models Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CompareModels items={bmwModels} type="models" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Upgrade Your BMW?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Browse our complete catalog of BMW parts and accessories. Fast shipping, expert support.
            </p>
            <Link to="/products?brand=BMW">
              <Button variant="secondary" size="lg">
                Shop All BMW Parts
                <ArrowRight />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BMW;

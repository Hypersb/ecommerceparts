import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Zap, Shield } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const BMW = () => {
  const bmwModels = [
    {
      id: 1,
      name: "BMW M3 Competition",
      series: "3 Series",
      image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80",
      description: "The ultimate driving machine with a twin-turbo inline-6 engine producing 503 hp.",
      specs: ["503 HP", "0-60 in 3.4s", "Twin-Turbo I6"]
    },
    {
      id: 2,
      name: "BMW M5 CS",
      series: "5 Series",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      description: "High-performance luxury sedan with a 4.4L V8 engine delivering 627 hp.",
      specs: ["627 HP", "0-60 in 2.9s", "V8 Twin-Turbo"]
    },
    {
      id: 3,
      name: "BMW X5 M",
      series: "X Series",
      image: "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=800&q=80",
      description: "Performance SUV combining luxury, space, and the power of M division.",
      specs: ["617 HP", "0-60 in 3.8s", "Twin-Turbo V8"]
    },
    {
      id: 4,
      name: "BMW M4 CSL",
      series: "4 Series",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
      description: "Track-focused coupe with lightweight construction and 543 hp.",
      specs: ["543 HP", "0-60 in 3.6s", "Carbon Fiber"]
    },
    {
      id: 5,
      name: "BMW M8 Competition",
      series: "8 Series",
      image: "https://images.unsplash.com/photo-1580414057011-c13920d670f3?w=800&q=80",
      description: "Gran Coupe excellence with 617 hp from a twin-turbo V8 engine.",
      specs: ["617 HP", "0-60 in 3.1s", "V8 Twin-Turbo"]
    },
    {
      id: 6,
      name: "BMW i4 M50",
      series: "i Series",
      image: "https://images.unsplash.com/photo-1617704548623-340376564e68?w=800&q=80",
      description: "All-electric performance with instant torque and 536 hp.",
      specs: ["536 HP", "0-60 in 3.7s", "All-Electric"]
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
            {bmwModels.map((model, index) => (
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
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {model.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {model.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {model.specs.map((spec, i) => (
                        <span 
                          key={i}
                          className="bg-silver-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
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

import { useState, useRef, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, RotateCw, ZoomIn, ZoomOut, Check, ShoppingCart, Save, Share2, Info, Palette, Settings, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import Button from '../components/Button';
import Card from '../components/Card';
import Car3DModel from '../components/Car3DModel';
import { useCart } from '../context/CartContext';

const BMWBuilder = () => {
  const navigate = useNavigate();
  const { addToCart, addToWishlist } = useCart();
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedParts, setSelectedParts] = useState([]);
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [selectedWheels, setSelectedWheels] = useState({ type: 'stock', color: '#1a1a1a' });
  const [selectedExhaust, setSelectedExhaust] = useState({ type: 'stock', color: '#2a2a2a' });
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeTab, setActiveTab] = useState('model');
  const [showColorPicker, setShowColorPicker] = useState(false);
  
  const carColors = [
    { name: 'Alpine White', value: '#ffffff' },
    { name: 'M Carbon Black', value: '#1a1a1a' },
    { name: 'Brooklyn Grey', value: '#6b7280' },
    { name: 'M Portimao Blue', value: '#1e40af' },
    { name: 'Brands Hatch Grey', value: '#9ca3af' },
    { name: 'Frozen Red', value: '#dc2626' },
    { name: 'Marina Bay Blue', value: '#0ea5e9' },
    { name: 'Tanzanite Blue', value: '#3b82f6' },
    { name: 'Frozen Deep Green', value: '#047857' },
  ];

  const bmwModels = [
    {
      id: 1,
      name: "BMW M3 Competition",
      series: "3 Series",
      basePrice: "$73,000",
      image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80",
      images: {
        front: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80",
        side: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
        back: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&q=80",
        angle: "https://images.unsplash.com/photo-1580414057011-c13920d670f3?w=1200&q=80"
      },
      description: "The ultimate driving machine with a twin-turbo inline-6 engine producing 503 hp.",
      specs: { hp: "503 HP", acceleration: "0-60 in 3.4s", engine: "Twin-Turbo I6", torque: "479 lb-ft" },
      colors: [
        { name: "Alpine White", hex: "#FFFFFF" },
        { name: "Brooklyn Grey", hex: "#4A5568" },
        { name: "M Carbon Black", hex: "#1A202C" },
        { name: "M Portimao Blue", hex: "#1E40AF" },
        { name: "Toronto Red", hex: "#DC2626" }
      ]
    },
    {
      id: 2,
      name: "BMW M5 CS",
      series: "5 Series",
      basePrice: "$142,000",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
      images: {
        front: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
        side: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80",
        back: "https://images.unsplash.com/photo-1580414057011-c13920d670f3?w=1200&q=80",
        angle: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&q=80"
      },
      description: "High-performance luxury sedan with a 4.4L V8 engine delivering 627 hp.",
      specs: { hp: "627 HP", acceleration: "0-60 in 2.9s", engine: "V8 Twin-Turbo", torque: "553 lb-ft" },
      colors: [
        { name: "Frozen Dark Silver", hex: "#6B7280" },
        { name: "Brands Hatch Grey", hex: "#374151" },
        { name: "M Carbon Black", hex: "#1A202C" },
        { name: "Frozen Deep Green", hex: "#065F46" },
        { name: "Marina Bay Blue", hex: "#1E3A8A" }
      ]
    },
    {
      id: 3,
      name: "BMW X5 M Competition",
      series: "X Series",
      basePrice: "$108,000",
      image: "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=1200&q=80",
      images: {
        front: "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=1200&q=80",
        side: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=80",
        back: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80",
        angle: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80"
      },
      description: "Performance SUV combining luxury, space, and the power of M division.",
      specs: { hp: "617 HP", acceleration: "0-60 in 3.8s", engine: "Twin-Turbo V8", torque: "553 lb-ft" },
      colors: [
        { name: "Marina Bay Blue", hex: "#1E40AF" },
        { name: "Tanzanite Blue", hex: "#3B82F6" },
        { name: "Black Sapphire", hex: "#111827" },
        { name: "Alpine White", hex: "#FFFFFF" },
        { name: "Phytonic Blue", hex: "#2563EB" }
      ]
    },
    {
      id: 4,
      name: "BMW M4 CSL",
      series: "4 Series",
      basePrice: "$139,000",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&q=80",
      images: {
        front: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&q=80",
        side: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
        back: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80",
        angle: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=80"
      },
      description: "Track-focused coupe with lightweight construction and 543 hp.",
      specs: { hp: "543 HP", acceleration: "0-60 in 3.6s", engine: "Twin-Turbo I6", torque: "479 lb-ft" },
      colors: [
        { name: "Alpine White", hex: "#FFFFFF" },
        { name: "Brooklyn Grey", hex: "#4A5568" },
        { name: "Black Sapphire", hex: "#111827" },
        { name: "Frozen Portimao Blue", hex: "#3B82F6" },
        { name: "Sao Paulo Yellow", hex: "#EAB308" }
      ]
    },
    {
      id: 5,
      name: "BMW M8 Competition Gran Coupe",
      series: "8 Series",
      basePrice: "$146,000",
      image: "https://images.unsplash.com/photo-1580414057011-c13920d670f3?w=1200&q=80",
      images: {
        front: "https://images.unsplash.com/photo-1580414057011-c13920d670f3?w=1200&q=80",
        side: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80",
        back: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
        angle: "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=1200&q=80"
      },
      description: "Gran Coupe excellence with 617 hp from a twin-turbo V8 engine.",
      specs: { hp: "617 HP", acceleration: "0-60 in 3.1s", engine: "V8 Twin-Turbo", torque: "553 lb-ft" },
      colors: [
        { name: "Frozen Marina Bay Blue", hex: "#1E40AF" },
        { name: "Carbon Black", hex: "#1A202C" },
        { name: "Donington Grey", hex: "#6B7280" },
        { name: "Barcelona Blue", hex: "#2563EB" },
        { name: "Fire Red", hex: "#DC2626" }
      ]
    },
    {
      id: 6,
      name: "BMW i4 M50",
      series: "i Series",
      basePrice: "$67,300",
      image: "https://images.unsplash.com/photo-1617704548623-340376564e68?w=1200&q=80",
      images: {
        front: "https://images.unsplash.com/photo-1617704548623-340376564e68?w=1200&q=80",
        side: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80",
        back: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&q=80",
        angle: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&q=80"
      },
      description: "All-electric performance with instant torque and 536 hp.",
      specs: { hp: "536 HP", acceleration: "0-60 in 3.7s", engine: "Dual Electric Motors", torque: "586 lb-ft" },
      colors: [
        { name: "Portimao Blue", hex: "#3B82F6" },
        { name: "Sophisto Grey", hex: "#6B7280" },
        { name: "M Brooklyn Grey", hex: "#4A5568" },
        { name: "Alpine White", hex: "#FFFFFF" },
        { name: "Black Sapphire", hex: "#111827" }
      ]
    }
  ];

  const bmwParts = {
    Performance: [
      { id: 'p1', name: "M Performance Exhaust", price: 3499, image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80", category: "Performance", impact: "+15 HP, Enhanced Sound", affectsVisual: true },
      { id: 'p2', name: "Carbon Fiber Front Splitter", price: 1299, image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&q=80", category: "Performance", impact: "Improved Downforce", affectsVisual: false },
      { id: 'p3', name: "M Performance Brakes", price: 8999, image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&q=80", category: "Performance", impact: "Better Stopping Power", affectsVisual: false },
      { id: 'p4', name: "Cold Air Intake System", price: 899, image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400&q=80", category: "Performance", impact: "+10 HP, Better Throttle Response", affectsVisual: false }
    ],
    Wheels: [
      { id: 'w1', name: "19\" M Performance Wheels", price: 3299, color: '#1a1a1a', category: "Wheels", impact: "Enhanced Stance" },
      { id: 'w2', name: "20\" M Carbon Wheels", price: 5999, color: '#2a2a2a', category: "Wheels", impact: "Lightweight Performance" },
      { id: 'w3', name: "21\" M Forged Wheels", price: 7999, color: '#c0c0c0', category: "Wheels", impact: "Premium Appearance" },
    ],
    Styling: [
      { id: 's1', name: "M Sport Body Kit", price: 4999, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80", category: "Styling", impact: "Aggressive Appearance", affectsVisual: false },
      { id: 's2', name: "Carbon Fiber Mirror Caps", price: 499, image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f1f10?w=400&q=80", category: "Styling", impact: "Premium Look", affectsVisual: false },
      { id: 's3', name: "LED Taillights", price: 1299, image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&q=80", category: "Styling", impact: "Modern Lighting", affectsVisual: false },
    ],
    Interior: [
      { id: 'i1', name: "M Carbon Fiber Interior Trim", price: 2499, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80", category: "Interior", impact: "Sporty Interior", affectsVisual: false },
      { id: 'i2', name: "M Sport Seats", price: 3999, image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400&q=80", category: "Interior", impact: "Enhanced Comfort & Support", affectsVisual: false },
      { id: 'i3', name: "Premium Sound System", price: 2999, image: "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=400&q=80", category: "Interior", impact: "Superior Audio Quality", affectsVisual: false }
    ]
  };

  const addPart = (part) => {
    if (!selectedParts.find(p => p.id === part.id)) {
      setSelectedParts([...selectedParts, part]);
      
      // Handle visual changes
      if (part.category === 'Wheels') {
        setSelectedWheels({ type: part.name, color: part.color });
      }
      if (part.id === 'p1') { // M Performance Exhaust
        setSelectedExhaust({ type: 'performance', color: '#c0c0c0' });
      }
    }
  };

  const removePart = (partId) => {
    const part = selectedParts.find(p => p.id === partId);
    setSelectedParts(selectedParts.filter(p => p.id !== partId));
    
    // Reset visual changes
    if (part?.category === 'Wheels') {
      setSelectedWheels({ type: 'stock', color: '#1a1a1a' });
    }
    if (part?.id === 'p1') {
      setSelectedExhaust({ type: 'stock', color: '#2a2a2a' });
    }
  };

  const calculateTotal = () => {
    const basePrice = selectedModel ? parseInt(selectedModel.basePrice.replace(/[$,]/g, '')) : 0;
    const partsTotal = selectedParts.reduce((sum, part) => sum + part.price, 0);
    return (basePrice + partsTotal).toLocaleString();
  };

  const getTotalHP = () => {
    const baseHP = selectedModel ? parseInt(selectedModel.specs.hp) : 0;
    const addedHP = selectedParts.reduce((sum, part) => {
      const match = part.impact.match(/\+(\d+) HP/);
      return sum + (match ? parseInt(match[1]) : 0);
    }, 0);
    return baseHP + addedHP;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/bmw">
              <Button variant="ghost" className="text-white">
                <ArrowLeft className="w-5 h-5" />
                Back to BMW
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-white">BMW Builder Studio</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Save className="w-4 h-4" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - 3D View */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-blue-600 overflow-hidden">
              {selectedModel ? (
                <div>
                  {/* 3D Canvas Viewer */}
                  <div className="relative h-[600px] bg-gradient-to-b from-gray-900 to-black">
                    <Canvas shadows>
                      <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={50} />
                      <Suspense fallback={null}>
                        <ambientLight intensity={0.3} />
                        <spotLight
                          position={[10, 10, 10]}
                          angle={0.15}
                          penumbra={1}
                          intensity={1}
                          castShadow
                        />
                        <spotLight
                          position={[-10, 10, -10]}
                          angle={0.15}
                          penumbra={1}
                          intensity={0.5}
                        />
                        
                        <Car3DModel
                          modelType={selectedModel.name}
                          color={selectedColor}
                          autoRotate={autoRotate}
                          wheels={selectedWheels}
                          exhaust={selectedExhaust}
                        />
                        
                        <ContactShadows
                          opacity={0.5}
                          scale={20}
                          blur={2}
                          far={4}
                          resolution={256}
                          color="#000000"
                        />
                        
                        <Environment preset="city" />
                      </Suspense>
                      
                      <OrbitControls
                        enablePan={false}
                        enableZoom={true}
                        minDistance={3}
                        maxDistance={15}
                        minPolarAngle={Math.PI / 4}
                        maxPolarAngle={Math.PI / 2}
                      />
                    </Canvas>

                    {/* Controls Overlay */}
                    <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                      <button
                        onClick={() => setAutoRotate(!autoRotate)}
                        className={`p-3 rounded-lg backdrop-blur-sm transition-colors ${
                          autoRotate ? 'bg-blue-600 text-white' : 'bg-black/80 text-gray-300 hover:bg-gray-700'
                        }`}
                        title={autoRotate ? 'Stop Rotation' : 'Auto Rotate'}
                      >
                        <RotateCw className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setShowColorPicker(!showColorPicker)}
                        className="p-3 bg-black/80 backdrop-blur-sm text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
                        title="Change Color"
                      >
                        <Palette className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Color Picker */}
                    <AnimatePresence>
                      {showColorPicker && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="absolute bottom-20 left-4 bg-black/90 backdrop-blur-lg rounded-lg p-4 border border-gray-700"
                        >
                          <p className="text-white font-semibold mb-3 text-sm">Choose Color</p>
                          <div className="grid grid-cols-3 gap-2">
                            {carColors.map((color) => (
                              <button
                                key={color.value}
                                onClick={() => {
                                  setSelectedColor(color.value);
                                  setShowColorPicker(false);
                                }}
                                className={`w-12 h-12 rounded-lg border-2 transition-all hover:scale-110 ${
                                  selectedColor === color.value ? 'border-blue-500 ring-2 ring-blue-400' : 'border-gray-600'
                                }`}
                                style={{ backgroundColor: color.value }}
                                title={color.name}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Info Badge */}
                    <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                      <p className="text-sm font-semibold">{selectedModel.name}</p>
                      <p className="text-xs opacity-90">Drag to rotate • Scroll to zoom</p>
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-4 py-3 rounded-lg">
                      <div className="flex flex-col gap-2">
                        <div>
                          <p className="text-xs text-gray-400">Total Power</p>
                          <p className="text-xl font-bold text-red-500">{getTotalHP()} HP</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Added Parts</p>
                          <p className="text-lg font-bold">{selectedParts.length}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Specs Bar */}
                  <div className="bg-gray-900 p-4 border-t border-gray-700">
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center">
                        <p className="text-gray-400 text-sm">Acceleration</p>
                        <p className="text-white font-bold text-sm">{selectedModel.specs.acceleration}</p>
                      </div>
                      <div className="text-center border-l border-gray-700">
                        <p className="text-gray-400 text-sm">Engine</p>
                        <p className="text-white font-bold text-sm">{selectedModel.specs.engine}</p>
                      </div>
                      <div className="text-center border-l border-gray-700">
                        <p className="text-gray-400 text-sm">Total HP</p>
                        <p className="text-red-500 font-bold text-sm">{getTotalHP()} HP</p>
                      </div>
                      <div className="text-center border-l border-gray-700">
                        <p className="text-gray-400 text-sm">Torque</p>
                        <p className="text-white font-bold text-sm">{selectedModel.specs.torque}</p>
                      </div>
                    </div>
                  </div>

                  {/* Color Selector */}
                  {selectedModel && (
                    <div className="bg-gray-900 p-4 border-t border-gray-700">
                      <h4 className="text-white font-semibold mb-3">Select Color</h4>
                      <div className="flex gap-3 flex-wrap">
                        {selectedModel.colors.map((color, idx) => (
                          <motion.button
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSelectedColor(color)}
                            className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                              selectedColor?.name === color.name
                                ? 'border-blue-500 ring-4 ring-blue-500/30'
                                : 'border-gray-600 hover:border-gray-400'
                            }`}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          >
                            {selectedColor?.name === color.name && (
                              <Check className="w-6 h-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-lg" />
                            )}
                          </motion.button>
                        ))}
                      </div>
                      {selectedColor && (
                        <p className="text-gray-400 text-sm mt-2">Selected: {selectedColor.name}</p>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-[500px] flex items-center justify-center">
                  <div className="text-center">
                    <Info className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400 text-lg">Select a BMW model to start building</p>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Right Panel - Configuration */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Tabs */}
              <Card className="bg-gray-800 p-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab('model')}
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                      activeTab === 'model'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    Model
                  </button>
                  <button
                    onClick={() => setActiveTab('parts')}
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                      activeTab === 'parts'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:bg-gray-700'
                    }`}
                    disabled={!selectedModel}
                  >
                    Parts
                  </button>
                </div>
              </Card>

              {/* Content */}
              <Card className="bg-gray-800 max-h-[600px] overflow-y-auto">
                <div className="p-4">
                  <AnimatePresence mode="wait">
                    {activeTab === 'model' ? (
                      <motion.div
                        key="model"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-3"
                      >
                        <h3 className="text-xl font-bold text-white mb-4">Choose Your Model</h3>
                        {bmwModels.map((model) => (
                          <motion.div
                            key={model.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedModel(model)}
                            className={`p-3 rounded-lg cursor-pointer transition-all ${
                              selectedModel?.id === model.id
                                ? 'bg-blue-600 ring-2 ring-blue-400'
                                : 'bg-gray-900 hover:bg-gray-700'
                            }`}
                          >
                            <div className="flex gap-3">
                              <img
                                src={model.image}
                                alt={model.name}
                                className="w-20 h-20 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <p className="font-bold text-white text-sm">{model.name}</p>
                                <p className="text-xs text-gray-400">{model.series}</p>
                                <p className="text-red-500 font-bold mt-1">{model.basePrice}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="parts"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        <h3 className="text-xl font-bold text-white mb-4">Add Performance Parts</h3>
                        {Object.keys(bmwParts).map((category) => (
                          <div key={category}>
                            <h4 className="text-sm font-bold text-blue-400 mb-2">{category}</h4>
                            <div className="space-y-2">
                              {bmwParts[category].map((part) => {
                                const isAdded = selectedParts.find(p => p.id === part.id);
                                return (
                                  <div
                                    key={part.id}
                                    className={`p-3 rounded-lg bg-gray-900 ${
                                      isAdded ? 'ring-2 ring-green-500' : ''
                                    }`}
                                  >
                                    <div className="flex justify-between items-start mb-2">
                                      <div className="flex-1">
                                        <p className="text-white font-semibold text-sm">{part.name}</p>
                                        <p className="text-xs text-gray-400">{part.impact}</p>
                                        <p className="text-red-500 font-bold text-sm mt-1">
                                          ${part.price.toLocaleString()}
                                        </p>
                                      </div>
                                      <button
                                        onClick={() => isAdded ? removePart(part.id) : addPart(part)}
                                        className={`p-2 rounded-full transition-colors ${
                                          isAdded
                                            ? 'bg-red-600 hover:bg-red-700'
                                            : 'bg-blue-600 hover:bg-blue-700'
                                        }`}
                                      >
                                        <Check className="w-4 h-4 text-white" />
                                      </button>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card>

              {/* Summary */}
              {selectedModel && (
                <Card className="bg-gradient-to-br from-blue-900 to-gray-900 border-2 border-blue-600">
                  <div className="p-4">
                    <h4 className="text-white font-bold mb-3">Build Summary</h4>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Base Model</span>
                        <span className="text-white font-bold">{selectedModel.basePrice}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Parts ({selectedParts.length})</span>
                        <span className="text-white font-bold">
                          ${selectedParts.reduce((sum, p) => sum + p.price, 0).toLocaleString()}
                        </span>
                      </div>
                      <div className="border-t border-gray-700 pt-2 flex justify-between">
                        <span className="text-white font-bold">Total</span>
                        <span className="text-2xl font-bold text-red-500">${calculateTotal()}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Button 
                        variant="primary" 
                        className="w-full"
                        onClick={() => {
                          const buildProduct = {
                            id: `bmw-build-${Date.now()}`,
                            name: `${selectedModel.name} - Custom Build`,
                            price: parseInt(selectedModel.basePrice.replace(/[$,]/g, '')) + selectedParts.reduce((sum, p) => sum + p.price, 0),
                            image: selectedModel.image,
                            images: [selectedModel.image],
                            category: 'BMW',
                            brand: 'BMW',
                            stock: 1,
                            condition: 'new',
                            rating: 5.0,
                            reviews: 0,
                            description: `Custom built ${selectedModel.name} with ${selectedParts.length} performance upgrades`
                          };
                          addToCart(buildProduct);
                        }}
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => {
                          const buildProduct = {
                            id: `bmw-build-${Date.now()}`,
                            name: `${selectedModel.name} - Custom Build`,
                            price: parseInt(selectedModel.basePrice.replace(/[$,]/g, '')) + selectedParts.reduce((sum, p) => sum + p.price, 0),
                            image: selectedModel.image,
                            images: [selectedModel.image],
                            category: 'BMW',
                            brand: 'BMW',
                            stock: 1,
                            condition: 'new',
                            rating: 5.0,
                            reviews: 0,
                            description: `Custom built ${selectedModel.name} with ${selectedParts.length} performance upgrades`
                          };
                          addToWishlist(buildProduct);
                        }}
                      >
                        <Heart className="w-5 h-5" />
                        Save to Wishlist
                      </Button>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMWBuilder;

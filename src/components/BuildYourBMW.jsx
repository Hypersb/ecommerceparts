import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Check, ShoppingCart, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Card from './Card';

const BuildYourBMW = ({ models, parts }) => {
  const navigate = useNavigate();
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedParts, setSelectedParts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Performance');

  const addPart = (part) => {
    if (!selectedParts.find(p => p.name === part.name)) {
      setSelectedParts([...selectedParts, part]);
    }
  };

  const removePart = (partName) => {
    setSelectedParts(selectedParts.filter(p => p.name !== partName));
  };

  const calculateTotal = () => {
    const partsTotal = selectedParts.reduce((sum, part) => {
      const price = parseFloat(part.price.replace('$', '').replace(',', ''));
      return sum + price;
    }, 0);
    return partsTotal.toLocaleString();
  };

  const categories = [...new Set(parts.map(cat => cat.category))];

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Sparkles className="w-10 h-10 text-blue-500" />
            Build Your Dream BMW
            <Sparkles className="w-10 h-10 text-blue-500" />
          </h3>
          <p className="text-xl text-gray-400 mb-6">
            Select a model and customize it with performance parts
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/bmw/builder')}
            className="group"
          >
            Open 3D Builder Studio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side - Configuration */}
        <div className="lg:col-span-2 space-y-8">
          {/* Model Selection */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                1
              </span>
              Choose Your Model
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {models.slice(0, 4).map((model) => (
                <motion.div
                  key={model.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className={`cursor-pointer transition-all ${
                      selectedModel?.id === model.id
                        ? 'ring-4 ring-blue-500 bg-blue-900/20'
                        : 'hover:ring-2 hover:ring-gray-600'
                    }`}
                    onClick={() => setSelectedModel(model)}
                  >
                    <div className="relative">
                      <img
                        src={model.image}
                        alt={model.name}
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                      {selectedModel?.id === model.id && (
                        <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-full">
                          <Check className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h5 className="font-bold text-white">{model.name}</h5>
                      <p className="text-gray-400 text-sm">{model.series}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Parts Selection */}
          <AnimatePresence>
            {selectedModel && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    2
                  </span>
                  Add Performance Parts
                </h4>

                {/* Category Tabs */}
                <div className="flex gap-2 mb-6 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-6 py-2 rounded-full font-semibold transition-colors whitespace-nowrap ${
                        activeCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Parts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {parts
                    .find(cat => cat.category === activeCategory)
                    ?.items.map((part, idx) => {
                      const isAdded = selectedParts.find(p => p.name === part.name);
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <Card
                            className={`${
                              isAdded ? 'ring-2 ring-green-500' : ''
                            } transition-all`}
                          >
                            <div className="flex gap-4 p-4">
                              <img
                                src={part.image}
                                alt={part.name}
                                className="w-20 h-20 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <h5 className="font-bold text-white text-sm mb-1">
                                  {part.name}
                                </h5>
                                <p className="text-red-500 font-bold">{part.price}</p>
                              </div>
                              <button
                                onClick={() =>
                                  isAdded ? removePart(part.name) : addPart(part)
                                }
                                className={`self-start p-2 rounded-full transition-colors ${
                                  isAdded
                                    ? 'bg-red-600 hover:bg-red-700'
                                    : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                              >
                                {isAdded ? (
                                  <Trash2 className="w-4 h-4 text-white" />
                                ) : (
                                  <Plus className="w-4 h-4 text-white" />
                                )}
                              </button>
                            </div>
                          </Card>
                        </motion.div>
                      );
                    })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side - Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <Card className="bg-gray-800 border-2 border-blue-600">
              <div className="p-6">
                <h4 className="text-2xl font-bold text-white mb-6">
                  Your Build
                </h4>

                {/* Selected Model */}
                {selectedModel ? (
                  <div className="mb-6">
                    <p className="text-gray-400 text-sm mb-2">Base Model</p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <img
                        src={selectedModel.image}
                        alt={selectedModel.name}
                        className="w-full h-32 object-cover rounded-lg mb-2"
                      />
                      <p className="font-bold text-white">{selectedModel.name}</p>
                      <p className="text-sm text-gray-400">{selectedModel.series}</p>
                    </div>
                  </div>
                ) : (
                  <div className="mb-6 text-center py-8">
                    <p className="text-gray-500">Select a model to start</p>
                  </div>
                )}

                {/* Selected Parts */}
                {selectedParts.length > 0 && (
                  <div className="mb-6">
                    <p className="text-gray-400 text-sm mb-2">
                      Added Parts ({selectedParts.length})
                    </p>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {selectedParts.map((part, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gray-900 rounded-lg p-3 flex justify-between items-center"
                        >
                          <div>
                            <p className="text-white text-sm font-semibold">
                              {part.name}
                            </p>
                            <p className="text-red-500 text-sm">{part.price}</p>
                          </div>
                          <button
                            onClick={() => removePart(part.name)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Total */}
                {selectedParts.length > 0 && (
                  <div className="border-t border-gray-700 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Total Parts Value</span>
                      <span className="text-2xl font-bold text-white">
                        ${calculateTotal()}
                      </span>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                {selectedModel && (
                  <div className="space-y-3">
                    <Button variant="primary" className="w-full">
                      <ShoppingCart className="w-5 h-5" />
                      Add Build to Cart
                    </Button>
                    <Button
                      variant="secondary"
                      className="w-full"
                      onClick={() => {
                        setSelectedModel(null);
                        setSelectedParts([]);
                      }}
                    >
                      Reset Build
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildYourBMW;

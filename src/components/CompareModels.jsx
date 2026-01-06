import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import Button from './Button';
import Card from './Card';

const CompareModels = ({ items, type = "models" }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  const toggleItem = (item) => {
    if (selectedItems.find(i => i.id === item.id)) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else if (selectedItems.length < 3) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const isSelected = (item) => selectedItems.find(i => i.id === item.id);

  const getComparisonData = () => {
    if (type === "models") {
      return [
        { label: "Name", key: "name" },
        { label: "Series", key: "series" },
        { label: "Horsepower", key: "specs", index: 0 },
        { label: "0-60 Time", key: "specs", index: 1 },
        { label: "Engine", key: "specs", index: 2 }
      ];
    } else {
      return [
        { label: "Name", key: "name" },
        { label: "Price", key: "price" },
        { label: "Category", key: "category" }
      ];
    }
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Compare {type === "models" ? "BMW Models" : "Parts"} Side-by-Side
        </h3>
        <p className="text-gray-400 text-lg">
          Select up to 3 items to compare • {selectedItems.length}/3 selected
        </p>
        {selectedItems.length > 0 && (
          <div className="flex justify-center gap-2 mt-4">
            {selectedItems.map((item) => (
              <div key={item.id} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {item.name}
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card
              className={`cursor-pointer transition-all ${
                isSelected(item)
                  ? 'ring-4 ring-blue-500 bg-blue-900/20'
                  : 'hover:ring-2 hover:ring-gray-600'
              }`}
              onClick={() => toggleItem(item)}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {isSelected(item) && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-full">
                    <Check className="w-6 h-6" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h4 className="font-bold text-white text-lg">{item.name}</h4>
                {item.price && (
                  <p className="text-red-500 text-xl font-bold mt-2">{item.price}</p>
                )}
                {item.series && (
                  <p className="text-gray-400 text-sm">{item.series}</p>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Compare Button */}
      {selectedItems.length >= 2 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => setShowComparison(true)}
          >
            Compare Selected ({selectedItems.length})
            <ArrowRight />
          </Button>
        </motion.div>
      )}

      {/* Comparison Modal */}
      <AnimatePresence>
        {showComparison && selectedItems.length >= 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowComparison(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-center">
                <h3 className="text-3xl font-bold text-white">
                  Comparison Results
                </h3>
                <button
                  onClick={() => setShowComparison(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <div className="p-6 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left p-4 text-gray-400 font-semibold">
                        Feature
                      </th>
                      {selectedItems.map((item) => (
                        <th key={item.id} className="p-4 text-center">
                          <div className="flex flex-col items-center">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-24 h-24 object-cover rounded-lg mb-2"
                            />
                            <p className="text-white font-bold">{item.name}</p>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {getComparisonData().map((row, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-gray-800 hover:bg-gray-800/50"
                      >
                        <td className="p-4 text-gray-300 font-semibold">
                          {row.label}
                        </td>
                        {selectedItems.map((item) => (
                          <td key={item.id} className="p-4 text-center text-white">
                            {row.index !== undefined
                              ? item[row.key]?.[row.index] || 'N/A'
                              : item[row.key] || 'N/A'}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-6 border-t border-gray-700 flex justify-end gap-4">
                <Button
                  variant="secondary"
                  onClick={() => setSelectedItems([])}
                >
                  Clear Selection
                </Button>
                <Button
                  variant="primary"
                  onClick={() => setShowComparison(false)}
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CompareModels;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, MapPin, User, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const shipping = 15.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setStep(4); // Success step

    // Clear cart after 3 seconds and redirect
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (cart.length === 0 && step !== 4) {
    navigate('/cart');
    return null;
  }

  if (step === 4) {
    return (
      <div className="min-h-screen bg-automotive-50 dark:bg-automotive-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check size={48} className="text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Order Placed Successfully!</h2>
          <p className="text-automotive-600 dark:text-automotive-400 mb-2">
            Thank you for your purchase
          </p>
          <p className="text-sm text-automotive-500 dark:text-automotive-500">
            Redirecting to home page...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-automotive-50 dark:bg-automotive-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">Checkout</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= s
                    ? 'bg-accent text-white'
                    : 'bg-automotive-300 dark:bg-automotive-700 text-automotive-600'
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={`w-24 h-1 ${
                    step > s ? 'bg-accent' : 'bg-automotive-300 dark:bg-automotive-700'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Shipping Information */}
              {step === 1 && (
                <Card hover={false} className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="text-accent" size={24} />
                    <h2 className="text-2xl font-bold dark:text-white">Shipping Information</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      label="Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      label="Phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="md:col-span-2"
                    />
                    <Input
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="md:col-span-2"
                    />
                    <Input
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      label="State"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      label="ZIP Code"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mt-6">
                    <Button
                      variant="primary"
                      size="lg"
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full"
                    >
                      Continue to Payment
                    </Button>
                  </div>
                </Card>
              )}

              {/* Step 2: Payment Information */}
              {step === 2 && (
                <Card hover={false} className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="text-accent" size={24} />
                    <h2 className="text-2xl font-bold dark:text-white">Payment Information</h2>
                  </div>

                  <div className="grid gap-4">
                    <Input
                      label="Card Number"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                    <Input
                      label="Cardholder Name"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        label="Expiry Date"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                      />
                      <Input
                        label="CVV"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        maxLength={3}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <Button
                      variant="ghost"
                      size="lg"
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      variant="primary"
                      size="lg"
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-1"
                    >
                      Review Order
                    </Button>
                  </div>
                </Card>
              )}

              {/* Step 3: Review & Place Order */}
              {step === 3 && (
                <Card hover={false} className="p-6">
                  <h2 className="text-2xl font-bold mb-6 dark:text-white">Review Your Order</h2>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold mb-2 dark:text-white">Shipping Address</h3>
                      <p className="text-automotive-600 dark:text-automotive-400">
                        {formData.fullName}<br />
                        {formData.address}<br />
                        {formData.city}, {formData.state} {formData.zipCode}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 dark:text-white">Payment Method</h3>
                      <p className="text-automotive-600 dark:text-automotive-400">
                        Card ending in {formData.cardNumber.slice(-4)}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 dark:text-white">Order Items</h3>
                      <div className="space-y-2">
                        {cart.map(item => (
                          <div key={item.id} className="flex justify-between text-sm">
                            <span className="dark:text-white">{item.name} × {item.quantity}</span>
                            <span className="dark:text-white">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="ghost"
                      size="lg"
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      variant="primary"
                      size="lg"
                      type="submit"
                      disabled={isProcessing}
                      className="flex-1"
                    >
                      {isProcessing ? 'Processing...' : 'Place Order'}
                    </Button>
                  </div>
                </Card>
              )}
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-24">
              <Card hover={false} className="p-6">
                <h2 className="text-xl font-bold mb-4 dark:text-white">Order Summary</h2>

                <div className="space-y-3 mb-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-3">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium dark:text-white line-clamp-1">
                          {item.name}
                        </p>
                        <p className="text-xs text-automotive-600 dark:text-automotive-400">
                          Qty: {item.quantity}
                        </p>
                        <p className="text-sm font-bold text-accent">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-automotive-200 dark:border-automotive-700 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-automotive-600 dark:text-automotive-400">Subtotal</span>
                    <span className="dark:text-white">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-automotive-600 dark:text-automotive-400">Shipping</span>
                    <span className="dark:text-white">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-automotive-600 dark:text-automotive-400">Tax</span>
                    <span className="dark:text-white">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-automotive-200 dark:border-automotive-700 pt-2">
                    <div className="flex justify-between">
                      <span className="font-bold dark:text-white">Total</span>
                      <span className="font-bold text-accent text-xl">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

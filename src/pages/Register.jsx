import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User as UserIcon, AlertCircle, Building } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

const Register = () => {
  const navigate = useNavigate();
  const { register, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: 'buyer'
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    const result = await register(formData.email, formData.password, formData.name);

    if (result.success) {
      navigate('/');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-automotive-900 via-automotive-800 to-automotive-900 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-automotive-300">Join our automotive marketplace</p>
        </div>

        <Card hover={false} className="p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3">
              <AlertCircle className="text-red-500" size={20} />
              <span className="text-red-700 dark:text-red-400">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Account Type Selection */}
            <div>
              <label className="block text-sm font-medium text-automotive-700 dark:text-automotive-300 mb-3">
                I want to:
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, accountType: 'buyer' })}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    formData.accountType === 'buyer'
                      ? 'border-accent-red bg-red-50 dark:bg-red-900/20'
                      : 'border-automotive-300 dark:border-automotive-600 hover:border-accent-red'
                  }`}
                >
                  <UserIcon className="mx-auto mb-2" size={24} />
                  <div className="font-semibold dark:text-white">Buy Parts</div>
                  <div className="text-xs text-automotive-600 dark:text-automotive-400">
                    Purchase products
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, accountType: 'seller' })}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    formData.accountType === 'seller'
                      ? 'border-accent-red bg-red-50 dark:bg-red-900/20'
                      : 'border-automotive-300 dark:border-automotive-600 hover:border-accent-red'
                  }`}
                >
                  <Building className="mx-auto mb-2" size={24} />
                  <div className="font-semibold dark:text-white">Sell Parts</div>
                  <div className="text-xs text-automotive-600 dark:text-automotive-400">
                    List products
                  </div>
                </button>
              </div>
            </div>

            <Input
              label="Full Name"
              type="text"
              icon={UserIcon}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="John Doe"
            />

            <Input
              label="Email"
              type="email"
              icon={Mail}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="your@email.com"
            />

            <Input
              label="Password"
              type="password"
              icon={Lock}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              placeholder="••••••••"
            />

            <Input
              label="Confirm Password"
              type="password"
              icon={Lock}
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
              placeholder="••••••••"
            />

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                required
                className="mt-1 rounded border-automotive-300 text-accent-red focus:ring-accent-red"
              />
              <span className="text-sm text-automotive-600 dark:text-automotive-400">
                I agree to the{' '}
                <a href="#" className="text-accent-red hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-accent-red hover:underline">
                  Privacy Policy
                </a>
              </span>
            </label>

            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-automotive-600 dark:text-automotive-400">
              Already have an account?{' '}
              <Link to="/login" className="text-accent-red font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Register;

import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const result = await login(formData.email, formData.password);

    if (result.success) {
      const redirect = searchParams.get('redirect');
      navigate(redirect ? `/${redirect}` : '/');
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
          <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-automotive-300">Sign in to your account</p>
        </div>

        <Card hover={false} className="p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3">
              <AlertCircle className="text-red-500" size={20} />
              <span className="text-red-700 dark:text-red-400">{error}</span>
            </div>
          )}

          {/* Demo Credentials Info */}
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">Demo Credentials:</p>
            <div className="text-xs text-blue-700 dark:text-blue-400 space-y-1">
              <p><strong>Admin:</strong> admin@partthieves.com / admin123</p>
              <p><strong>Seller:</strong> seller@partthieves.com / seller123</p>
              <p><strong>Buyer:</strong> buyer@partthieves.com / buyer123</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-automotive-300 text-accent focus:ring-accent"
                />
                <span className="text-sm text-automotive-600 dark:text-automotive-400">
                  Remember me
                </span>
              </label>
              <a href="#" className="text-sm text-accent hover:underline">
                Forgot password?
              </a>
            </div>

            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-automotive-600 dark:text-automotive-400">
              Don't have an account?{' '}
              <Link to="/register" className="text-accent font-semibold hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;

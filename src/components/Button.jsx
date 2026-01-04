import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-accent-red hover:bg-red-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-automotive-700 hover:bg-automotive-600 text-white shadow-md',
    outline: 'border-2 border-accent-red text-accent-red hover:bg-accent-red hover:text-white',
    ghost: 'hover:bg-automotive-100 dark:hover:bg-automotive-800 text-automotive-900 dark:text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white shadow-md',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

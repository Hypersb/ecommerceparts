import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`bg-white dark:bg-black rounded-xl shadow-lg border-2 border-silver-300 dark:border-silver-700 hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;

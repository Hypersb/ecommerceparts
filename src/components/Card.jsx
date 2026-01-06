import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`bg-white dark:bg-secondary rounded-xl shadow-lg border border-silver-200 dark:border-silver-700 hover:shadow-xl transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;

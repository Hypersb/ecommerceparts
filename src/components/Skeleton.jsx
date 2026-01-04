import { motion } from 'framer-motion';

const Skeleton = ({ className = '', variant = 'default' }) => {
  const variants = {
    default: 'h-4 w-full',
    text: 'h-4 w-3/4',
    title: 'h-8 w-2/3',
    circle: 'h-12 w-12 rounded-full',
    avatar: 'h-16 w-16 rounded-full',
    card: 'h-64 w-full',
    image: 'aspect-square w-full'
  };

  return (
    <motion.div
      animate={{
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`bg-automotive-200 dark:bg-automotive-700 rounded ${variants[variant]} ${className}`}
    />
  );
};

export const ProductCardSkeleton = () => (
  <div className="bg-white dark:bg-automotive-800 rounded-xl overflow-hidden shadow-lg p-4">
    <Skeleton variant="image" className="mb-4" />
    <Skeleton variant="title" className="mb-2" />
    <Skeleton variant="text" className="mb-4" />
    <div className="flex justify-between items-center">
      <Skeleton className="h-8 w-20" />
      <Skeleton variant="circle" />
    </div>
  </div>
);

export default Skeleton;

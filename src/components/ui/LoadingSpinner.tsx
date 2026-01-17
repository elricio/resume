/**
 * LoadingSpinner 组件
 * 加载动画组件
 */
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 40,
  className = '',
}) => {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="w-full h-full rounded-full border-4 border-slate-700 border-t-purple-500"
        style={{ borderWidth: Math.max(2, size / 10) }}
      />
    </div>
  );
};

export default LoadingSpinner;

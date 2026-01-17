/**
 * ProgressBar 组件
 * 进度条展示组件
 */
import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';

interface ProgressBarProps {
  value: number;
  label?: string;
  color?: string;
  className?: string;
  height?: number;
  showValue?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  color = '#8b5cf6',
  className = '',
  height = 8,
  showValue = true,
}) => {
  const { ref, isVisible } = useIntersection<HTMLDivElement>({
    threshold: 0.5,
    once: true,
  });

  return (
    <div ref={ref} className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-300">{label}</span>
          {showValue && (
            <span className="text-sm font-mono text-purple-400">{value}%</span>
          )}
        </div>
      )}
      <div
        className="w-full bg-slate-700 rounded-full overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${value}%` } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ backgroundColor: color, backgroundImage: `linear-gradient(90deg, ${color}, ${color}dd)` }}
        />
      </div>
      {!label && showValue && (
        <div className="text-right mt-1 text-sm font-mono text-purple-400">
          {value}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;

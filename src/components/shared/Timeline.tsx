/**
 * Timeline 组件
 * 时间轴展示组件
 */
import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';
import type { TimelineItem } from '@/utils/types';

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className = '' }) => {
  const { ref, isVisible } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  });

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* 中轴线 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500/50 to-blue-500/50" />

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`flex items-center mb-8 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          <div className="w-1/2 px-4">
            <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-colors">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-400 mt-1">{item.date}</p>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
          <div className="w-1/2" />
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;

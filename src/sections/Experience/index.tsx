/**
 * Experience 区域 - 工作经历 (增强版)
 * 增加了更多视觉效果和交互
 */
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';
import { experiences } from '@/data/experience';
import { useIntersection } from '@/hooks/useIntersection';
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export const Experience: React.FC = () => {
  const [hoveredExp, setHoveredExp] = useState<string | null>(null);
  const { ref, isVisible } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  });

  // 3D 倾斜效果
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]));
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="experience" 
      className="py-20 relative overflow-hidden"
    >
      {/* 增强背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/20 to-slate-900/80 backdrop-blur-3xl" />
      
      {/* 时间轴线条 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 opacity-20" />
      
      {/* 动态光点 */}
      <motion.div
        className="absolute left-1/2 w-4 h-4 bg-purple-500 rounded-full"
        animate={{
          y: ['0%', '100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          transform: 'translateX(-50%)',
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* 增强标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-4 inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-size-200">
              工作经历
            </span>
          </motion.h2>
          <motion.p 
            className="text-slate-400 text-lg flex items-center justify-center gap-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Briefcase className="w-4 h-4" />
            职业发展历程
            <Award className="w-4 h-4" />
          </motion.p>
        </motion.div>

        {/* 增强工作经历卡片 */}
        <div ref={ref} className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredExp(exp.company)}
              onMouseLeave={() => setHoveredExp(null)}
            >
              <Card 
                variant="glass"
                hoverable
                interactive
                glow={hoveredExp === exp.company}
                className="p-8 relative overflow-hidden"
                style={{
                  transform: hoveredExp === exp.company
                    ? `perspective(1000px) rotateY(${rotateY.get()}deg) rotateX(${rotateX.get()}deg)`
                    : 'none',
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* 时间轴连接点 */}
                <motion.div
                  className={`absolute top-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-950 ${
                    index % 2 === 0 ? '-right-10' : '-left-10'
                  }`}
                  animate={hoveredExp === exp.company ? {
                    scale: [1, 1.5, 1],
                    boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)',
                  } : {}}
                  transition={{ duration: 0.5 }}
                />

                {/* 头部信息 */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                  <div className="flex items-center gap-4">
                    {exp.logo && (
                      <motion.div 
                        className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center overflow-hidden border border-slate-600 group"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-xl">🏢</span>';
                          }}
                        />
                      </motion.div>
                    )}
                    <div>
                      <motion.h3 
                        className="text-2xl font-bold text-white"
                        whileHover={{ x: 5 }}
                      >
                        {exp.company}
                      </motion.h3>
                      <motion.p 
                        className="text-lg text-purple-400 font-medium"
                        animate={{ 
                          color: hoveredExp === exp.company ? ['#a78bfa', '#8b5cf6', '#a78bfa'] : '#a78bfa',
                        }}
                        transition={{ duration: 2, repeat: hoveredExp === exp.company ? Infinity : 0 }}
                      >
                        {exp.position}
                      </motion.p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-slate-400 font-mono">
                    <motion.span 
                      className="flex items-center gap-1 hover:text-slate-300 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar size={14} />
                      {exp.startDate} - {exp.endDate}
                    </motion.span>
                    <motion.span 
                      className="flex items-center gap-1 hover:text-slate-300 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <MapPin size={14} />
                      {exp.location}
                    </motion.span>
                  </div>
                </div>

                {/* 描述 */}
                <motion.p 
                  className="text-slate-300 mb-6 leading-relaxed"
                  animate={{ 
                    x: hoveredExp === exp.company ? [0, 5, 0] : 0,
                  }}
                  transition={{ duration: 0.5, repeat: hoveredExp === exp.company ? Infinity : 0 }}
                >
                  {exp.description}
                </motion.p>

                {/* 增强主要成就 */}
                <div className="mb-6">
                  <motion.p 
                    className="text-sm text-slate-500 font-semibold mb-3 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <Award className="w-4 h-4" />
                    主要成就:
                  </motion.p>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-2 text-sm text-slate-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        <motion.span 
                          className="text-green-400 mt-0.5"
                          animate={{ 
                            rotate: hoveredExp === exp.company ? [0, 360] : 0,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          ✓
                        </motion.span>
                        {ach}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* 增强技术栈 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 text-xs bg-glass-bg backdrop-blur-sm rounded-full text-slate-300 border border-glass-border hover:border-purple-500/50 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: 'rgba(139, 92, 246, 0.2)',
                        color: '#a78bfa',
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* 增强相关项目 */}
                {exp.projects && exp.projects.length > 0 && (
                  <motion.div 
                    className="mt-6 pt-6 border-t border-slate-700"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-sm text-slate-500 font-semibold mb-3">相关项目:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.projects.map((proj, i) => (
                        <motion.div
                          key={i}
                          className="bg-glass-bg backdrop-blur-sm p-3 rounded-lg border border-glass-border hover:border-purple-500/30 transition-all duration-300"
                          whileHover={{ 
                            scale: 1.02,
                            y: -2,
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isVisible ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.1 * i }}
                        >
                          <div className="font-medium text-white text-sm mb-1">{proj.name}</div>
                          <div className="text-xs text-slate-400 mb-2">{proj.description}</div>
                          <div className="flex flex-wrap gap-1">
                            {proj.tech.map((t) => (
                              <motion.span
                                key={t}
                                className="px-1.5 py-0.5 text-[10px] bg-slate-800/50 rounded text-slate-400 hover:bg-slate-700/50 transition-colors"
                                whileHover={{ scale: 1.2 }}
                              >
                                {t}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 悬浮光效 */}
                {hoveredExp === exp.company && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-50 pointer-events-none rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 增强时间轴装饰 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 bg-glass-bg backdrop-blur-md rounded-full border border-glass-border"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: ['0 0 10px rgba(139, 92, 246, 0.5)', '0 0 20px rgba(139, 92, 246, 0.8)', '0 0 10px rgba(139, 92, 246, 0.5)'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-slate-400 text-sm font-mono">持续成长中...</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

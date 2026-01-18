/**
 * Skills 区域 - 技能展示 (增强版)
 * 增加了更多交互效果和视觉增强
 */
import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { skillCategories, skillRadarData } from '@/data/skills';
import { ProgressBar } from '@/components/shared/ProgressBar';
import { SkillRadar } from '@/components/shared/SkillRadar';
import { useIntersection } from '@/hooks/useIntersection';
import { Card } from '@/components/ui/Card';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
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
      id="skills" 
      className="py-20 relative overflow-hidden"
    >
      {/* 增强背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-slate-900/80 backdrop-blur-3xl" />
      
        {/* 动态粒子背景 */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              initial={{
                x: (i * 137.5) % 100,
                y: (i * 89.7) % 100,
              }}
              animate={{
                y: [null, (i * 79.3) % 100],
                x: [null, (i * 123.7) % 100],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 10 + (i * 1.7) % 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                left: `${(i * 137.5) % 100}%`,
                top: `${(i * 89.7) % 100}%`,
              }}
            />
          ))}
        </div>

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
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-size-200">
              技术栈
            </span>
          </motion.h2>
          <motion.p 
            className="text-slate-400 text-lg"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            持续学习，不断精进
          </motion.p>
        </motion.div>

        {/* 增强技能分类标签 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((cat, index) => (
            <motion.button
              key={cat.category}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 relative overflow-hidden group ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-glass-bg backdrop-blur-md text-slate-300 hover:bg-glass-bg hover:border-glass-border border border-glass-border'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeCategory === index && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  layoutId="activeCategory"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.category}</span>
              
              {/* 悬浮效果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          ))}
        </motion.div>

        {/* 增强技能展示 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            ref={ref}
            className="grid md:grid-cols-2 gap-6"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <Card 
                  variant="glass"
                  hoverable
                  interactive
                  glow={hoveredSkill === skill.name}
                  className="p-6 relative overflow-hidden"
                  style={{
                    transform: hoveredSkill === skill.name
                      ? `perspective(1000px) rotateY(${rotateY.get()}deg) rotateX(${rotateX.get()}deg)`
                      : 'none',
                  }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* 技能头部 */}
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <motion.h3 
                      className="text-xl font-semibold text-white flex items-center gap-2"
                      animate={{ x: hoveredSkill === skill.name ? 5 : 0 }}
                    >
                      <motion.span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: skill.color || '#8b5cf6' }}
                        animate={{
                          scale: hoveredSkill === skill.name ? [1, 1.2, 1] : 1,
                          boxShadow: hoveredSkill === skill.name ? `0 0 10px ${skill.color || '#8b5cf6'}` : 'none',
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      {skill.name}
                    </motion.h3>
                    <motion.span 
                      className="text-purple-400 font-mono font-bold text-sm"
                      animate={{ scale: hoveredSkill === skill.name ? 1.1 : 1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  {/* 增强进度条 */}
                  <div className="mb-4 relative">
                    <ProgressBar
                      value={skill.level}
                      color={skill.color || '#8b5cf6'}
                      height={6}
                      showValue={false}
                      className="mb-2"
                    />
                    {/* 进度条光效 */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        className="absolute inset-0 h-6 rounded-full"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${skill.color || '#8b5cf6'}, transparent)`,
                          opacity: 0.5,
                        }}
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </div>

                  {/* 描述列表 */}
                  <ul className="space-y-2 text-sm text-slate-400 mb-4">
                    {skill.description.map((desc, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <motion.span 
                          className="text-purple-400 mt-0.5 text-xs"
                          animate={{ 
                            x: hoveredSkill === skill.name ? [0, 5, 0] : 0,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          ▸
                        </motion.span>
                        {desc}
                      </motion.li>
                    ))}
                  </ul>

                  {/* 增强技术标签 */}
                  {skill.tags && skill.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag, i) => (
                        <motion.span
                          key={tag}
                          className="px-2.5 py-1 text-xs bg-glass-bg backdrop-blur-sm rounded-full text-slate-300 border border-glass-border hover:border-purple-500/50 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: skill.color || '#8b5cf6',
                            color: 'white',
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  )}

                  {/* 悬浮光效 */}
                  {hoveredSkill === skill.name && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-50 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* 增强技能雷达图 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <motion.h3 
            className="text-2xl font-bold text-center mb-8 text-white inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              技能分布
            </span>
          </motion.h3>
          <motion.div
            whileHover={{ scale: 1.02 }}
          >
            <Card 
              variant="gradient" 
              glow
              className="p-8"
            >
              <SkillRadar data={skillRadarData} />
            </Card>
          </motion.div>
        </motion.div>

        {/* 增强统计信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: '技术领域', value: skillCategories.length, color: 'from-purple-500 to-purple-600', icon: '🔧' },
            { label: '核心技能', value: skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0), color: 'from-blue-500 to-blue-600', icon: '⚡' },
            { label: '平均熟练度', value: Math.round(skillCategories.reduce((sum, cat) => sum + cat.skills.reduce((s, skill) => s + skill.level, 0), 0) / skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0)), color: 'from-pink-500 to-pink-600', icon: '📊' },
            { label: '项目经验', value: 8, color: 'from-green-500 to-green-600', icon: '🚀' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
              }}
            >
              <Card 
                variant="glass" 
                hoverable
                className="p-4 text-center relative overflow-hidden"
              >
                {/* 背景图标 */}
                <div className="absolute top-2 right-2 text-3xl opacity-10">
                  {stat.icon}
                </div>
                
                <motion.div 
                  className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                
                {/* 悬浮光效 */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0`}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

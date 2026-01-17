/**
 * Skills 区域 - 技能展示
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories, skillRadarData } from '@/data/skills';
import { ProgressBar } from '@/components/shared/ProgressBar';
import { SkillRadar } from '@/components/shared/SkillRadar';
import { useIntersection } from '@/hooks/useIntersection';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const { ref, isVisible } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  });

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            技术栈
          </h2>
          <p className="text-slate-400 text-lg">持续学习，不断精进</p>
        </motion.div>

        {/* 技能分类标签 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((cat, index) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30 hover:bg-purple-500'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </motion.div>

        {/* 技能展示 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            ref={ref}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.08 }}
                  className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: skill.color || '#8b5cf6' }}
                      />
                      {skill.name}
                    </h3>
                    <span className="text-purple-400 font-mono font-bold text-sm">
                      {skill.level}%
                    </span>
                  </div>

                  {/* 进度条 */}
                  <ProgressBar
                    value={skill.level}
                    color={skill.color || '#8b5cf6'}
                    height={6}
                    showValue={false}
                    className="mb-4"
                  />

                  {/* 描述列表 */}
                  <ul className="space-y-2 text-sm text-slate-400 mb-4">
                    {skill.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5 text-xs">▸</span>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* 技术标签 */}
                  {skill.tags && skill.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs bg-slate-700/50 rounded-full text-slate-300 border border-slate-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 技能雷达图 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">技能分布</h3>
          <div className="bg-slate-800/30 backdrop-blur p-8 rounded-2xl border border-slate-700 hover:border-purple-500/30 transition-colors">
            <SkillRadar data={skillRadarData} />
          </div>
        </motion.div>

        {/* 统计信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: '技术领域', value: skillCategories.length, color: 'from-purple-500 to-purple-600' },
            { label: '核心技能', value: skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0), color: 'from-blue-500 to-blue-600' },
            { label: '平均熟练度', value: Math.round(skillCategories.reduce((sum, cat) => sum + cat.skills.reduce((s, skill) => s + skill.level, 0), 0) / skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0)), color: 'from-pink-500 to-pink-600' },
            { label: '项目经验', value: 8, color: 'from-green-500 to-green-600' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-800/30 backdrop-blur p-4 rounded-xl border border-slate-700 text-center"
            >
              <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

/**
 * Experience 区域 - 工作经历
 */
import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import { useIntersection } from '@/hooks/useIntersection';
import { Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const { ref, isVisible } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  });

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            工作经历
          </h2>
          <p className="text-slate-400 text-lg">职业发展历程</p>
        </motion.div>

        {/* 工作经历卡片 */}
        <div ref={ref} className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              {/* 头部信息 */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div className="flex items-center gap-4">
                  {exp.logo && (
                    <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center overflow-hidden border border-slate-600">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-xl">🏢</span>';
                        }}
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                    <p className="text-lg text-purple-400 font-medium">{exp.position}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.startDate} - {exp.endDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* 描述 */}
              <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

              {/* 主要成就 */}
              <div className="mb-6">
                <p className="text-sm text-slate-500 font-semibold mb-3">主要成就:</p>
                <ul className="space-y-2">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-green-400 mt-0.5">✓</span>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 技术栈 */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-slate-700/50 rounded-full text-slate-300 border border-slate-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 相关项目 */}
              {exp.projects && exp.projects.length > 0 && (
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-sm text-slate-500 font-semibold mb-3">相关项目:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {exp.projects.map((proj, i) => (
                      <div
                        key={i}
                        className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50"
                      >
                        <div className="font-medium text-white text-sm">{proj.name}</div>
                        <div className="text-xs text-slate-400 mt-1">{proj.description}</div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {proj.tech.map((t) => (
                            <span
                              key={t}
                              className="px-1.5 py-0.5 text-[10px] bg-slate-800 rounded text-slate-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* 时间轴装饰 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center text-slate-500 text-sm font-mono"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/30 rounded-full border border-slate-700">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            持续成长中...
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

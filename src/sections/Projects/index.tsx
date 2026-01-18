/**
 * Projects 区域 - 项目展示
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '@/data/projects';
import { ExternalLink, Github, Star, Download } from 'lucide-react';
import { useIntersection } from '@/hooks/useIntersection';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'open-source' | 'work' | 'personal'>('all');
  const { ref, isVisible } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  });

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            项目展示
          </h2>
          <p className="text-slate-400 text-lg">精选项目与开源贡献</p>
        </motion.div>

        {/* 过滤器 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key as 'all' | 'open-source' | 'work' | 'personal')}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                filter === cat.key
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-500'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* 项目网格 */}
        <AnimatePresence mode="wait">
          <motion.div
            ref={ref}
            key={filter}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                {/* 项目图片 */}
                {project.thumbnail && (
                  <div className="h-48 overflow-hidden bg-slate-900 relative">
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.style.background = 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)';
                        (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="flex items-center justify-center h-full text-4xl">🚀</div>';
                      }}
                    />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-700 rounded"
                          aria-label="GitHub"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-700 rounded"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-4 line-clamp-2 min-h-[40px]">
                    {project.description}
                  </p>

                  {/* 技术栈 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-slate-700/50 rounded text-slate-300 border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-slate-700/30 rounded text-slate-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* 特性 */}
                  <ul className="space-y-1 text-xs text-slate-500 mb-4">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="text-blue-400 mt-0.5">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* 指标 */}
                  {project.metrics && (
                    <div className="mt-4 pt-4 border-t border-slate-700 flex gap-4 text-xs text-slate-400">
                      {project.metrics.stars && (
                        <span className="flex items-center gap-1">
                          <Star size={12} className="text-yellow-500" />
                          {project.metrics.stars}
                        </span>
                      )}
                      {project.metrics.downloads && (
                        <span className="flex items-center gap-1">
                          <Download size={12} className="text-green-500" />
                          {project.metrics.downloads}
                        </span>
                      )}
                      {project.metrics.performance && (
                        <span className="text-purple-400">{project.metrics.performance}</span>
                      )}
                    </div>
                  )}

                  {/* 项目时间 */}
                  <div className="mt-3 text-xs text-slate-500 font-mono">
                    {project.startDate} - {project.endDate}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* 空状态 */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <div className="text-4xl mb-4">🔍</div>
            <p>暂无此类项目</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

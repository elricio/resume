/**
 * Hero 区域 - 首屏展示
 */
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Button } from '@/components/ui/Button';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { scrollToElement } from '@/hooks/useScrollProgress';

export const Hero: React.FC = () => {
  const reducedMotion = useReducedMotion();

  const handleScrollToSkills = () => {
    scrollToElement('#skills');
  };

  const handleScrollToProjects = () => {
    scrollToElement('#projects');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
      {/* 背景装饰 - 霓虹渐变 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />

      {/* 霓虹光晕 */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={reducedMotion ? {} : {
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={reducedMotion ? {} : {
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl"
        />
      </div>

      {/* 内容容器 */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* 头像 */}
          <motion.div
            initial={reducedMotion ? {} : { scale: 0 }}
            animate={reducedMotion ? {} : { scale: 1 }}
            transition={{
              delay: 0.2,
              type: 'spring',
              stiffness: 100,
              damping: 15,
            }}
            className="w-40 h-40 mx-auto mb-8 rounded-full border-4 border-purple-500/50 overflow-hidden shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow duration-300"
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="160"%3E%3Crect width="160" height="160" fill="%2318181b"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%238b5cf6" font-size="48"%3E%F0%9F%98%8E%3C/text%3E%3C/svg%3E';
              }}
            />
          </motion.div>

          {/* 文字内容 */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            {profile.name}
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-6 font-mono tracking-wide">
            {profile.title}
          </p>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            {profile.tagline}
          </p>

          {/* 按钮组 */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant="primary"
              size="lg"
              onClick={handleScrollToSkills}
            >
              查看技能
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleScrollToProjects}
            >
              浏览项目
            </Button>
          </div>

          {/* 快捷信息 */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-mono">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              开放机会
            </span>
            <span>📍 {profile.location}</span>
            <span>📧 {profile.email}</span>
          </div>

          {/* 滚动提示 */}
          <motion.div
            animate={reducedMotion ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-slate-500 rounded-full animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

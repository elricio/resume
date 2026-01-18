/**
 * Hero 区域 - 首屏展示 (增强版)
 * 增加了更多视觉效果和交互
 */
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { profile } from '@/data/profile';
import { Button } from '@/components/ui/Button';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { scrollToElement } from '@/hooks/useScrollProgress';

export const Hero: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 鼠标跟随效果
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const backgroundX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]));
  const backgroundY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX / innerWidth);
      mouseY.set(clientY / innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleScrollToSkills = () => {
    scrollToElement('#skills');
  };

  const handleScrollToProjects = () => {
    scrollToElement('#projects');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
      {/* 增强背景 - 多层渐变 */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(at 40% 20%, rgba(236, 72, 153, 0.1) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(59, 130, 246, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(168, 85, 247, 0.1) 0px, transparent 50%),
            radial-gradient(at 80% 50%, rgba(236, 72, 153, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(34, 197, 94, 0.1) 0px, transparent 50%)
          `,
        }}
      />
      
      {/* 动态网格背景 */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translate(${backgroundX.get()}px, ${backgroundY.get()}px)`,
        }}
      />

      {/* 增强霓虹光晕 */}
      <div className="absolute inset-0">
        <motion.div
          animate={reducedMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={reducedMotion ? {} : {
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={reducedMotion ? {} : {
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-600 rounded-full blur-3xl opacity-30"
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
          {/* 增强头像 */}
          <motion.div
            initial={reducedMotion ? {} : { scale: 0, rotate: -180 }}
            animate={reducedMotion ? {} : { scale: 1, rotate: 0 }}
            transition={{
              delay: 0.2,
              type: 'spring',
              stiffness: 100,
              damping: 15,
            }}
            className="relative w-40 h-40 mx-auto mb-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* 外圈光效 */}
            <motion.div
              animate={isHovered ? { scale: 1.1, rotate: 360 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-full border-4 border-purple-500/30"
            />
            
            {/* 中圈光效 */}
            <motion.div
              animate={isHovered ? { scale: 1.2, rotate: -360 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-2 rounded-full border-2 border-pink-500/20"
            />
            
            {/* 头像容器 */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 group">
              {/* 背景模糊 */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="160"%3E%3Crect width="160" height="160" fill="%2318181b"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%238b5cf6" font-size="48"%3E%F0%9F%98%8E%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
            
            {/* 悬浮粒子效果 */}
            {isHovered && (
              <div className="absolute -inset-4">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0], 
                      opacity: [0, 1, 0],
                      y: [0, -30, -60],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    style={{
                      left: `${50 + Math.cos((i * 60 * Math.PI) / 180) * 40}%`,
                      top: `${50 + Math.sin((i * 60 * Math.PI) / 180) * 40}%`,
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>

          {/* 增强标题 */}
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold mb-4"
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-gradient bg-size-200">
              {profile.name}
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-400 mb-6 font-mono tracking-wide"
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {profile.title}
          </motion.p>

          <motion.p 
            className="text-lg text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {profile.tagline}
          </motion.p>

          {/* 增强按钮组 */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button
              variant="gradient"
              size="lg"
              onClick={handleScrollToSkills}
              magnetic
            >
              <span className="flex items-center gap-2">
                查看技能
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={handleScrollToProjects}
            >
              <span className="flex items-center gap-2">
                浏览项目
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  ⚡
                </motion.span>
              </span>
            </Button>
          </motion.div>

          {/* 增强快捷信息 */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-mono"
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.span 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <motion.span 
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              开放机会
            </motion.span>
            <motion.span 
              className="hover:text-slate-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              📍 {profile.location}
            </motion.span>
            <motion.span 
              className="hover:text-slate-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              📧 {profile.email}
            </motion.span>
          </motion.div>

          {/* 增强滚动提示 */}
          <motion.div
            animate={reducedMotion ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div 
              className="w-6 h-10 border-2 border-slate-500/60 rounded-full flex justify-center pt-2 backdrop-blur-sm bg-slate-900/20"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="w-1 h-2 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"
                animate={{ 
                  y: [0, 12, 0],
                  opacity: [1, 0.3, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

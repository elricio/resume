/**
 * 主应用组件
 */
import { useEffect } from 'react';
import { Hero } from '@/sections/Hero';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Experience } from '@/sections/Experience';
import { Contact } from '@/sections/Contact';
import { useTheme } from '@/hooks/useTheme';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import '@/styles/globals.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { scrollProgress } = useScrollProgress();

  // 监听键盘快捷键
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + T: 切换主题
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        toggleTheme();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleTheme]);

  return (
    <div className="min-h-screen">
      {/* 滚动进度条 */}
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* 主题切换按钮 */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-3 bg-slate-800/80 backdrop-blur rounded-full border border-slate-700 hover:border-purple-500 hover:bg-purple-600/20 transition-all duration-300 group"
        title="切换主题 (Ctrl+Shift+T)"
        aria-label="切换主题"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          {theme === 'dark' && <span className="text-lg">🌙</span>}
          {theme === 'light' && <span className="text-lg">☀️</span>}
          {theme === 'neon' && <span className="text-lg">⚡</span>}
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {theme} 主题
        </div>
      </button>

      {/* 页面区块 */}
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

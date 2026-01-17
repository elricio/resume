/**
 * 主题切换 Hook
 * 管理主题状态和切换逻辑
 */
import { useState, useEffect, useCallback } from 'react';
import type { ThemeName } from '@/utils/types';
import { themeConfig } from '@/data/theme';

interface UseThemeResult {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  // 从 localStorage 获取保存的主题，或使用默认主题
  const getInitialTheme = (): ThemeName => {
    if (typeof window === 'undefined') {
      return themeConfig.defaultTheme;
    }

    const savedTheme = localStorage.getItem(themeConfig.storageKey);
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light' || savedTheme === 'neon')) {
      return savedTheme as ThemeName;
    }

    // 检测系统主题偏好
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }

    return themeConfig.defaultTheme;
  };

  const [theme, setThemeState] = useState<ThemeName>(getInitialTheme);

  // 应用主题到 DOM
  const applyTheme = useCallback((newTheme: ThemeName) => {
    const root = document.documentElement;

    // 移除所有主题类
    root.classList.remove('theme-dark', 'theme-light', 'theme-neon');

    // 添加新主题类
    root.classList.add(`theme-${newTheme}`);

    // 设置 data-theme 属性
    root.setAttribute('data-theme', newTheme);

    // 保存到 localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(themeConfig.storageKey, newTheme);
    }
  }, []);

  // 设置主题
  const setTheme = useCallback((newTheme: ThemeName) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
  }, [applyTheme]);

  // 切换主题
  const toggleTheme = useCallback(() => {
    const themes: ThemeName[] = ['dark', 'light', 'neon'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  }, [theme, setTheme]);

  // 判断是否为暗色主题
  const isDark = theme === 'dark' || theme === 'neon';

  // 初始化主题
  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  // 监听系统主题变化（仅在未手动设置时）
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem(themeConfig.storageKey);

      // 如果用户没有手动设置过主题，则跟随系统
      if (!savedTheme) {
        setThemeState(e.matches ? 'light' : 'dark');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  return {
    theme,
    setTheme,
    isDark,
    toggleTheme,
  };
};

export default useTheme;

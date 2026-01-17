/**
 * 主题配置数据
 */
import type { ThemeConfig, ThemeName } from '@/utils/types';

// 深色主题 (默认)
export const darkTheme: ThemeConfig = {
  name: 'dark',
  colors: {
    background: '#09090b',      // slate-950
    surface: '#18181b',         // slate-900
    surfaceHover: '#27272a',    // slate-800
    border: '#3f3f46',          // slate-700
    text: '#fafafa',            // slate-50
    textSecondary: '#a1a1aa',   // slate-400
    primary: '#8b5cf6',         // purple-500
    primaryHover: '#7c3aed',    // purple-600
    accent: '#0ea5e9',          // blue-500
  },
  fonts: {
    sans: '"Inter", sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    glow: '0 0 20px rgba(139, 92, 246, 0.3)',
  }
};

// 光明主题
export const lightTheme: ThemeConfig = {
  name: 'light',
  colors: {
    background: '#ffffff',
    surface: '#f4f4f5',
    surfaceHover: '#e4e4e7',
    border: '#d4d4d8',
    text: '#18181b',
    textSecondary: '#52525b',
    primary: '#7c3aed',
    primaryHover: '#6d28d9',
    accent: '#0284c7',
  },
  fonts: {
    sans: '"Inter", sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    glow: '0 0 20px rgba(124, 58, 237, 0.2)',
  }
};

// Neon 主题
export const neonTheme: ThemeConfig = {
  name: 'neon',
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    surfaceHover: '#1a1a1a',
    border: '#333333',
    text: '#ffffff',
    textSecondary: '#888888',
    primary: '#00ff88',
    primaryHover: '#00cc6a',
    accent: '#ff00ff',
  },
  fonts: {
    sans: '"JetBrains Mono", monospace',
    mono: '"JetBrains Mono", monospace',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.5)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.5)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.5)',
    glow: '0 0 20px rgba(0, 255, 136, 0.5), 0 0 40px rgba(0, 255, 136, 0.2)',
  }
};

// 主题映射
export const themes: Record<ThemeName, ThemeConfig> = {
  dark: darkTheme,
  light: lightTheme,
  neon: neonTheme,
};

// 默认主题
export const defaultTheme: ThemeName = 'dark';

// 主题切换配置
export const themeConfig = {
  defaultTheme,
  themes,
  storageKey: 'geek-resume-theme',
};

export default {
  darkTheme,
  lightTheme,
  neonTheme,
  themes,
  defaultTheme,
  themeConfig,
};

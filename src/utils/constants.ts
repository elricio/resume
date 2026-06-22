/**
 * 常量定义
 */

// ==================== 颜色配置 ====================
export const COLORS = {
  // 主色调 - Geek 深色系
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9', // 科技蓝
    600: '#0284c7',
    900: '#0c4a6e'
  },

  // 强调色 - 霓虹紫
  accent: {
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed'
  },

  // 成功/警告/错误
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',

  // 中性色
  neutral: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b'
  },

  // 玻璃拟态
  glass: {
    bg: 'rgba(15, 23, 42, 0.7)',
    border: 'rgba(148, 163, 184, 0.1)'
  }
} as const

// ==================== 字体配置 ====================
export const FONTS = {
  // 代码字体 - 等宽
  mono: '"JetBrains Mono", "Fira Code", "Cascadia Code", Consolas, monospace',

  // 正文字体
  sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',

  // 标题字体
  display: '"Space Grotesk", "Inter", sans-serif',

  // 大小系统
  sizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem' // 48px
  }
} as const

// ==================== 间距系统 ====================
export const SPACING = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
  '4xl': '6rem' // 96px
} as const

// ==================== 响应式断点 ====================
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const

// ==================== 动画配置 ====================
export const ANIMATIONS = {
  // 淡入上浮
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },

  // 淡入
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  },

  // 从左滑入
  slideInFromLeft: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  },

  // 从右滑入
  slideInFromRight: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  },

  // 缩放进入
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4 }
  },

  // 弹簧缩放
  springScale: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  },

  // 错误动画
  shake: {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.5 }
  }
} as const

// ==================== 常量配置 ====================
export const CONFIG = {
  // 网站信息
  SITE: {
    title: 'Geek Resume',
    description: '现代化前端工程师简历',
    url: 'https://resume.elricio.com'
  },

  // 性能预算 (bytes)
  PERFORMANCE_BUDGET: {
    javascript: 200000, // 200KB
    css: 50000, // 50KB
    images: 500000, // 500KB
    total: 800000 // 800KB
  },

  // Lighthouse 目标分数
  LIGHTHOUSE_SCORE: {
    performance: 95,
    accessibility: 100,
    bestPractices: 100,
    seo: 100
  },

  // 交互动画
  INTERACTION: {
    hoverScale: 1.02,
    tapScale: 0.98,
    transitionDuration: 0.2
  },

  // 滚动配置
  SCROLL: {
    offset: 100, // 触发滚动动画的偏移量
    smooth: true
  },

  // 图片配置
  IMAGE: {
    placeholderColor: '#18181b',
    maxFileSize: 500000 // 500KB
  }
} as const

// ==================== 社交链接 ====================
export const SOCIAL_LINKS = {
  github: 'https://github.com/elricio',
  email: 'mailto:hi@elricli.com',
  linkedin: '',
  twitter: '',
  website: 'https://elricio.github.io'
} as const

// ==================== 导出配置 ====================
export default {
  COLORS,
  FONTS,
  SPACING,
  BREAKPOINTS,
  ANIMATIONS,
  CONFIG,
  SOCIAL_LINKS
}

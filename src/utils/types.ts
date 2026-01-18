/**
 * Geek Resume - TypeScript 类型定义
 * 所有数据模型的类型声明
 */

// ==================== 个人信息 ====================
export interface Profile {
  name: string;
  title: string;
  avatar: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  github: string;
  linkedin?: string;
  summary: string;
  tagline: string;
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

// ==================== 技能相关 ====================
export interface Skill {
  name: string;
  level: number; // 0-100
  description: string[];
  icon?: string;
  color?: string;
  tags?: string[];
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface SkillRadarData {
  subject: string;
  value: number;
  fullMark: number;
}

// ==================== 工作经历 ====================
export interface Experience {
  company: string;
  logo?: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | '至今';
  description: string;
  achievements: string[];
  technologies: string[];
  projects?: ExperienceProject[];
}

export interface ExperienceProject {
  name: string;
  description: string;
  tech: string[];
}

// ==================== 项目相关 ====================
export interface Project {
  name: string;
  description: string;
  url: string;
  github?: string;
  thumbnail?: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  features: string[];
  metrics?: {
    stars?: number;
    downloads?: number;
    performance?: string;
  };
  category: 'open-source' | 'work' | 'personal';
}

// ==================== 开源贡献 ====================
export interface OpenSource {
  repo: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  topics: string[];
  contributions: number;
  url: string;
}

// ==================== 时间轴项目 ====================
export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon?: string;
}

// ==================== 主题配置 ====================
export type ThemeName = 'dark' | 'light' | 'neon';

export interface ThemeConfig {
  name: ThemeName;
  colors: {
    background: string;
    surface: string;
    surfaceHover: string;
    border: string;
    text: string;
    textSecondary: string;
    primary: string;
    primaryHover: string;
    accent: string;
  };
  fonts: {
    sans: string;
    mono: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    glow: string;
  };
}

// ==================== UI 组件类型 ====================
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export interface CodeBlockProps {
  code: string;
  language: string;
  showCopy?: boolean;
}

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fallbackSrc?: string;
}

// ==================== 页面区块类型 ====================
export interface SectionProps {
  id?: string;
  className?: string;
}

// ==================== 动画类型 ====================
export interface AnimationConfig {
  initial: Record<string, unknown>;
  animate: Record<string, unknown>;
  transition?: Record<string, unknown>;
}

export interface StaggerContainerConfig {
  hidden: Record<string, unknown>;
  visible: {
    opacity: number;
    transition: {
      staggerChildren: number;
    };
  };
}

// ==================== 性能监控 ====================
export interface WebVitalEntry {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
}

// ==================== 错误边界 ====================
export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

// ==================== 滚动钩子 ====================
export interface UseIntersectionOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export interface UseIntersectionResult<T extends HTMLElement> {
  ref: React.RefObject<T>;
  isVisible: boolean;
}

// ==================== 主题钩子 ====================
export interface UseThemeResult {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  isDark: boolean;
}

// ==================== 滚动进度钩子 ====================
export interface UseScrollProgressResult {
  scrollProgress: number;
  direction: 'up' | 'down';
}

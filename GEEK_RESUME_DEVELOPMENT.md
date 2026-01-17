# Geek Resume 开发文档

> 现代化前端工程师简历重构方案

## 📋 项目概述

这是一个面向高级前端开发工程师的现代化个人简历项目，采用最新的前端技术栈，打造一个高性能、可交互、视觉冲击力强的 geek 风格简历页面。

### 🎯 设计目标

- **技术展示**: 全面展示前端技术深度和广度
- **性能优先**: Lighthouse 评分 95+，极致加载速度
- **交互体验**: 流畅的动画和交互，展现工程化思维
- **响应式**: 完美适配桌面、平板、移动端
- **可维护**: 现代化架构，易于更新和扩展

---

## 🏗️ 技术栈选型

### 核心技术栈

| 技术 | 选型 | 理由 |
|------|------|------|
| **构建工具** | Vite 5 + TypeScript | 极速开发体验，现代化构建 |
| **前端框架** | React 18 + Hooks | 组件化开发，状态管理 |
| **样式方案** | Tailwind CSS + CSS Modules | 原子化样式，类型安全 |
| **动画库** | Framer Motion | 声明式动画，性能优秀 |
| **图表可视化** | Recharts / D3.js | 数据可视化展示 |
| **代码高亮** | Prism.js / Shiki | 技术博客/项目展示 |
| **部署** | Vercel / GitHub Pages | CI/CD 自动化 |

### 开发工具

```json
{
  "devDependencies": {
    "typescript": "^5.3.0",
    "vite": "^5.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@types/react": "^18.2.0",
    "@types/node": "^20.0.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^10.16.0",
    "recharts": "^2.10.0",
    "lucide-react": "^0.290.0",
    "eslint": "^8.55.0",
    "prettier": "^3.1.0",
    "vitest": "^1.0.0"
  }
}
```

---

## 📁 项目架构

### 目录结构

```
geek-resume/
├── 📄 public/                    # 静态资源
│   ├── favicon.ico
│   ├── robots.txt
│   └── images/                  # 图片资源
│       ├── avatar.jpg           # 头像
│       ├── projects/            # 项目截图
│       └── tech/                # 技术栈图标
│
├── 📂 src/                      # 源代码
│   ├── 📂 components/           # 通用组件
│   │   ├── ui/                  # 基础 UI 组件
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── ...
│   │   ├── layout/              # 布局组件
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   └── shared/              # 共享组件
│   │       ├── SkillRadar.tsx   # 技能雷达图
│   │       ├── Timeline.tsx     # 时间轴
│   │       └── ...
│   │
│   ├── 📂 sections/             # 页面区块
│   │   ├── Hero/                # 首屏区域
│   │   ├── Skills/              # 技能展示
│   │   ├── Experience/          # 工作经历
│   │   ├── Projects/            # 项目展示
│   │   ├── OpenSource/          # 开源贡献
│   │   └── Contact/             # 联系方式
│   │
│   ├── 📂 hooks/                # 自定义 Hooks
│   │   ├── useScrollProgress.ts # 滚动进度
│   │   ├── useIntersection.ts   # 滚动动画触发
│   │   └── useTheme.ts          # 主题切换
│   │
│   ├── 📂 utils/                # 工具函数
│   │   ├── animations.ts        # 动画配置
│   │   ├── constants.ts         # 常量定义
│   │   └── types.ts             # TypeScript 类型
│   │
│   ├── 📂 data/                 # 数据层
│   │   ├── profile.ts           # 个人信息
│   │   ├── skills.ts            # 技能数据
│   │   ├── experience.ts        # 工作经历
│   │   ├── projects.ts          # 项目数据
│   │   └── openSource.ts        # 开源贡献
│   │
│   ├── 📂 styles/               # 样式
│   │   ├── globals.css          # 全局样式
│   │   ├── themes/              # 主题配置
│   │   └── animations.css       # 动画样式
│   │
│   ├── 📂 assets/               # 静态资源
│   │   ├── icons/               # SVG 图标
│   │   └── fonts/               # 字体文件
│   │
│   ├── 📂 pages/                # 页面 (如需多页)
│   │   ├── index.tsx            # 主页
│   │   └── blog/                # 博客页 (可选)
│   │
│   ├── 📂 stores/               # 状态管理 (如需)
│   │   └── themeStore.ts        # 主题状态
│   │
│   ├── App.tsx                  # 应用入口
│   ├── main.tsx                 # 渲染入口
│   └── vite-env.d.ts            # 类型定义
│
├── 📂 tests/                    # 测试
│   ├── unit/                    # 单元测试
│   ├── e2e/                     # 端到端测试
│   └── visual/                  # 视觉回归测试
│
├── 📄配置文件
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
└── package.json
```

---

## 🎨 设计系统

### 配色方案

```typescript
// src/utils/constants.ts
export const COLORS = {
  // 主色调 - Geek 深色系
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',    // 科技蓝
    600: '#0284c7',
    900: '#0c4a6e',
  },

  // 强调色 - 霓虹紫
  accent: {
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
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
    950: '#09090b',
  },

  // 玻璃拟态
  glass: {
    bg: 'rgba(15, 23, 42, 0.7)',
    border: 'rgba(148, 163, 184, 0.1)',
  }
} as const;
```

### 字体系统

```typescript
// src/utils/constants.ts
export const FONTS = {
  // 代码字体 - 等宽
  mono: '"JetBrains Mono", "Fira Code", "Cascadia Code", Consolas, monospace',

  // 正文字体
  sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',

  // 标题字体
  display: '"Space Grotesk", "Inter", sans-serif',

  // 大小系统
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
  }
} as const;
```

### 间距系统

```typescript
export const SPACING = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
} as const;
```

---

## 📊 数据模型

### 个人信息 (Profile)

```typescript
// src/data/profile.ts
export interface Profile {
  name: string;
  title: string;
  avatar: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  github: string;
  linkedin: string;
  summary: string;
  tagline: string;
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export const profile: Profile = {
  name: "李宜其",
  title: "高级前端工程师",
  avatar: "/images/avatar.jpg",
  location: "北京",
  email: "eachli@163.com",
  phone: "18810609069",
  website: "https://eachlee.github.io",
  github: "https://github.com/eachlee",
  linkedin: "",
  summary: "拥有多年前端开发经验，专注于高性能 Web 应用开发...",
  tagline: "Code is poetry, performance is art",
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/eachlee", icon: "github" },
    { platform: "Email", url: "mailto:eachli@163.com", icon: "mail" },
  ]
};
```

### 技能数据 (Skills)

```typescript
// src/data/skills.ts
export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  description: string[];
  icon?: string;
  color?: string;
  tags?: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "前端核心",
    skills: [
      {
        name: "JavaScript/TypeScript",
        level: 95,
        description: [
          "深入理解 V8 引擎原理",
          "精通异步编程、Promise、Async/Await",
          "熟练掌握 TS 高级类型、泛型、装饰器",
          "熟悉 ES2023+ 新特性"
        ],
        icon: "javascript",
        color: "#f7df1e",
        tags: ["ES6+", "TypeScript", "Node.js"]
      },
      {
        name: "React 生态",
        level: 90,
        description: [
          "精通 React 18 Hooks、Concurrent Mode",
          "熟练使用 Next.js、Remix 等框架",
          "深入理解 Fiber 架构、Reconciliation",
          "掌握状态管理：Redux Toolkit、Zustand、Jotai"
        ],
        icon: "react",
        color: "#61dafb",
        tags: ["React 18", "Next.js", "Redux"]
      }
    ]
  },
  {
    category: "工程化",
    skills: [
      {
        name: "构建工具",
        level: 85,
        description: [
          "精通 Vite、Webpack 配置优化",
          "熟悉 Rollup、esbuild、Turbopack",
          "掌握微前端架构（Module Federation）",
          "CI/CD 流程设计与优化"
        ],
        icon: "tool",
        color: "#8b5cf6",
        tags: ["Vite", "Webpack", "Turborepo"]
      }
    ]
  }
];
```

### 工作经历 (Experience)

```typescript
// src/data/experience.ts
export interface Experience {
  company: string;
  logo?: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | "至今";
  description: string;
  achievements: string[];
  technologies: string[];
  projects?: Project[];
}

export const experiences: Experience[] = [
  {
    company: "四翼鸟科技",
    position: "高级前端工程师",
    location: "北京",
    startDate: "2017-03",
    endDate: "至今",
    description: "负责广告投放系统前端架构设计与开发",
    achievements: [
      "设计并实现高性能广告脚本引擎，支持毫秒级加载",
      "优化前端性能，首屏加载时间减少 60%",
      "建立前端监控体系，错误率降低 80%"
    ],
    technologies: ["JavaScript", "TypeScript", "Puppeteer", "PhantomJS", "Webpack"],
    projects: [
      {
        name: "广告投放系统",
        description: "支持亿级 PV 的广告投放平台",
        tech: ["React", "TypeScript", "Vite", "Web Workers"]
      }
    ]
  }
];
```

### 项目数据 (Projects)

```typescript
// src/data/projects.ts
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
  category: "open-source" | "work" | "personal";
}

export const projects: Project[] = [
  {
    name: "微云网页版",
    description: "基于原生 JavaScript 的云存储前端，支持文件夹管理、批量操作",
    url: "https://eachlee.github.io/weiyun/",
    github: "https://github.com/eachlee/weiyun",
    startDate: "2016-05",
    endDate: "至今",
    technologies: ["JavaScript", "CSS3", "LocalStorage"],
    features: [
      "实现文件夹树形结构与拖拽排序",
      "支持批量上传、下载、删除",
      "响应式设计，适配移动端"
    ],
    category: "personal"
  }
];
```

### 开源贡献 (Open Source)

```typescript
// src/data/openSource.ts
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

export const openSource: OpenSource[] = [
  {
    repo: "eachlee/utils",
    description: "前端工具函数库，包含 100+ 常用函数",
    stars: 234,
    forks: 45,
    language: "TypeScript",
    topics: ["typescript", "utilities", "frontend"],
    contributions: 42,
    url: "https://github.com/eachlee/utils"
  }
];
```

---

## 🎬 动画系统

### 滚动触发动画

```typescript
// src/hooks/useIntersection.ts
import { useRef, useEffect, useState } from 'react';

export const useIntersection = <T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.1 }
) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
};
```

### 动画配置

```typescript
// src/utils/animations.ts
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const slideInFromLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4 }
};
```

---

## 📱 组件设计

### 技能雷达图 (SkillRadar)

```tsx
// src/components/shared/SkillRadar.tsx
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

interface SkillRadarProps {
  data: {
    subject: string;
    A: number;
    fullMark: number;
  }[];
}

export const SkillRadar: React.FC<SkillRadarProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar
          name="技能水平"
          dataKey="A"
          stroke="#8b5cf6"
          fill="#8b5cf6"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
```

### 时间轴组件 (Timeline)

```tsx
// src/components/shared/Timeline.tsx
import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const { ref, isVisible } = useIntersection<HTMLDivElement>();

  return (
    <div ref={ref} className="relative">
      {/* 中轴线 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-500" />

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`flex items-center mb-8 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          <div className="w-1/2 px-4">
            <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.date}</p>
              <p className="mt-2 text-slate-300">{item.description}</p>
            </div>
          </div>
          <div className="w-1/2" />
        </motion.div>
      ))}
    </div>
  );
};
```

### 代码展示组件 (CodeBlock)

```tsx
// src/components/shared/CodeBlock.tsx
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
  showCopy?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, showCopy = true }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
      {showCopy && (
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 bg-slate-800 hover:bg-slate-700 rounded transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
        </button>
      )}
      <div className="px-4 py-2 bg-slate-800 text-xs text-slate-400 border-b border-slate-700">
        {language}
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono text-slate-300">
        <code>{code}</code>
      </pre>
    </div>
  );
};
```

---

## 🎯 页面区块设计

### 1. Hero 区域 (首屏)

```tsx
// src/sections/Hero/index.tsx
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* 头像 */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="w-40 h-40 mx-auto mb-8 rounded-full border-4 border-purple-500/50 overflow-hidden shadow-2xl"
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 文字内容 */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-6 font-mono">
            {profile.title}
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
            {profile.tagline}
          </p>

          {/* 按钮组 */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg">
              查看项目
            </Button>
            <Button variant="outline" size="lg">
              联系我
            </Button>
          </div>

          {/* 滚动提示 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-slate-500 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
```

### 2. 技能展示区 (Skills)

```tsx
// src/sections/Skills/index.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '@/data/skills';
import { SkillRadar } from '@/components/shared/SkillRadar';
import { CodeBlock } from '@/components/shared/CodeBlock';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">技术栈</h2>
          <p className="text-slate-400">持续学习，不断精进</p>
        </motion.div>

        {/* 技能分类标签 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((cat, index) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === index
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* 技能展示 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    <span className="text-purple-400 font-mono">{skill.level}%</span>
                  </div>

                  {/* 进度条 */}
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>

                  {/* 描述 */}
                  <ul className="space-y-2 text-sm text-slate-400">
                    {skill.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* 技术标签 */}
                  {skill.tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {skill.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-slate-700 rounded text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 技能雷达图 */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">技能分布</h3>
          <div className="bg-slate-800/30 backdrop-blur p-8 rounded-2xl border border-slate-700">
            <SkillRadar
              data={[
                { subject: 'JavaScript', A: 95, fullMark: 100 },
                { subject: 'React', A: 90, fullMark: 100 },
                { subject: 'TypeScript', A: 85, fullMark: 100 },
                { subject: 'Node.js', A: 75, fullMark: 100 },
                { subject: 'CSS', A: 90, fullMark: 100 },
                { subject: '性能优化', A: 85, fullMark: 100 },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
```

### 3. 项目展示区 (Projects)

```tsx
// src/sections/Projects/index.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'open-source' | 'work' | 'personal'>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">项目展示</h2>
          <p className="text-slate-400">精选项目与开源贡献</p>
        </motion.div>

        {/* 过滤器 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(['all', 'open-source', 'work', 'personal'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full transition-all capitalize ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* 项目网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all group"
            >
              {/* 项目图片 */}
              {project.thumbnail && (
                <div className="h-48 overflow-hidden bg-slate-900">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                        className="text-slate-400 hover:text-white transition-colors"
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
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* 技术栈 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-slate-700 rounded text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 特性 */}
                <ul className="space-y-1 text-xs text-slate-500">
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
                      <span>⭐ {project.metrics.stars}</span>
                    )}
                    {project.metrics.downloads && (
                      <span>📥 {project.metrics.downloads}</span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

### 4. 工作经历区 (Experience)

```tsx
// src/sections/Experience/index.tsx
import { experiences } from '@/data/experience';
import { Timeline } from '@/components/shared/Timeline';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  const timelineItems = experiences.map(exp => ({
    date: `${exp.startDate} - ${exp.endDate}`,
    title: `${exp.position} @ ${exp.company}`,
    description: exp.description,
    icon: exp.logo
  }));

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">工作经历</h2>
          <p className="text-slate-400">职业发展历程</p>
        </motion.div>

        <Timeline items={timelineItems} />

        {/* 详细卡片 */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700"
            >
              <div className="flex items-center gap-3 mb-4">
                {exp.logo && (
                  <img src={exp.logo} alt={exp.company} className="w-10 h-10 rounded" />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
                  <p className="text-sm text-slate-400">{exp.position}</p>
                </div>
              </div>

              <div className="text-sm text-slate-500 mb-4">
                {exp.startDate} - {exp.endDate} · {exp.location}
              </div>

              <p className="text-slate-300 text-sm mb-4">{exp.description}</p>

              <div className="space-y-2">
                <p className="text-xs text-slate-500 font-semibold">主要成就:</p>
                {exp.achievements.map((ach, i) => (
                  <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    {ach}
                  </li>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-slate-700 rounded text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

### 5. 联系方式区 (Contact)

```tsx
// src/sections/Contact/index.tsx
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Mail, MapPin, Phone, Globe, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Contact: React.FC = () => {
  const contactItems = [
    { icon: <Mail size={20} />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: <Phone size={20} />, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
    { icon: <MapPin size={20} />, label: 'Location', value: profile.location },
    { icon: <Globe size={20} />, label: 'Website', value: profile.website, href: profile.website },
    { icon: <Github size={20} />, label: 'GitHub', value: 'eachlee', href: profile.github },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">联系我</h2>
          <p className="text-slate-400">期待与您合作</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* 联系信息 */}
          <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-white">联系方式</h3>
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
                >
                  <div className="text-purple-400">{item.icon}</div>
                  <div>
                    <div className="text-sm text-slate-500">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white hover:text-purple-400 transition-colors"
                        target={item.label === 'Website' || item.label === 'GitHub' ? '_blank' : undefined}
                        rel={item.label === 'Website' || item.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 简介 */}
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur p-8 rounded-2xl border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4 text-white">关于我</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              {profile.summary}
            </p>

            <div className="space-y-3">
              <div>
                <div className="text-sm text-slate-500 mb-2">当前状态</div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 font-medium">开放机会</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700">
                <Button variant="primary" size="lg" className="w-full">
                  发送邮件
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 社交链接 */}
        <div className="mt-12 flex justify-center gap-6">
          {profile.socialLinks.map((link, index) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1, y: -3 }}
              className="p-3 bg-slate-800 rounded-full border border-slate-700 hover:border-purple-500 hover:bg-purple-600/20 transition-all"
              aria-label={link.platform}
            >
              {link.platform === 'GitHub' && <Github size={24} />}
              {link.platform === 'Email' && <Mail size={24} />}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

## 🎨 主题系统

### 深色主题 (默认)

```typescript
// src/styles/themes/dark.ts
export const darkTheme = {
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
} as const;
```

### 光明主题

```typescript
// src/styles/themes/light.ts
export const lightTheme = {
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
  // ... 其他配置
} as const;
```

### Neon 主题 (Glow 效果)

```typescript
// src/styles/themes/neon.ts
export const neonTheme = {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    surfaceHover: '#1a1a1a',
    border: '#333333',
    text: '#ffffff',
    textSecondary: '#888888',
    primary: '#00ff88',      // 霓虹绿
    primaryHover: '#00cc6a',
    accent: '#ff00ff',       // 霓虹粉
  },
  shadows: {
    glow: '0 0 20px rgba(0, 255, 136, 0.5), 0 0 40px rgba(0, 255, 136, 0.2)',
    glowPink: '0 0 20px rgba(255, 0, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.2)',
  }
} as const;
```

---

## 🚀 性能优化

### 代码分割

```typescript
// src/App.tsx - 懒加载路由
import { lazy, Suspense } from 'react';

const Hero = lazy(() => import('@/sections/Hero'));
const Skills = lazy(() => import('@/sections/Skills'));
const Projects = lazy(() => import('@/sections/Projects'));
const Experience = lazy(() => import('@/sections/Experience'));
const Contact = lazy(() => import('@/sections/Contact'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Suspense>
  );
}
```

### 图片优化

```typescript
// src/components/ui/OptimizedImage.tsx
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = ''
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      {/* 占位符 */}
      <div className="absolute inset-0 bg-slate-800 animate-pulse" />

      {/* 图片 */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
```

### 动画优化

```typescript
// src/hooks/useReducedMotion.ts
import { useEffect, useState } from 'react';

export const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return reducedMotion;
};

// 使用示例
export const AnimatedComponent: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.5 }}
    >
      Content
    </motion.div>
  );
};
```

---

## 🧪 测试策略

### 单元测试

```typescript
// tests/unit/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant styles correctly', () => {
    const { container } = render(<Button variant="primary">Primary</Button>);
    expect(container.firstChild).toHaveClass('bg-purple-600');
  });
});
```

### E2E 测试

```typescript
// tests/e2e/homepage.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load and display hero section', async ({ page }) => {
    await page.goto('/');

    // 检查标题
    await expect(page.getByRole('heading', { name: '李宜其' })).toBeVisible();

    // 检查技能区域
    await page.getByRole('link', { name: '技术栈' }).click();
    await expect(page.getByText('JavaScript/TypeScript')).toBeVisible();

    // 检查项目区域
    await page.getByRole('link', { name: '项目展示' }).click();
    await expect(page.getByText('微云网页版')).toBeVisible();
  });

  test('should be responsive', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
    await page.goto('/');

    // 检查移动端菜单
    const menuButton = page.getByRole('button', { name: 'Menu' });
    await expect(menuButton).toBeVisible();
  });
});
```

### 视觉回归测试

```typescript
// tests/visual/hero.spec.ts
import { test, expect } from '@playwright/test';

test('hero section visual regression', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  const screenshot = await page.screenshot({ fullPage: true });
  expect(screenshot).toMatchSnapshot('hero.png', {
    threshold: 0.2,
    maxDiffPixels: 100
  });
});
```

---

## 📦 构建与部署

### Vite 配置

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: false,
    }),
  ],

  build: {
    target: 'es2018',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'recharts': ['recharts'],
          'lucide-react': ['lucide-react'],
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
});
```

### CI/CD (GitHub Actions)

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linting
        run: npm run lint

      - name: Run tests
        run: npm run test:ci

      - name: Build
        run: npm run build

      - name: Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          uploadArtifacts: true
          temporaryPublicStorage: true
          runs: 3

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: resume.eachlee.com
```

### 性能预算

```json
{
  "performance": {
    "budget": {
      "javascript": 200000,
      "css": 50000,
      "images": 500000,
      "total": 800000
    },
    "lighthouse": {
      "performance": 95,
      "accessibility": 100,
      "bestPractices": 100,
      "seo": 100
    }
  }
}
```

---

## 🎯 开发工作流

### 1. 环境搭建

```bash
# 克隆项目
git clone https://github.com/eachlee/resume.git
cd resume

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建
npm run build

# 预览
npm run preview

# 运行测试
npm run test

# 运行 E2E 测试
npm run test:e2e

# 代码检查
npm run lint

# 格式化
npm run format
```

### 2. 开发流程

```bash
# 1. 创建特性分支
git checkout -b feature/new-section

# 2. 开发
npm run dev

# 3. 测试
npm run test
npm run lint

# 4. 提交
git add .
git commit -m "feat: add new section"

# 5. 推送 & PR
git push origin feature/new-section
```

### 3. 数据更新流程

```typescript
// 1. 编辑数据文件
// src/data/profile.ts
// src/data/skills.ts
// src/data/projects.ts

// 2. 验证类型
npm run type-check

// 3. 本地预览
npm run dev

// 4. 构建检查
npm run build

// 5. 部署
git add .
git commit -m "chore: update resume data"
git push
```

---

## 📊 监控与分析

### 性能监控

```typescript
// src/utils/performance.ts
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name}: ${end - start}ms`);
};

export const trackWebVitals = () => {
  // Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log('Web Vital:', entry.name, entry);

      // 发送到分析服务
      if (window.gtag) {
        window.gtag('event', 'web_vital', {
          event_category: 'performance',
          event_label: entry.name,
          value: Math.round(entry.startTime),
        });
      }
    }
  });

  observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input-delay', 'layout-shift'] });
};
```

### 错误监控

```typescript
// src/utils/errorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);

    // 发送到错误监控服务
    if (window.Sentry) {
      window.Sentry.captureException(error, { extra: errorInfo });
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold text-red-500">Something went wrong</h2>
          <p className="text-slate-400 mt-2">{this.state.error?.message}</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-4 px-4 py-2 bg-purple-600 rounded"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

---

## 🎨 视觉设计指南

### 动效原则

1. **微交互**: 按钮 hover、点击反馈
2. **滚动动画**: 元素进入视口时的淡入效果
3. **状态变化**: 平滑过渡，避免突兀
4. **性能优先**: 使用 `transform` 和 `opacity`，避免重排

### 布局原则

1. **响应式**: 移动优先，断点：640px, 768px, 1024px, 1280px
2. **网格系统**: 12列网格，间距 1rem
3. **容器**: 最大宽度 1280px，居中
4. **间距**: 8px 基准，使用 4 的倍数

### 配色原则

1. **主色调**: 深色背景 + 紫色/蓝色强调
2. **对比度**: 文本与背景对比度 ≥ 4.5:1
3. **层次**: 使用透明度和阴影区分层级
4. **无障碍**: 支持高对比度模式

---

## 📝 任务清单

### Phase 1: 基础架构 (Week 1)

- [ ] 初始化 Vite + React + TypeScript 项目
- [ ] 配置 Tailwind CSS
- [ ] 设置 ESLint + Prettier
- [ ] 创建目录结构
- [ ] 定义 TypeScript 类型
- [ ] 配置主题系统

### Phase 2: 核心组件 (Week 2)

- [ ] 实现 UI 组件库 (Button, Card, etc.)
- [ ] 创建布局组件 (Header, Footer)
- [ ] 实现自定义 Hooks
- [ ] 创建工具函数

### Phase 3: 数据层 (Week 2)

- [ ] 定义数据模型
- [ ] 填充个人信息数据
- [ ] 填充技能数据
- [ ] 填充项目数据
- [ ] 填充工作经历数据

### Phase 4: 页面区块 (Week 3)

- [ ] Hero 区域
- [ ] 技能展示区
- [ ] 工作经历区
- [ ] 项目展示区
- [ ] 联系方式区

### Phase 5: 动画与交互 (Week 3)

- [ ] 滚动触发动画
- [ ] 悬停效果
- [ ] 页面过渡
- [ ] 响应式适配

### Phase 6: 测试与优化 (Week 4)

- [ ] 单元测试
- [ ] E2E 测试
- [ ] 性能优化
- [ ] Lighthouse 优化
- [ ] 代码分割

### Phase 7: 部署与监控 (Week 4)

- [ ] CI/CD 配置
- [ ] 部署到 Vercel/GitHub Pages
- [ ] 性能监控
- [ ] 错误监控
- [ ] SEO 优化

---

## 🔗 参考资源

### 设计灵感

- [Developer Portfolio](https://github.com/saadpasta/developerFolio)
- [Brittany Chiang](https://brittanychiang.com/)
- [Lee Robinson](https://leerob.io/)
- [Tailwind UI](https://tailwindui.com/)

### 技术文档

- [React 18 Docs](https://react.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Recharts Docs](https://recharts.org/)

### 性能工具

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

---

## 📄 License

MIT License

---

## 🎉 总结

这个现代化的 geek-resume 项目将：

1. **展示技术深度**: 通过代码、架构、性能优化展示你的专业能力
2. **提供极致体验**: 快速加载、流畅交互、完美响应式
3. **易于维护**: 现代化架构，类型安全，测试覆盖
4. **持续演进**: 可扩展的架构，支持未来功能添加

**开始你的现代化简历之旅吧！** 🚀

---

*文档版本: v1.0.0*
*最后更新: 2026-01-17*
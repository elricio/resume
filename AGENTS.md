# AGENTS.md

本文件包含在此简历网站仓库中工作的智能编码代理的指南和命令。

## 项目概述

这是一个现代化的 React + TypeScript + Vite 简历网站项目，采用三层架构：
- 静态 HTML/CSS/JS 传统版本（位于 root/data/, js/, css/）
- 新的 React 版本（位于 src/）包含组件、区块和现代工具链
- 使用 Tailwind CSS 进行样式设计，支持深色/浅色/霓虹主题

## 开发命令

### 基本命令
```bash
# 启动开发服务器 (localhost:3000)
npm run dev

# 构建生产版本
npm run build

# 代码检查 (ESLint with TypeScript)
npm run lint

# 预览生产构建
npm run preview
```

### TypeScript 编译
```bash
# 仅类型检查不构建
npx tsc --noEmit

# 使用 TypeScript 构建
npm run build  # 运行: tsc -b && vite build
```

### 单个测试运行
项目当前未配置测试框架。要运行单个测试：
1. 首先设置测试框架 (Jest/Vitest + Testing Library)
2. 使用: npm test -- --testNamePattern="测试名称"
3. 或: npm test -- path/to/test.test.ts

## 代码风格指南

### 导入语句
- 使用 vite.config.ts 中定义的路径别名进行绝对导入
- 顺序: React 导入 → 外部库 → 内部导入 → 类型导入
- 示例：
```typescript
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '@/sections/Hero';
import { useTheme } from '@/hooks/useTheme';
import type { ThemeType } from '@/types/theme';
```

### 路径别名（在 vite.config.ts 中配置）
- `@/` → `./src/`
- `@components/` → `./src/components/`
- `@sections/` → `./src/sections/`
- `@hooks/` → `./src/hooks/`
- `@utils/` → `./src/utils/`
- `@data/` → `./src/data/`
- `@styles/` → `./src/styles/`
- `@assets/` → `./src/assets/`

### 组件结构
- 使用 TypeScript 函数组件
- 组件名使用 PascalCase
- 主组件默认导出，工具函数命名导出
- 为复杂组件添加 JSDoc 注释
- 示例：
```typescript
/**
 * 带有动画效果的首页区块
 */
export const Hero: React.FC = () => {
  // 组件逻辑
  return <div>首页内容</div>;
};

export default Hero;
```

### TypeScript 约定
- 为 props 和返回类型使用显式类型注解
- 对象形状优先使用 interface 而非 type
- 适当使用泛型
- 函数组件使用 `React.FC`
- 示例：
```typescript
interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  onComplete?: () => void;
}

export const Project: React.FC<ProjectProps> = ({ title, description, technologies, onComplete }) => {
  // 实现
};
```

### 命名约定
- **组件**: PascalCase (HeroSection, SkillCard)
- **Hooks**: camelCase 带前缀 'use' (useTheme, useScrollProgress)
- **工具函数**: camelCase (formatDate, validateEmail)
- **常量**: UPPER_SNAKE_CASE (API_ENDPOINT, MAX_ITEMS)
- **文件**: 文件夹使用 kebab-case，组件文件使用 PascalCase (hero-section/HeroSection.tsx)

### 错误处理
- 异步操作使用 try-catch 块
- 提供有意义的错误消息
- React 组件使用适当的错误边界
- 示例：
```typescript
const loadProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch('/api/projects');
    if (!response.ok) {
      throw new Error(`加载项目失败: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('加载项目时出错:', error);
    throw error;
  }
};
```

### 样式指南
- 使用 Tailwind CSS 类
- 优先使用工具类而非自定义 CSS
- 使用响应式前缀 (sm:, md:, lg:, xl:)
- 利用 Tailwind 的主题感知调色板
- 示例：
```typescript
<div className="max-w-4xl mx-auto p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
    内容标题
  </h2>
</div>
```

### 状态管理
- 本地状态使用 React hooks
- 简单状态使用 useState，复杂状态使用 useReducer
- 共享逻辑使用自定义 hooks
- 示例：
```typescript
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

const handleSubmit = async () => {
  setIsLoading(true);
  setError(null);
  try {
    await submitData();
  } catch (err) {
    setError(err instanceof Error ? err.message : '未知错误');
  } finally {
    setIsLoading(false);
  }
};
```

## 测试

项目当前未配置正式测试框架。要添加测试：
1. 安装测试框架 (Jest/Vitest + Testing Library)
2. 在 package.json 中添加测试脚本
3. 在组件旁创建 __tests__ 目录

## 构建流程

- **目标**: ES2018+ 浏览器
- **代码分割**: React vendor, framer-motion, recharts, lucide-react
- **CSS**: 代码分割和优化
- **输出**: dist/ 目录（git 忽略）
- **部署**: 配置为 GitHub Pages，基础路径 /resume/

## 传统代码说明

根目录包含传统静态文件：
- `data/` - 简历数据的 JavaScript 文件 (theme.js, userInfo.js, skills.js 等)
- `js/build.js` - 压缩的传统 JavaScript
- `css/` - 传统样式表

处理新的 React 版本时，专注于 `src/` 目录，除非需要迁移，否则忽略传统文件。

## 性能考虑

- 对昂贵组件使用 React.memo
- 实现适当的加载状态
- 使用下一代格式优化图片
- 利用 Vite 的构建优化
- 高效使用 framer-motion 的布局动画

## 可访问性

- 使用语义化 HTML5 元素
- 提供适当的 ARIA 标签
- 确保键盘导航
- 使用屏幕阅读器测试
- 使用正确的标题层次结构
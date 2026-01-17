/**
 * 技能数据 - 按类别组织的技能展示
 */
import type { SkillCategory, SkillRadarData } from '@/utils/types';

export const skillCategories: SkillCategory[] = [
  {
    category: '前端核心',
    skills: [
      {
        name: 'JavaScript/TypeScript',
        level: 95,
        description: [
          '深入理解 V8 引擎原理和优化策略',
          '精通异步编程模型：Promise、Async/Await、Event Loop',
          '掌握 ES2023+ 新特性：私有字段、装饰器、Stage 3 提案',
          '熟练 TypeScript 高级类型、泛型编程、装饰器元编程'
        ],
        icon: 'javascript',
        color: '#f7df1e',
        tags: ['ES6+', 'TypeScript 5.x', 'Node.js', 'Deno']
      },
      {
        name: 'React 生态',
        level: 92,
        description: [
          '精通 React 18 Hooks API、Concurrent Mode、Suspense',
          '深入理解 Fiber 架构、Reconciliation 算法、时间切片',
          '熟练使用 Next.js 14、Remix 等全栈框架',
          '掌握状态管理：Redux Toolkit、Zustand、Jotai、React Query'
        ],
        icon: 'react',
        color: '#61dafb',
        tags: ['React 18', 'Next.js 14', 'Redux Toolkit', 'TanStack Query']
      },
      {
        name: 'CSS/Tailwind',
        level: 88,
        description: [
          '精通 CSS3 动画、过渡、变换、Grid、Flexbox',
          '熟练 Tailwind CSS 原子化样式系统',
          '掌握 CSS-in-JS 方案：Styled-components、Emotion',
          '熟悉 CSS 架构：BEM、CSS Modules、Utility-First'
        ],
        icon: 'css',
        color: '#264de4',
        tags: ['Tailwind CSS', 'CSS Modules', 'SCSS', 'PostCSS']
      }
    ]
  },
  {
    category: '工程化',
    skills: [
      {
        name: '构建工具',
        level: 90,
        description: [
          '精通 Vite 配置优化和插件开发',
          '深入理解 Webpack 打包原理和性能调优',
          '掌握 Rollup、esbuild、Turbopack 构建原理',
          '熟悉微前端架构：Module Federation、Qiankun'
        ],
        icon: 'tool',
        color: '#8b5cf6',
        tags: ['Vite 5', 'Webpack 5', 'esbuild', 'Turborepo']
      },
      {
        name: '代码质量',
        level: 85,
        description: [
          '配置 ESLint + Prettier + Husky 工作流',
          '掌握单元测试：Vitest、Jest、React Testing Library',
          '熟悉 E2E 测试：Playwright、Cypress',
          '实施 TDD/BDD 开发模式'
        ],
        icon: 'check-circle',
        color: '#10b981',
        tags: ['ESLint', 'Prettier', 'Vitest', 'Playwright']
      },
      {
        name: 'CI/CD',
        level: 80,
        description: [
          '配置 GitHub Actions 自动化工作流',
          '掌握 Docker 容器化部署',
          '熟悉 Vercel、Netlify、GitHub Pages 部署',
          '实施性能监控和错误追踪'
        ],
        icon: 'rocket',
        color: '#0ea5e9',
        tags: ['GitHub Actions', 'Docker', 'Vercel', 'Sentry']
      }
    ]
  },
  {
    category: '性能优化',
    skills: [
      {
        name: 'Web 性能',
        level: 88,
        description: [
          '掌握 Core Web Vitals 三大指标优化',
          '熟练代码分割、懒加载、预加载策略',
          '精通图片优化：WebP、AVIF、响应式图片',
          '熟悉 Service Worker 和 PWA 技术'
        ],
        icon: 'zap',
        color: '#f59e0b',
        tags: ['LCP', 'FID', 'CLS', 'PWA']
      },
      {
        name: '前端监控',
        level: 82,
        description: [
          '部署 Sentry 错误监控系统',
          '配置性能追踪：Web Vitals、Performance API',
          '实现用户行为分析和埋点',
          '建立灰度发布和 A/B 测试机制'
        ],
        icon: 'monitor',
        color: '#6366f1',
        tags: ['Sentry', 'Google Analytics', '自定义埋点']
      }
    ]
  },
  {
    category: '技术广度',
    skills: [
      {
        name: 'Node.js',
        level: 75,
        description: [
          '开发 Express/Koa 中间件和 RESTful API',
          '掌握 NestJS 框架和依赖注入',
          '熟悉数据库：MySQL、MongoDB、Redis',
          '了解 GraphQL 和微服务架构'
        ],
        icon: 'nodejs',
        color: '#339933',
        tags: ['Express', 'NestJS', 'MongoDB', 'Redis']
      },
      {
        name: '后端知识',
        level: 70,
        description: [
          '理解 HTTP/HTTPS、TCP/IP 网络协议',
          '掌握 Nginx 配置和负载均衡',
          '熟悉 Linux 基础命令和 Shell 脚本',
          '了解容器编排：Kubernetes、Docker Compose'
        ],
        icon: 'server',
        color: '#ef4444',
        tags: ['HTTP', 'Nginx', 'Linux', 'Docker']
      },
      {
        name: '工具链',
        level: 85,
        description: [
          '熟练 Git 版本控制和工作流管理',
          '掌握 Monorepo 管理：pnpm workspace、Turborepo',
          '熟悉常用 IDE 配置和插件开发',
          '自动化脚本和调试工具使用'
        ],
        icon: 'wrench',
        color: '#64748b',
        tags: ['Git', 'pnpm', 'VSCode', 'Docker']
      }
    ]
  }
];

export const skillRadarData: SkillRadarData[] = [
  { subject: 'JavaScript', value: 95, fullMark: 100 },
  { subject: 'React', value: 92, fullMark: 100 },
  { subject: 'TypeScript', value: 88, fullMark: 100 },
  { subject: '工程化', value: 90, fullMark: 100 },
  { subject: '性能优化', value: 88, fullMark: 100 },
  { subject: 'Node.js', value: 75, fullMark: 100 },
];

export default {
  skillCategories,
  skillRadarData,
};

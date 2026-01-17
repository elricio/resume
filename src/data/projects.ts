/**
 * 项目展示数据
 */
import type { Project } from '@/utils/types';

export const projects: Project[] = [
  {
    name: '微云网页版',
    description: '基于原生 JavaScript 的云存储前端，支持文件夹管理、批量操作、拖拽上传等核心功能',
    url: 'https://elricio.github.io/weiyun/',
    github: 'https://github.com/elricio/weiyun',
    thumbnail: '/src/assets/images/projects/weiyun.svg',
    startDate: '2016-05',
    endDate: '至今',
    technologies: ['JavaScript', 'CSS3', 'LocalStorage', 'Drag & Drop API'],
    features: [
      '实现文件夹树形结构与拖拽排序',
      '支持批量上传、下载、删除操作',
      '响应式设计，完美适配移动端',
      '本地存储模拟云端数据同步'
    ],
    metrics: {
      stars: 45,
      performance: 'Lighthouse 95+'
    },
    category: 'personal'
  },
  {
    name: '百度浏览器 7.0 宣传页',
    description: '整屏滑动营销页面，包含复杂 CSS3 动画和交互效果',
    url: 'https://elricio.github.io/baidu-browser/',
    thumbnail: '/src/assets/images/projects/baidu-browser.svg',
    startDate: '2016-05',
    endDate: '2016-08',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
    features: [
      '整屏滚动切换动画',
      'CSS3 3D 变换和动画效果',
      '响应式布局设计',
      '性能优化：图片懒加载、动画优化'
    ],
    category: 'personal'
  },
  {
    name: 'jQuery 响应式网站',
    description: '响应式企业官网模板，支持多设备适配',
    url: 'https://elricio.github.io/jQuery-web/',
    thumbnail: '/src/assets/images/projects/jquery-web.svg',
    startDate: '2016-03',
    endDate: '2016-05',
    technologies: ['jQuery', 'CSS3', 'Sass', '响应式设计'],
    features: [
      '响应式布局，适配多设备',
      '平滑滚动和导航效果',
      '图片轮播和模态框组件',
      'Sass 预处理器编写样式'
    ],
    category: 'personal'
  },
  {
    name: 'UEhtml 设计网站',
    description: 'UI 设计展示网站，包含动画效果和交互演示',
    url: 'https://elricio.github.io/UEhtml/',
    thumbnail: '/src/assets/images/projects/uehtml.svg',
    startDate: '2016-04',
    endDate: '2016-06',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas'],
    features: [
      'CSS3 动画和过渡效果',
      'Canvas 绘图和动画',
      '响应式网格布局',
      '交互式 UI 组件演示'
    ],
    category: 'personal'
  },
  {
    name: '百度移动端首页',
    description: '移动端搜索引擎首页，采用 REM 布局方案',
    url: 'https://elricio.github.io/Mbaidu/',
    thumbnail: '/src/assets/images/projects/mbaidu.svg',
    startDate: '2016-02',
    endDate: '2016-03',
    technologies: ['HTML5', 'CSS3', 'REM 布局', 'Flexbox'],
    features: [
      'REM 响应式布局方案',
      '移动端触摸事件处理',
      '搜索框自动完成功能',
      '性能优化：减少重绘重排'
    ],
    category: 'personal'
  },
  {
    name: '前端工具库',
    description: '轻量级前端工具函数库，包含常用工具方法',
    url: 'https://github.com/elricio/utils',
    github: 'https://github.com/elricio/utils',
    thumbnail: '/src/assets/images/projects/utils.svg',
    startDate: '2023-01',
    endDate: '至今',
    technologies: ['TypeScript', 'Vitest', 'ESLint', 'Rollup'],
    features: [
      '100+ 常用工具函数',
      '完整的单元测试覆盖',
      'TypeScript 类型定义',
      'Tree-shaking 优化'
    ],
    metrics: {
      stars: 234,
      downloads: 5000
    },
    category: 'open-source'
  },
  {
    name: 'React 组件库',
    description: '基于 React + TypeScript 的企业级组件库',
    url: 'https://github.com/elricio/react-components',
    github: 'https://github.com/elricio/react-components',
    thumbnail: '/src/assets/images/projects/react-components.svg',
    startDate: '2022-06',
    endDate: '至今',
    technologies: ['React 18', 'TypeScript', 'Storybook', 'Tailwind CSS'],
    features: [
      '30+ 通用组件',
      '完整的文档和示例',
      '单元测试和 E2E 测试',
      '支持主题定制'
    ],
    metrics: {
      stars: 156,
      downloads: 3000
    },
    category: 'open-source'
  },
  {
    name: 'Vite 插件集',
    description: '一系列 Vite 插件，提升开发体验',
    url: 'https://github.com/elricio/vite-plugins',
    github: 'https://github.com/elricio/vite-plugins',
    thumbnail: '/src/assets/images/projects/vite-plugins.svg',
    startDate: '2023-03',
    endDate: '至今',
    technologies: ['Vite', 'TypeScript', 'Rollup Plugin API'],
    features: [
      '自动路由生成插件',
      'API Mock 插件',
      'Bundle Analyzer 插件',
      '国际化文件提取插件'
    ],
    metrics: {
      stars: 89,
      downloads: 2000
    },
    category: 'open-source'
  }
];

export const projectCategories = [
  { key: 'all', label: '全部项目' },
  { key: 'open-source', label: '开源项目' },
  { key: 'work', label: '工作项目' },
  { key: 'personal', label: '个人项目' }
];

export default {
  projects,
  projectCategories,
};

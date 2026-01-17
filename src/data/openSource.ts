/**
 * 开源贡献数据
 */
import type { OpenSource } from '@/utils/types';

export const openSource: OpenSource[] = [
  {
    repo: 'elricio/utils',
    description: '轻量级前端工具函数库，包含 100+ 常用函数',
    stars: 234,
    forks: 45,
    language: 'TypeScript',
    topics: ['typescript', 'utilities', 'frontend', 'javascript'],
    contributions: 42,
    url: 'https://github.com/elricio/utils'
  },
  {
    repo: 'elricio/react-components',
    description: '基于 React + TypeScript 的企业级组件库',
    stars: 156,
    forks: 32,
    language: 'TypeScript',
    topics: ['react', 'typescript', 'components', 'ui'],
    contributions: 67,
    url: 'https://github.com/elricio/react-components'
  },
  {
    repo: 'elricio/vite-plugins',
    description: '一系列 Vite 插件，提升开发体验',
    stars: 89,
    forks: 18,
    language: 'TypeScript',
    topics: ['vite', 'plugins', 'build-tool'],
    contributions: 28,
    url: 'https://github.com/elricio/vite-plugins'
  },
  {
    repo: 'elricio/weiyun',
    description: '基于原生 JavaScript 的云存储前端',
    stars: 45,
    forks: 12,
    language: 'JavaScript',
    topics: ['javascript', 'storage', 'frontend'],
    contributions: 15,
    url: 'https://github.com/elricio/weiyun'
  }
];

export const totalContributions = openSource.reduce(
  (sum, repo) => sum + repo.contributions,
  0
);

export const totalStars = openSource.reduce(
  (sum, repo) => sum + repo.stars,
  0
);

export default {
  openSource,
  totalContributions,
  totalStars,
};

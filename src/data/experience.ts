/**
 * 工作经历数据
 */
import type { Experience } from '@/utils/types';

export const experiences: Experience[] = [
  {
    company: '四翼鸟科技',
    logo: '/resume/src/assets/images/companies/siyiniao.png',
    position: '高级前端工程师',
    location: '北京',
    startDate: '2017-03',
    endDate: '至今',
    description: '负责广告投放系统前端架构设计与开发，主导性能优化和工程化建设',
    achievements: [
      '设计并实现高性能广告脚本引擎，支持亿级 PV 广告投放，首屏加载时间 < 100ms',
      '重构前端架构，从 jQuery 迁移至 React + TypeScript，代码可维护性提升 80%',
      '建立前端监控体系，集成 Sentry 错误追踪和性能监控，错误率降低 85%',
      '优化 Webpack 构建配置，构建时间从 3min 降至 45s，提升开发效率',
      '主导团队技术分享，组织 Code Review，提升团队整体技术水平'
    ],
    technologies: ['JavaScript', 'TypeScript', 'React', 'Webpack', 'Puppeteer', 'PhantomJS', 'Sentry'],
    projects: [
      {
        name: '广告投放系统',
        description: '支持亿级 PV 的广告投放平台，包含脚本引擎、数据统计、实时监控',
        tech: ['React 18', 'TypeScript', 'Vite', 'Web Workers', 'WebSocket']
      },
      {
        name: '数据可视化平台',
        description: '广告投放数据实时展示和分析平台，支持多维度数据钻取',
        tech: ['React', 'Recharts', 'D3.js', 'WebSocket']
      }
    ]
  },
  {
    company: '北京易车网',
    logo: '/resume/src/assets/images/companies/yiche.png',
    position: '前端工程师',
    location: '北京',
    startDate: '2015-07',
    endDate: '2017-02',
    description: '负责汽车电商平台前端开发，参与核心业务模块开发',
    achievements: [
      '开发汽车报价系统，支持多品牌、多车型实时报价',
      '优化移动端 H5 页面性能，首屏加载时间减少 50%',
      '实现响应式设计，适配 PC、平板、移动端',
      '参与组件库建设，沉淀可复用的业务组件'
    ],
    technologies: ['JavaScript', 'jQuery', 'CSS3', 'HTML5', 'Gulp'],
    projects: [
      {
        name: '汽车报价系统',
        description: '多品牌汽车实时报价和对比系统',
        tech: ['jQuery', 'CSS3', '响应式设计']
      }
    ]
  },
  {
    company: '北京博雅立方',
    logo: '/resume/src/assets/images/companies/boyaa.png',
    position: '前端开发工程师',
    location: '北京',
    startDate: '2013-06',
    endDate: '2015-06',
    description: '负责 SEM 营销平台前端开发，参与数据可视化项目',
    achievements: [
      '开发 SEM 投放管理平台，支持批量操作和数据导出',
      '实现数据图表展示，使用 Highcharts 展示投放效果',
      '优化表单验证和交互体验，提升用户操作效率'
    ],
    technologies: ['JavaScript', 'jQuery', 'Highcharts', 'Bootstrap'],
    projects: [
      {
        name: 'SEM 投放平台',
        description: '搜索引擎营销投放管理平台',
        tech: ['jQuery', 'Bootstrap', 'Highcharts']
      }
    ]
  }
];

export default experiences;

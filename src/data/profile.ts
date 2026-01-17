/**
 * 个人信息数据
 */
import type { Profile } from '@/utils/types';

export const profile: Profile = {
  name: 'Elric',
  title: '高级前端工程师',
  avatar: '/resume/src/assets/images/avatar.svg',
  location: '北京',
  email: 'elrico@163.com',
  phone: '18810609069',
  website: 'https://elricio.github.io',
  github: 'https://github.com/elricio',
  linkedin: '',
  summary: `拥有多年前端开发经验，专注于高性能 Web 应用开发。精通 JavaScript、TypeScript、React 等主流技术栈，具备扎实的计算机基础和丰富的工程化实践经验。

在广告投放系统领域有深入研究，曾主导开发支持亿级 PV 的广告脚本引擎，实现毫秒级加载性能。擅长前端性能优化、架构设计和团队技术建设。

热爱开源，持续关注前端技术发展，乐于分享技术经验。追求极致的用户体验和代码质量，相信技术可以改变世界。`,
  tagline: 'Code is poetry, performance is art',
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/elricio',
      icon: 'github'
    },
    {
      platform: 'Email',
      url: 'mailto:elrico@163.com',
      icon: 'mail'
    },
    {
      platform: 'Website',
      url: 'https://elricio.github.io',
      icon: 'globe'
    }
  ]
};

export const contactInfo = {
  email: profile.email,
  phone: profile.phone,
  location: profile.location,
  website: profile.website,
  github: profile.github,
};

export default profile;

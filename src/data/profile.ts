/**
 * 个人信息数据
 */
import type { Profile } from '@/utils/types'

export const profile: Profile = {
  name: 'Elric',
  title: '高级前端工程师',
  avatar: 'https://avatars.githubusercontent.com/u/22219313',
  location: '北京',
  email: 'hi@elricli.com',
  phone: '18888888888',
  website: 'https://www.elricli.com',
  github: 'https://github.com/elricio',
  linkedin: '',
  summary: `拥有多年前端开发经验，专注于高性能 Web 应用开发。精通 JavaScript、TypeScript、React 等主流技术栈，具备扎实的计算机基础和丰富的工程化实践经验。

在广告投放系统领域有深入研究，曾主导开发支持亿级 PV 的广告脚本引擎，实现毫秒级加载性能。擅长前端性能优化、架构设计和团队技术建设。

热爱开源，持续关注前端技术发展，乐于分享技术经验。追求极致的用户体验和代码质量，相信技术可以改变世界。`,
  tagline: '如果用JS来表示我们的一生，那将会是一个超级无限长的嵌套。',
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/elricio',
      icon: 'github'
    },
    {
      platform: 'Email',
      url: 'mailto:hi@elricli.com',
      icon: 'mail'
    },
    {
      platform: 'Website',
      url: 'https://www.elricli.com',
      icon: 'globe'
    }
  ]
}

export const contactInfo = {
  email: profile.email,
  phone: profile.phone,
  location: profile.location,
  website: profile.website,
  github: profile.github
}

export default profile

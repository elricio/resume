/**
 * Contact 区域 - 联系方式
 */
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Mail, MapPin, Phone, Globe, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useIntersection } from '@/hooks/useIntersection';

export const Contact: React.FC = () => {
  const { ref, isVisible } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  });

  const contactItems = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone}`,
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: profile.location,
    },
    {
      icon: <Globe size={20} />,
      label: 'Website',
      value: profile.website,
      href: profile.website,
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'elricio',
      href: profile.github,
    },
  ];

  const socialLinks = [
    {
      platform: 'GitHub',
      url: profile.github,
      icon: <Github size={24} />,
    },
    {
      platform: 'Email',
      url: `mailto:${profile.email}`,
      icon: <Mail size={24} />,
    },
    {
      platform: 'Website',
      url: profile.website,
      icon: <Globe size={24} />,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            联系我
          </h2>
          <p className="text-slate-400 text-lg">期待与您合作</p>
        </motion.div>

        <div ref={ref} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* 联系信息 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <Send size={24} className="text-purple-400" />
              联系方式
            </h3>
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                >
                  <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-500">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white hover:text-purple-400 transition-colors font-medium"
                        target={
                          item.label === 'Website' || item.label === 'GitHub'
                            ? '_blank'
                            : undefined
                        }
                        rel={
                          item.label === 'Website' || item.label === 'GitHub'
                            ? 'noopener noreferrer'
                            : undefined
                        }
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white font-medium">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 简介 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-900/30 via-slate-900/50 to-blue-900/30 backdrop-blur p-8 rounded-2xl border border-purple-500/30 relative overflow-hidden"
          >
            {/* 装饰光效 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />

            <h3 className="text-2xl font-bold mb-4 text-white relative z-10">关于我</h3>
            <p className="text-slate-300 mb-6 leading-relaxed relative z-10 whitespace-pre-line">
              {profile.summary}
            </p>

            <div className="space-y-3 relative z-10">
              <div>
                <div className="text-sm text-slate-500 mb-2">当前状态</div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 font-medium">开放机会</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/50">
                <a href={`mailto:${profile.email}`}>
                  <Button variant="primary" size="lg" className="w-full">
                    发送邮件
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 社交链接 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center gap-4 flex-wrap"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.1, y: -3 }}
              className="p-4 bg-slate-800 rounded-full border border-slate-700 hover:border-purple-500 hover:bg-purple-600/20 transition-all duration-300 group"
              aria-label={link.platform}
            >
              <div className="text-slate-400 group-hover:text-purple-400 transition-colors">
                {link.icon}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* 页脚信息 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center text-slate-500 text-sm font-mono"
        >
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="mt-2 text-xs text-slate-600">
            Built with React + TypeScript + Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

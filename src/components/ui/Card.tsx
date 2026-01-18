/**
 * Card 组件 - 增强版
 * 通用卡片容器，支持玻璃拟态和高级交互效果
 */
import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef, useState } from 'react';

interface CardProps {
  className?: string;
  hoverable?: boolean;
  variant?: 'glass' | 'solid' | 'neon' | 'gradient';
  interactive?: boolean;
  glow?: boolean;
}

type NativeDivProps = HTMLAttributes<HTMLDivElement>;

interface Props extends CardProps, NativeDivProps {
  children: ReactNode;
}

const Card = forwardRef<HTMLDivElement, Props>(
  ({ 
    children, 
    className = '', 
    hoverable = false, 
    variant = 'glass',
    interactive = false,
    glow = false,
    ...props 
  }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!interactive) return;
      
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      
      setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setMousePosition({ x: 0, y: 0 });
    };

    const variants = {
      glass: '',
      solid: 'bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 shadow-lg',
      neon: 'bg-black/60 backdrop-blur-lg border border-purple-500/30',
      gradient: 'bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-blue-900/20 backdrop-blur-lg border border-purple-500/20',
    };

    const baseClasses = variant === 'glass' ? '' : variants[variant];

    const hoverClasses = hoverable
      ? `
        transition-all duration-300 ease-out
        hover:scale-105
        hover:-translate-y-1
        hover:shadow-glow-lg
      `
      : '';

    const interactiveClasses = interactive
      ? `
        cursor-pointer
        transform-gpu
        preserve-3d
      `
      : '';

    const glowClasses = glow
      ? `
        relative
        before:absolute
        before:inset-0
        before:rounded-xl
        before:bg-gradient-to-r
        before:from-purple-500/20
        before:to-pink-500/20
        before:blur-xl
        before:-z-10
      `
      : '';

    const classes = [
      baseClasses,
      hoverClasses,
      interactiveClasses,
      glowClasses,
      'rounded-xl overflow-hidden',
      variant === 'glass' ? 'glass' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const cardStyle = {
      ...(variant === 'glass' ? {
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(12px)',
        borderColor: 'var(--glass-border)',
      } : {}),
      ...(interactive
        ? {
            transform: isHovered 
              ? `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale(1.05)`
              : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
            transition: 'transform 0.2s ease-out',
          }
        : {}),
    };

    return (
      <div
        ref={ref}
        className={classes}
        style={cardStyle}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* 内部光晕效果 */}
        {variant === 'neon' && isHovered && (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-50 pointer-events-none" />
        )}
        
        {/* 边框光效 */}
        {hoverable && isHovered && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-30 blur-sm -z-10 animate-pulse" />
        )}
        
        {/* 顶部高光 */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
        
        {/* 内容区域 */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* 底部阴影 */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent opacity-30" />
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };

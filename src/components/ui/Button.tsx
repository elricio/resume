/**
 * Button 组件 - 增强版
 * 支持多种变体、尺寸和高级交互效果
 */
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useState } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost' | 'neon' | 'glass' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  magnetic?: boolean;
}

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps, NativeButtonProps {
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className = '',
      disabled = false,
      loading = false,
      magnetic = false,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic) return;
      
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      setMousePosition({ x: x * 0.2, y: y * 0.2 });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setMousePosition({ x: 0, y: 0 });
    };

    const baseClasses =
      'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden group';

    const variants = {
      primary:
        'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:shadow-xl',
      outline:
        'border-2 border-purple-500/60 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-300 hover:shadow-lg hover:shadow-purple-500/20',
      ghost:
        'text-slate-300 hover:bg-slate-700/50 hover:text-white',
      neon:
        'bg-black border border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-400 hover:text-green-300',
      glass:
        'text-white border hover:scale-105 transition-all duration-300',
      gradient:
        'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-500',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-7 py-3.5 text-lg',
      xl: 'px-9 py-4 text-xl',
    };

    const disabledClasses = disabled || loading
      ? 'opacity-50 cursor-not-allowed grayscale'
      : 'cursor-pointer active:scale-95';

    const magneticClasses = magnetic ? 'magnetic' : '';



    const classes = [
      baseClasses,
      variants[variant],
      sizes[size],
      disabledClasses,
      magneticClasses,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const buttonStyle = magnetic
      ? {
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }
      : {};

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        style={{
          ...buttonStyle,
          ...(variant === 'glass' ? {
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(12px)',
            borderColor: 'var(--glass-border)',
          } : {}),
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* 背景光晕效果 */}
        {variant === 'gradient' && (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        )}
        
        {/* 霓虹光效 */}
        {variant === 'neon' && isHovered && (
          <div className="absolute inset-0 bg-green-500/20 blur-xl -z-10 animate-pulse" />
        )}
        
        {/* 玻璃反光效果 */}
        {variant === 'glass' && isHovered && (
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 -z-10" />
        )}
        
        {/* 加载状态 */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm -z-10">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        
        {/* 波纹效果 */}
        <span className="absolute inset-0 rounded-lg overflow-hidden">
          <span className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
        </span>
        
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };

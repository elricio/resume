/**
 * Badge 组件
 * 标签/徽章组件
 */
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'primary', size = 'md', className = '', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center font-medium rounded-full';

    const variants = {
      primary: 'bg-purple-600/20 text-purple-300 border border-purple-500/30',
      secondary: 'bg-slate-700 text-slate-300',
      outline: 'border border-slate-600 text-slate-400',
      ghost: 'text-slate-400 hover:bg-slate-800/50',
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-1.5 text-base',
    };

    const classes = [
      baseClasses,
      variants[variant],
      sizes[size],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };

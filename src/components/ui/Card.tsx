/**
 * Card 组件
 * 通用卡片容器
 */
import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

interface CardProps {
  className?: string;
  hoverable?: boolean;
}

type NativeDivProps = HTMLAttributes<HTMLDivElement>;

interface Props extends CardProps, NativeDivProps {
  children: ReactNode;
}

const Card = forwardRef<HTMLDivElement, Props>(
  ({ children, className = '', hoverable = false, ...props }, ref) => {
    const baseClasses =
      'bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl overflow-hidden';

    const hoverClasses = hoverable
      ? 'hover:border-purple-500/50 hover:bg-slate-800/70 transition-all duration-300'
      : '';

    const classes = [baseClasses, hoverClasses, className]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };

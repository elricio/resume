/**
 * Button 组件
 * 支持多种变体和尺寸
 */
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
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
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
      primary:
        'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50',
      outline:
        'border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400',
      ghost:
        'text-slate-300 hover:bg-slate-700/50 hover:text-white',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-7 py-3.5 text-lg',
    };

    const disabledClasses = disabled
      ? 'opacity-50 cursor-not-allowed grayscale'
      : 'cursor-pointer active:scale-95';

    const classes = [
      baseClasses,
      variants[variant],
      sizes[size],
      disabledClasses,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };

/**
 * Section 组件
 * 页面区块容器
 */
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import type { SectionProps } from '@/utils/types';

type NativeSectionProps = HTMLAttributes<HTMLElement>;

interface Props extends SectionProps, NativeSectionProps {}

const Section = forwardRef<HTMLElement, Props>(
  ({ id, children, className = '', ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={`py-20 ${className}`}
        {...props}
      >
        <div className="container mx-auto px-4">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';

export { Section };

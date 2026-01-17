/**
 * 滚动交互动画 Hook
 * 监听元素是否进入视口，用于触发滚动动画
 */
import { useRef, useEffect, useState } from 'react';

interface UseIntersectionOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean; // 是否只触发一次
}

interface UseIntersectionResult<T extends HTMLElement> {
  ref: React.RefObject<T | null>;
  isVisible: boolean;
}

export const useIntersection = <T extends HTMLElement>(
  options: UseIntersectionOptions = {}
): UseIntersectionResult<T> => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggered = useRef(false);

  const { root, rootMargin, threshold = 0.1, once = true } = options;

  useEffect(() => {
    if (!ref.current) return;

    // 如果只触发一次且已经触发过，则不再监听
    if (once && hasTriggered.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          hasTriggered.current = true;

          // 如果只触发一次，取消观察
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          // 如果不是只触发一次，离开视口时重置
          setIsVisible(false);
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [root, rootMargin, threshold, once]);

  return { ref, isVisible };
};

// 批量监听多个元素
export const useIntersectionMultiple = <T extends HTMLElement>(
  count: number,
  options: UseIntersectionOptions = {}
) => {
  // Create refs manually to avoid type issues
  const refs: Array<React.RefObject<T>> = [];

  for (let i = 0; i < count; i++) {
    refs.push({ current: null } as unknown as React.RefObject<T>);
  }

  const visibility = refs.map(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const result = useIntersection<T>({
      ...options,
      // 确保每个元素都有自己的 CURi/_THRESHOLD
    });
    return result;
  });

  return { refs, visibility };
};

export default useIntersection;

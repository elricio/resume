/**
 * 滚动进度 Hook
 * 监听页面滚动进度和方向
 */
import { useState, useEffect, useRef } from 'react';

interface UseScrollProgressResult {
  scrollProgress: number; // 0-100
  direction: 'up' | 'down';
  isScrolling: boolean;
}

export const useScrollProgress = (): UseScrollProgressResult => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const [isScrolling, setIsScrolling] = useState(false);

  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 计算滚动进度
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollProgress(progress);

      // 判断滚动方向
      const scrollDirection = scrollTop > lastScrollY.current ? 'down' : 'up';
      setDirection(scrollDirection);
      lastScrollY.current = scrollTop;

      // 滚动状态
      setIsScrolling(true);

      // 清除之前的定时器
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // 滚动停止后 150ms 标记为停止
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return {
    scrollProgress,
    direction,
    isScrolling,
  };
};

// 滚动到顶部
export const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({ top: 0, behavior });
};

// 滚动到指定元素
export const scrollToElement = (
  selector: string,
  behavior: ScrollBehavior = 'smooth'
) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior });
  }
};

// 滚动到指定位置
export const scrollToPosition = (
  position: number,
  behavior: ScrollBehavior = 'smooth'
) => {
  window.scrollTo({ top: position, behavior });
};

export default useScrollProgress;

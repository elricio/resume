/**
 * 减少动画 Hook
 * 检测用户是否偏好减少动画，用于无障碍支持
 */
import { useState, useEffect } from 'react';

export const useReducedMotion = (): boolean => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // 检查系统是否启用了减少动画
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setReducedMotion(e.matches);
    };

    // 初始检查
    handleChange(mediaQuery);

    // 监听变化
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return reducedMotion;
};

// 动画配置 Hook - 根据用户偏好返回合适的动画配置
export const useMotionConfig = () => {
  const reducedMotion = useReducedMotion();

  const getAnimationConfig = (config: any) => {
    if (reducedMotion) {
      // 减少动画模式下，使用简化的动画
      return {
        ...config,
        transition: { duration: 0 },
      };
    }
    return config;
  };

  const getTransitionDuration = (defaultDuration: number = 0.5) => {
    return reducedMotion ? 0 : defaultDuration;
  };

  return {
    reducedMotion,
    getAnimationConfig,
    getTransitionDuration,
  };
};

export default useReducedMotion;

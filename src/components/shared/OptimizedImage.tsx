/**
 * OptimizedImage 组件
 * 优化的图片组件，支持懒加载和占位符
 */
import { useState, useEffect } from 'react';
import type { OptimizedImageProps } from '@/utils/types';

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // 重置状态当 src 变化时
    setLoaded(false);
    setError(false);
  }, [src]);

  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  if (error) {
    return (
      <div
        className={`bg-slate-800 flex items-center justify-center ${className}`}
        style={{ aspectRatio: `${width}/${height}` }}
      >
        <div className="text-slate-500 text-sm text-center p-4">
          <div className="text-2xl mb-2">🖼️</div>
          <div>图片加载失败</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      {/* 占位符 */}
      {!loaded && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse" />
      )}

      {/* 图片 */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={handleError}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default OptimizedImage;

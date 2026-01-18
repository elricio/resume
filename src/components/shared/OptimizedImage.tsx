/** OptimizedImage 组件
 * 优化的图片组件，支持懒加载、占位符和 SVG 支持
 */
import { useState, useEffect, useMemo } from 'react';
import type { OptimizedImageProps } from '@/utils/types';

// 生成 SVG 占位符
const generatePlaceholder = (width: number, height: number, text: string = 'IMG') => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1e293b;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)"/>
      <text x="${width/2}" y="${height/2}" text-anchor="middle" dominant-baseline="middle" fill="#64748b" font-family="system-ui, sans-serif" font-size="${Math.min(width, height) / 8}" font-weight="bold">${text}</text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
};

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  fallbackSrc,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  // 生成占位符
  const placeholderSrc = useMemo(() => {
    return generatePlaceholder(width || 400, height || 225, alt?.slice(0, 3).toUpperCase() || 'IMG');
  }, [width, height, alt]);

  // 使用 layoutEffect 确保在 DOM 更新后同步状态
  const [prevSrc, setPrevSrc] = useState<string | undefined>(undefined);
  
  useEffect(() => {
    // 使用 setTimeout 避免同步状态更新
    const timer = setTimeout(() => {
      if (prevSrc !== src) {
        setLoaded(false);
        setCurrentSrc(src);
        setPrevSrc(src);
      }
    }, 0);
    
    return () => clearTimeout(timer);
  }, [src, prevSrc]);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      // 尝试使用备用图片
      setCurrentSrc(fallbackSrc);
      setLoaded(false);
    } else {
      // 使用 SVG 占位符
      setCurrentSrc(placeholderSrc);
      setLoaded(true);
    }
  };

  // 如果使用 SVG 占位符，直接显示
  if (currentSrc.startsWith('data:image/svg+xml')) {
    return (
      <div
        className={`relative overflow-hidden ${className}`}
        style={{ aspectRatio: `${width}/${height}` }}
      >
        <img
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          className="absolute inset-0 w-full h-full object-cover"
        />
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
        src={currentSrc}
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

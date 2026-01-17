/**
 * CodeBlock 组件
 * 代码展示组件，支持复制功能
 */
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import type { CodeBlockProps } from '@/utils/types';

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  showCopy = true,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <div className="relative bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
      {showCopy && (
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 bg-slate-800 hover:bg-slate-700 rounded transition-colors z-10"
          aria-label="复制代码"
        >
          {copied ? (
            <Check size={16} className="text-green-400" />
          ) : (
            <Copy size={16} className="text-slate-400 hover:text-white" />
          )}
        </button>
      )}
      <div className="px-4 py-2 bg-slate-800 text-xs text-slate-400 border-b border-slate-700 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-purple-500" />
        {language}
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono text-slate-300 max-h-96 overflow-y-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;

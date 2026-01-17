/**
 * SkillRadar 组件
 * 技能雷达图可视化
 */
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import type { SkillRadarData } from '@/utils/types';

interface SkillRadarProps {
  data: SkillRadarData[];
  className?: string;
}

export const SkillRadar: React.FC<SkillRadarProps> = ({ data, className = '' }) => {
  // 转换数据格式以适应 Recharts
  const chartData = data.map(item => ({
    subject: item.subject,
    value: item.value,
    fullMark: item.fullMark,
  }));

  return (
    <div className={`w-full ${className}`}>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
          <PolarGrid
            stroke="#3f3f46"
            strokeDasharray="3 3"
          />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: '#a1a1aa', fontSize: 12 }}
          />
          <PolarRadiusAxis
            angle={30}
            tick={{ fill: '#a1a1aa', fontSize: 10 }}
            domain={[0, 100]}
          />
          <Radar
            name="技能水平"
            dataKey="value"
            stroke="#8b5cf6"
            fill="#8b5cf6"
            fillOpacity={0.4}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillRadar;

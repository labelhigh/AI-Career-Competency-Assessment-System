import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';
import { SkillDimension } from '../../types';
import { BarChart3 } from 'lucide-react';

interface SkillChartProps {
  skills: SkillDimension[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-3 bg-white rounded-lg shadow-lg border border-slate-200">
        <p className="font-bold text-slate-800">{label}</p>
        <p className="text-primary">{`分數: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const SkillChart: React.FC<SkillChartProps> = ({ skills }) => (
  <section className="animate-slide-in" style={{ animationDelay: '300ms' }}>
    <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
        <BarChart3 className="w-6 h-6 mr-3 text-primary" />
        技能分析
    </h2>
    <div className="w-full h-80 bg-white rounded-xl p-4 shadow-sm border">
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis dataKey="name" tick={{ fill: '#475569', fontSize: 14 }} />
          <Radar name="您的分數" dataKey="score" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.6} />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  </section>
);

export default SkillChart;
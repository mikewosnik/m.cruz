import React from 'react';
import type { Affinity } from '../types';

interface AffinityChartProps {
  data: Affinity[];
}

const AffinityChart: React.FC<AffinityChartProps> = ({ data }) => {
  const chartId = React.useId();
  const gradientId = `data-gradient-${chartId}`;

  const size = 260; // Reduced size for sidebar
  const center = size / 2;
  const radius = center - 35; // Leave space for labels
  const numLevels = 5;
  const numSides = data.length;
  const angleSlice = (Math.PI * 2) / numSides;

  const getPoint = (value: number, index: number) => {
    const angle = angleSlice * index - Math.PI / 2; // Start from top
    const r = (radius * value) / 100;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  // Generate grid lines (web)
  const gridLevels = [];
  for (let i = 1; i <= numLevels; i++) {
    const levelRadius = (radius / numLevels) * i;
    let points = '';
    for (let j = 0; j < numSides; j++) {
      const angle = angleSlice * j - Math.PI / 2;
      const x = center + levelRadius * Math.cos(angle);
      const y = center + levelRadius * Math.sin(angle);
      points += `${x},${y} `;
    }
    gridLevels.push(<polygon key={`level-${i}`} points={points} className="fill-none stroke-gray-300 stroke-1" />);
  }

  // Generate spokes
  const spokes = data.map((_, i) => {
    const p = getPoint(100, i);
    return <line key={`spoke-${i}`} x1={center} y1={center} x2={p.x} y2={p.y} className="stroke-gray-300 stroke-1" />;
  });
  
  // Generate data polygon points
  const dataPoints = data.map((item, i) => {
    const p = getPoint(item.affinity, i);
    return `${p.x},${p.y}`;
  }).join(' ');
  
  // Generate labels
  const labels = data.map((item, i) => {
    const angle = angleSlice * i - Math.PI / 2;
    const labelRadius = radius + 18; // Position labels outside the chart
    const x = center + labelRadius * Math.cos(angle);
    const y = center + labelRadius * Math.sin(angle);
    const textAnchor = Math.abs(x - center) < 1 ? 'middle' : x > center ? 'start' : 'end';

    let dy = "0.35em";
    // Adjust vertical alignment for top/bottom labels to prevent overlap
    if (Math.abs(x - center) < 10) { 
        if (y < center) {
            dy = "-0.2em"; 
        } else {
            dy = "1em";
        }
    }

    // Handle multi-word labels like "Porsche Cup" by splitting them
    const words = item.name.split(' ');
    if (words.length > 1) {
      // Adjust dy for the first line of a multi-line label
      let initialDy = dy;
      if (textAnchor !== 'middle') {
        initialDy = "-0.1em"; // Nudge multi-line labels slightly up to center them better
      }

      return (
        <text
          key={`label-${i}`}
          x={x}
          y={y}
          dy={initialDy}
          className="text-[10px] font-semibold fill-gray-500"
          textAnchor={textAnchor}
        >
          {words.map((word, wordIndex) => (
            <tspan key={wordIndex} x={x} dy={wordIndex === 0 ? 0 : '1.1em'}>
              {word}
            </tspan>
          ))}
        </text>
      );
    }

    return (
      <text
        key={`label-${i}`}
        x={x}
        y={y}
        dy={dy}
        className="text-[10px] font-semibold fill-gray-500"
        textAnchor={textAnchor}
      >
        {item.name}
      </text>
    );
  });

  return (
    <div className="flex justify-center">
       {/* FIX: The 'maxWidth' prop is not a valid SVG attribute. It has been moved to the 'style' prop. */}
       <svg width="100%" style={{ maxWidth: '400px' }} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(14, 165, 233, 0.6)" />
            <stop offset="100%" stopColor="rgba(37, 99, 235, 0.5)" />
          </radialGradient>
        </defs>
        <g>
          {gridLevels}
          {spokes}
          <polygon points={dataPoints} fill={`url(#${gradientId})`} className="stroke-sky-500 stroke-2" />
          {labels}
        </g>
      </svg>
    </div>
  );
};

export default AffinityChart;
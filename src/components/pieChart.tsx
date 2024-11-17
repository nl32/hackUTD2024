'use client';

import React from 'react';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

function generateColorBlend(color1: string, color2: string, n: number) {
  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    return [bigint >> 16, (bigint >> 8) & 255, bigint & 255];
  };

  const rgbToHex = (r: number, g: number, b: number) =>
    `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

  const startRgb = hexToRgb(color1);
  const endRgb = hexToRgb(color2);
  const blendColors = [];

  for (let i = 0; i < n; i++) {
    const t = i / (n - 1); // Interpolation factor (0 to 1)
    const r = Math.round(startRgb[0] * (1 - t) + endRgb[0] * t);
    const g = Math.round(startRgb[1] * (1 - t) + endRgb[1] * t);
    const b = Math.round(startRgb[2] * (1 - t) + endRgb[2] * t);
    blendColors.push(rgbToHex(r, g, b));
  }

  return blendColors;
}

type PieChartProps = {
  title: string;
  series: number[];
  labels: string[];
  className?: string;
};

export default function PieChart(props: PieChartProps) {
  function formatter(value: number) {
    return Number(value).toFixed(0).toLocaleString();
  }

  const seriesLabels = props.series
    .map((point, index) => ({ point: point, label: props.labels[index] }))
    .sort((a, b) => b.point - a.point);
  const series = seriesLabels.map((seriesLabel) => seriesLabel.point);
  const labels = seriesLabels.map((seriesLabel) => seriesLabel.label);

  const colors = generateColorBlend('#324836', '#B0C8B5', series.length);

  return (
    <div className={props.className}>
      <Chart
        type="pie"
        height={'100%'}
        series={series}
        options={{
          chart: {
            background: 'transparent',
          },
          labels: labels,
          colors: colors,
          title: {
            text: props.title,
            align: 'left',
            style: {
              fontFamily: 'inherit',
            },
          },
          tooltip: {
            y: {
              formatter: formatter,
            },
          },
        }}
      />
    </div>
  );
}

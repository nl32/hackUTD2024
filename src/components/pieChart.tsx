'use client';

import React from 'react';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

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
          colors: [
            '#324836',
            '#475D4B',
            '#5C7360',
            '#718876',
            '#869D8B',
            '#9BB3A0',
            '#B0C8B5',
          ],
          title: {
            text: props.title,
            align: 'center',
            style: {
              fontFamily: 'inherit',
            },
          },
          tooltip: {
            y: {
              formatter: formatter,
            },
          },
          legend: {
            position: 'bottom',
          },
        }}
      />
    </div>
  );
}

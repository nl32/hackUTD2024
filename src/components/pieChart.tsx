'use client';

import React from 'react';

import tailwindTheme from 'src/../tailwind.config';

import ReactApexChart from 'react-apexcharts';

type PieChartProps = {
  title: string;
  series: number[];
  labels: string[];
  className?: string;
};

export default function PieChart(props: PieChartProps) {
  const green = tailwindTheme.theme.extend.colors.green;
  function formatter(value: number) {
    return Number(value).toFixed(0).toLocaleString();
  }
  return (
    <div className={props.className}>
      <ReactApexChart
        type="pie"
        height={'100%'}
        series={props.series}
        options={{
          chart: {
            background: 'transparent',
          },
          labels: props.labels,
          colors: [green.light, green.dark],
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
          legend: {
            position: 'bottom',
          },
        }}
      />
    </div>
  );
}

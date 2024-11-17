'use client';

import React from 'react';

import tailwindTheme from 'src/../tailwind.config';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type LineGraphProps = {
  title: string;
  series: {
    name: string;
    data: number[];
  }[];
  categories: string[];
  annotations?: {
    name: string;
    value: number;
  }[];
  className?: string;
};

export default function LineGraph(props: LineGraphProps) {
  const green = tailwindTheme.theme.extend.colors.green;
  function formatter(value: number) {
    return Math.round(value).toLocaleString();
  }
  const colors =
    props.series.length === 1 ? [green.DEFAULT] : [green.light, green.dark];

  return (
    <div className={props.className}>
      <Chart
        type="line"
        height={'100%'}
        series={props.series}
        options={{
          chart: {
            zoom: {
              enabled: false,
            },
            background: 'transparent',
          },
          annotations: {
            yaxis:
              typeof props.annotations !== 'undefined'
                ? props.annotations.map((annotation, index) => ({
                    y: annotation.value,
                    borderColor: colors[index % colors.length],
                    label: {
                      borderColor: 'transparent',
                      style: {
                        color: '#fff',
                        background: colors[index % colors.length],
                      },
                      text: annotation.name,
                    },
                  }))
                : [],
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: props.series.length !== 1,
          },
          xaxis: {
            categories: props.categories,
          },
          yaxis: {
            labels: {
              formatter: formatter,
            },
          },
          colors: colors,
          stroke: {
            width: 2,
            curve: 'smooth',
          },
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

'use client';

import React from 'react';

import tailwindTheme from 'src/../tailwind.config';

import ReactApexChart from 'react-apexcharts';

type LineGraphProps = {
  series: {
    name: string;
    data: number[];
  }[];
  categories: string[];
  title: string;
  annotation?: {
    name: string;
    value: number;
  };
  className?: string;
};

export default function LineGraph(props: LineGraphProps) {
  const green = tailwindTheme.theme.extend.colors.green;
  function formatter(value: number) {
    return Number(value).toFixed(0).toLocaleString();
  }
  return (
    <div className={props.className}>
      <ReactApexChart
        options={{
          chart: {
            id: 'line-chart',
            zoom: {
              enabled: false,
            },
            background: 'transparent',
          },
          annotations: {
            yaxis: props.annotation
              ? [
                  {
                    y: props.annotation.value,
                    borderColor: green.DEFAULT,
                    label: {
                      borderColor: 'transparent',
                      style: {
                        color: '#fff',
                        background: green.DEFAULT,
                      },
                      text: props.annotation.name,
                    },
                  },
                ]
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
          colors:
            props.series.length === 1
              ? [green.DEFAULT]
              : [green.light, green.dark],
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
          states: {
            active: {
              filter: {
                type: 'none',
              },
            },
          },
        }}
        series={props.series}
        type="line"
        height={'100%'}
      />
    </div>
  );
}

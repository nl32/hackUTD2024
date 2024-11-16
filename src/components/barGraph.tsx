'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type GraphProps = {
  yaxisFormatter?: (val: number) => string;
  tooltipFormatter?: (
    val: number,
    extra: { series: number[]; seriesIndex: number; dataPointIndex: number },
  ) => string;
  series: {
    name: string;
    data: number[];
  }[];
  title: string;
  labels?: string[];
};

export default function LineGraph(props: GraphProps) {
  return (
    <div className="h-full">
      <Chart
        options={{
          chart: {
            id: 'line-chart',
            zoom: {
              enabled: false,
            },
            background: 'transparent',
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: props.series.length !== 1,
          },
          yaxis: {
            labels: {
              formatter: props.yaxisFormatter,
            },
          },
          /*colors:
      props.series.length === 1
        ? rainbowColors
        : searchQueryColors.filter(
            (searchQuery, i) => props.includedColors?.[i] ?? 1,
          ),*/
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
          /*noData: {
      text: noDataText,
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: '14px',
        fontFamily: 'inherit',
      },
    },*/
          tooltip: {
            y: {
              formatter: props.tooltipFormatter ?? props.yaxisFormatter,
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

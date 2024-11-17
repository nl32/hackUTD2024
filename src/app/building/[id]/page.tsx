import { Card, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import LineGraph from 'src/components/lineGraph';
import PieChart from 'src/components/pieChart';
import ClientWrap from './ClientWrap';

export default function Building() {
  return (
    <div>
      <Card className="m-8 p-8" component="main">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Typography
              variant="h3"
              gutterBottom
              className="underline decoration-green decoration-8 underline-offset-8"
            >
              Building name
            </Typography>
            <Typography variant="h6" gutterBottom className="text-slate-600">
              {'Location: ' + 'Dallas, TX'}
            </Typography>
            <Typography variant="h6" gutterBottom className="text-slate-600">
              {'Size: ' + (10000).toLocaleString() + ' Sq. Ft'}
            </Typography>
            <Typography variant="h4" gutterBottom className="inline">
              {'$' + (3500).toLocaleString() + ' '}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              className="inline text-slate-600"
            >
              monthly costs
            </Typography>
          </Grid>

          <ClientWrap />

          {/* visuals */}

          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            className="flex flex-col gap-4"
          >
            <Typography variant="h4">Energy Usage</Typography>
            <LineGraph
              title="Energy Usage (thous Btu)"
              series={[
                {
                  name: 'Electricity consumption (thous Btu)',
                  data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                },
                {
                  name: 'Natural gas and fuel oil consumption (thous Btu)',
                  data: [148, 91, 69, 62, 49, 51, 35, 41, 10],
                },
              ]}
              categories={[
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
              ]}
              annotation={{
                name: 'Baseline',
                value: 55,
              }}
              className="h-72"
            />
            <Grid container spacing={2}>
              <Grid size={6}>
                <Card variant="outlined" className="w-full p-2">
                  <Typography variant="h6" gutterBottom>
                    Buildings this size
                  </Typography>
                  <Typography variant="body1" gutterBottom className="inline">
                    {'MAINHT' + ' '}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className="inline text-slate-600"
                  >
                    heating equipment
                  </Typography>
                  <br />
                  <Typography variant="body1" gutterBottom className="inline">
                    {'MAINCL' + ' '}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className="inline text-slate-600"
                  >
                    air-conditioning equipment
                  </Typography>
                </Card>
              </Grid>
              <Grid size={6}>
                <Card variant="outlined" className="w-full p-2">
                  <Typography variant="h6" gutterBottom>
                    Your building
                  </Typography>
                  <Typography variant="body1" gutterBottom className="inline">
                    {'<>' + ' '}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className="inline text-slate-600"
                  >
                    heating equipment
                  </Typography>
                  <br />
                  <Typography variant="body1" gutterBottom className="inline">
                    {'<>' + ' '}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className="inline text-slate-600"
                  >
                    air-conditioning equipment
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            className="flex flex-col gap-4"
          >
            <Typography variant="h4">Water Usage</Typography>
            <LineGraph
              title="Water Usage (gallons)"
              series={[
                {
                  name: 'Water Usage (gallons)',
                  data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                },
              ]}
              categories={[
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
              ]}
              annotation={{
                name: 'Baseline',
                value: 55,
              }}
              className="h-72"
            />
          </Grid>
          <Grid size={12} className="flex flex-col gap-4">
            <Typography variant="h4">Lighting</Typography>
            <div className="flex gap-4">
              <PieChart
                title="Other buildings"
                series={[10, 41, 35, 51, 49, 62, 69]}
                labels={[
                  'FLUORP',
                  'CFLRP',
                  'BULBP',
                  'HALOP',
                  'HIDP',
                  'LEDP',
                  'OTLTP',
                ]}
                className="h-72 flex-1"
              />
              <PieChart
                title="Your building"
                series={[10, 41, 35, 51, 49, 62, 69]}
                labels={[
                  'FLUORP',
                  'CFLRP',
                  'BULBP',
                  'HALOP',
                  'HIDP',
                  'LEDP',
                  'OTLTP',
                ]}
                className="h-72 flex-1"
              />
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

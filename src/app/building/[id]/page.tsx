import { Card, Grid2 as Grid, Typography } from '@mui/material';

import BarGraph from 'src/components/barGraph';

export default async function Building({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id;
  console.log(id);

  return (
    <Card className="m-12 flex flex-col gap-8 p-4" component="main">
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
        <Grid size={{ xs: 12, sm: 12, md: 6 }} className="flex flex-col gap-4">
          <Typography variant="h4">Recommendations</Typography>
          <Card variant="outlined" className="p-2">
            <Typography variant="h6" gutterBottom>
              Energy
            </Typography>
            <ul className="list-disc pl-6">
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </Card>
          <Card variant="outlined" className="p-2">
            <Typography variant="h6" gutterBottom>
              Water
            </Typography>
            <ul className="list-disc pl-6">
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
          <BarGraph
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
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
          <BarGraph
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
      </Grid>
    </Card>
  );
}

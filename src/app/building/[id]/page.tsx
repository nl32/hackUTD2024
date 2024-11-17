import { Card, Grid2 as Grid, Typography } from '@mui/material';

import LineGraph from 'src/components/lineGraph';
import PieChart from 'src/components/pieChart';
import NavBar from 'src/components/navBar';
import { db } from 'src/db';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import {
  averageEnergy,
  averageFuel,
  averageWater,
  coolingMode,
  heatingMode,
  regions,
} from 'src/data';

export default async function Building({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const inputId = (await params).id;
  const building = await db.query.building.findFirst({
    where: ({ id }) => eq(id, inputId),
  });
  if (!building) notFound();
  const waterBaseline = await averageWater(
    building.squareFeet,
    building.region as regions,
  );
  const energyBaseline = await averageEnergy(
    building.squareFeet,
    building.region as regions,
  );
  const fuelBaseline = await averageFuel(
    building.squareFeet,
    building.region as regions,
  );
  const heatMode = await heatingMode(
    building.squareFeet,
    building.region as regions,
  );
  const coolMode = await coolingMode(
    building.squareFeet,
    building.region as regions,
  );
  return (
    <>
      <NavBar />
      <Card className="m-8 p-8" component="main">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Typography
              variant="h3"
              gutterBottom
              className="underline decoration-green decoration-8 underline-offset-8"
            >
              {building.title}
            </Typography>
            <Typography variant="h6" gutterBottom className="text-slate-600">
              {building.location}
            </Typography>
            <Typography variant="h6" gutterBottom className="text-slate-600">
              {'Size: ' + building.squareFeet.toLocaleString() + ' Sq. Ft'}
            </Typography>
            <Typography variant="h4" gutterBottom className="inline">
              {'$' + building.cost.toLocaleString() + ' '}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              className="inline text-slate-600"
            >
              monthly costs
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            className="flex flex-col gap-4"
          >
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
                  data: building.energy,
                },
                {
                  name: 'Natural gas and fuel oil consumption (thous Btu)',
                  data: [148, 91, 69, 62, 49, 51, 35, 41, 10],
                },
              ]}
              categories={[
                "Nov '23",
                "Dec '23",
                "Jan '24",
                "Feb '24",
                "Mar '24",
                "Apr '24",
                "May '24",
                "Jun '24",
                "Jul '24",
                "Aug '24",
                "Sep '24",
                "Oct '24",
              ]}
              annotations={[
                {
                  name: 'Electricity Baseline',
                  value: energyBaseline,
                },
                {
                  name: 'Fuel Baseline',
                  value: fuelBaseline,
                },
              ]}
              className="h-72"
            />
            <Grid container spacing={2}>
              <Grid size={6}>
                <Card variant="outlined" className="w-full p-2">
                  <Typography variant="h6" gutterBottom>
                    Buildings this size
                  </Typography>
                  <Typography variant="body1" gutterBottom className="inline">
                    {heatMode + ' '}
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
                    {coolMode + ' '}
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
                    {building.MAINHT + ' '}
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
                    {building.MAINCL + ' '}
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
                  data: building.water,
                },
              ]}
              categories={[
                "Nov '23",
                "Dec '23",
                "Jan '24",
                "Feb '24",
                "Mar '24",
                "Apr '24",
                "May '24",
                "Jun '24",
                "Jul '24",
                "Aug '24",
                "Sep '24",
                "Oct '24",
              ]}
              annotations={[
                {
                  name: 'Baseline',
                  value: waterBaseline,
                },
              ]}
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
                series={[
                  building.FLUORP,
                  building.CFLRP,
                  building.BULBP,
                  building.HALOP,
                  building.HIDP,
                  building.LEDP,
                  building.OTLTP,
                ]}
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
    </>
  );
}

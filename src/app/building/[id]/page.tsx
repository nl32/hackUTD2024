'use client';
import { Card, Grid2 as Grid, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import LineGraph from 'src/components/lineGraph';
import PieChart from 'src/components/pieChart';
import Popup from './popup';

export default function Building() {
  const [isCarbonModalOpen, setIsCarbonModalOpen] = useState(false);
  const [isEnergyModalOpen, setIsEnergyModalOpen] = useState(false);
  const [isWaterModalOpen, setIsWaterModalOpen] = useState(false);

  const openCarbonModal = () => setIsCarbonModalOpen(true);
  const closeCarbonModal = () => setIsCarbonModalOpen(false);

  const openEnergyModal = () => setIsEnergyModalOpen(true);
  const closeEnergyModal = () => setIsEnergyModalOpen(false);

  const openWaterModal = () => setIsWaterModalOpen(true);
  const closeWaterModal = () => setIsWaterModalOpen(false);

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

          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            className="flex flex-col gap-4"
          >
            <Typography variant="h4">Recommendations</Typography>

            <Card
              variant="outlined"
              className="mx-auto w-full max-w-sm rounded-lg border-gray-300 p-5"
            >
              <Typography variant="h6" gutterBottom>
                Energy Consumption
              </Typography>
              <ul className="list-disc pl-6">
                <li>Switch to smart thermometers</li>
                <li>Use dimmable lights</li>
                <li>
                  Install motion sensors to turn off lights in low-occupancy
                  spaces
                </li>
              </ul>
              <Button
                variant="contained"
                className="rounded-full border-gray-300 p-2 mt-4"
                color="primary"
                onClick={openEnergyModal}
              >
                View Detailed Recommendations
              </Button>
            </Card>

            <Card
              variant="outlined"
              className="mx-auto w-full max-w-sm rounded-lg border-gray-300 p-5"
            >
              <Typography variant="h6" gutterBottom>
                Water Consumption
              </Typography>
              <ul className="list-disc pl-6">
                <li>Install water sensors to detect leaks in real time</li>
                <li>Install low-flow faucets and toilets</li>
                <li>Install climate-based irrigation systems</li>
              </ul>
              <Button
                variant="contained"
                className="rounded-full border-gray-300 p-2 mt-4"
                color="primary"
                onClick={openWaterModal}
              >
                View Detailed Recommendations
              </Button>
            </Card>

            <Card
              variant="outlined"
              className="mx-auto w-full max-w-sm rounded-lg border-gray-300 p-5"
            >
              <Typography variant="h6" gutterBottom>
                Carbon Emission
              </Typography>
              <ul className="list-disc pl-6">
                <li>Enroll in green energy plans</li>
                <li>Use LED lights instead of fluorescent bulbs</li>
                <li>Improve windows and roof insulation</li>
              </ul>
              <Button
                variant="contained"
                className="rounded-full border-gray-300 p-2 mt-4"
                color="primary"
                onClick={openCarbonModal}
              >
                View Detailed Recommendations
              </Button>
            </Card>
          </Grid>

          {/* Carbon Emission Modal */}
          <Popup
            open={isCarbonModalOpen}
            onClose={closeCarbonModal}
            title="Carbon Emission Reduction"
            content={
              <div>
                Current Issues: Carbon emissions in buildings come from energy use, 
                inefficient materials, and poor design.<br /><br />
                <strong>Improvement Suggestions:</strong><br />
                -  Enroll in green energy plans: Reduce emissions by <strong>20%-30%.</strong><br />
                -  Use LED lights instead of fluorescent bulbs: Reduce emissions by <strong>10%-15%.</strong><br />
                -  Improve windows and roof insulation: Reduce emissions by <strong>15%-20%.</strong><br />
                - Consider double-glazed or low-emissivity windows: Reduce emissions by <strong>10%-15%.</strong><br /><br />
                <strong>Overall Carbon Emission Reduction Potential:</strong><br />
                <strong>55%–80%</strong> improvement depending on implementation.
              </div>
            }
          />

          {/* Energy Consumption Modal */}
          <Popup
            open={isEnergyModalOpen}
            onClose={closeEnergyModal}
            title="Energy Consumption"
            content={   
            <div>
              Current Issues: High energy use often results from outdated appliances, lighting, and HVAC systems.<br /><br />
              <strong>Improvement Suggestions:</strong><br />
              - Switch to smart thermometers: Improve energy efficiency by <strong>10%-20%.</strong><br />
              - Use dimmable lights: Save energy by <strong>5%-10%.</strong><br />
              - Install motion sensors to turn off lights in low-occupancy spaces: Reduce energy use by <strong>10%-15%.</strong><br />
              - Lower water heater temperature: Improve energy savings by <strong>5%-10%.</strong><br /><br />
              <strong>Overall Energy Consumption Reduction Potential:</strong><br />
              <strong>30%–55%</strong> improvement depending on scope and scale.
            </div>
          }
        />

          {/* Water Consumption Modal */}
          <Popup
            open={isWaterModalOpen}
            onClose={closeWaterModal}
            title="Water Consumption"
            content={ 
            <div>
              Current Issues: Excess water use often stems from leaks, inefficient fixtures, and wasteful landscaping practices.<br /><br />
              <strong>Improvement Suggestions:</strong><br />
              - Install water sensors to detect leaks in real time: Save water by <strong>10%-20%.</strong><br />
              - Install low-flow faucets and toilets: Reduce water use by <strong>20%-30%.</strong><br />
              - Install climate-based irrigation systems: Improve water efficiency by <strong>15%-25%.</strong><br />
              - Consider double-glazed or low-emissivity windows (to optimize HVAC): Indirectly save water by reducing cooling loads from <strong>1%-5%.</strong><br /><br />
              <strong>Overall Water Consumption Reduction Potential:</strong><br />
              <strong>45%–65%</strong> improvement with comprehensive measures.
            </div>
          }
        />

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

'use client';

import { Grid2 as Grid, Typography, Card, Button } from '@mui/material';
import { useState } from 'react';
import Popup from './popup';

export default function ClientWrap() {
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
    <>
      <Grid size={{ xs: 12, sm: 12, md: 6 }} className="flex flex-col gap-4">
        <Typography variant="h4">Recommendations</Typography>
        <div className="items-start">
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
              className="mt-4 rounded-full border-gray-300 p-2"
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
              className="mt-4 rounded-full border-gray-300 p-2"
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
              className="mt-4 rounded-full border-gray-300 p-2"
              color="primary"
              onClick={openCarbonModal}
            >
              View Detailed Recommendations
            </Button>
          </Card>
        </div>
      </Grid>

      {/* Carbon Emission Modal */}
      <Popup
        open={isCarbonModalOpen}
        onClose={closeCarbonModal}
        title="Carbon Emission Reduction"
        content={
          <div>
            Current Issues: Carbon emissions in buildings come from energy use,
            inefficient materials, and poor design.
            <br />
            <br />
            <strong>Improvement Suggestions:</strong>
            <br />- Enroll in green energy plans: Reduce emissions by{' '}
            <strong>20%-30%.</strong>
            <br />- Use LED lights instead of fluorescent bulbs: Reduce
            emissions by <strong>10%-15%.</strong>
            <br />- Improve windows and roof insulation: Reduce emissions by{' '}
            <strong>15%-20%.</strong>
            <br />- Consider double-glazed or low-emissivity windows: Reduce
            emissions by <strong>10%-15%.</strong>
            <br />
            <br />
            <strong>Overall Carbon Emission Reduction Potential:</strong>
            <br />
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
            Current Issues: High energy use often results from outdated
            appliances, lighting, and HVAC systems.
            <br />
            <br />
            <strong>Improvement Suggestions:</strong>
            <br />- Switch to smart thermometers: Improve energy efficiency by{' '}
            <strong>10%-20%.</strong>
            <br />- Use dimmable lights: Save energy by <strong>5%-10%.</strong>
            <br />- Install motion sensors to turn off lights in low-occupancy
            spaces: Reduce energy use by <strong>10%-15%.</strong>
            <br />- Lower water heater temperature: Improve energy savings by{' '}
            <strong>5%-10%.</strong>
            <br />
            <br />
            <strong>Overall Energy Consumption Reduction Potential:</strong>
            <br />
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
            Current Issues: Excess water use often stems from leaks, inefficient
            fixtures, and wasteful landscaping practices.
            <br />
            <br />
            <strong>Improvement Suggestions:</strong>
            <br />- Install water sensors to detect leaks in real time: Save
            water by <strong>10%-20%.</strong>
            <br />- Install low-flow faucets and toilets: Reduce water use by{' '}
            <strong>20%-30%.</strong>
            <br />- Install climate-based irrigation systems: Improve water
            efficiency by <strong>15%-25%.</strong>
            <br />- Consider double-glazed or low-emissivity windows (to
            optimize HVAC): Indirectly save water by reducing cooling loads from{' '}
            <strong>1%-5%.</strong>
            <br />
            <br />
            <strong>Overall Water Consumption Reduction Potential:</strong>
            <br />
            <strong>45%–65%</strong> improvement with comprehensive measures.
          </div>
        }
      />
    </>
  );
}

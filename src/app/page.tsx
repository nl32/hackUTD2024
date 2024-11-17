import Building from 'src/components/building';
import LineGraph from 'src/components/lineGraph';
import PieChart from 'src/components/pieChart';
import NavBar from 'src/components/navBar';
import Image from 'next/image';
import { db } from 'src/db';

export default async function Home() {
  const buildings = await db.query.building.findMany();

  const pieChartSums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const buildingTypes = [0, 0, 0];
  await buildings.forEach((building) => {
    for (let i = 0; i < 12; i++) {
      pieChartSums[i] += building.energy[i];
    }
    if (building.squareFeet < 20000) {
      buildingTypes[0] += 1;
    } else if (building.squareFeet < 40000) {
      buildingTypes[1] += 1;
    } else {
      buildingTypes[2] += 1;
    }
  });

  return (
    <div className="flex h-screen flex-col items-center">
      <NavBar />
      <Image
        src="/trees.png"
        width="350"
        height="75"
        alt="trees"
        className="fixed bottom-0 left-10"
      />
      {
        <div className="flex h-3/4 w-3/4 flex-row">
          <div className="w-1/2">
            {buildings.map((building, index) => (
              <Building key={index} building={building} />
            ))}
          </div>

          <div className="h-full w-1/2 items-center p-5">
            <PieChart
              title="Your Buildings"
              series={buildingTypes}
              labels={['Small Offices', 'Medium Offices', 'Large Offices']}
              className="mb-6 h-1/2 flex-1"
            />
            <LineGraph
              title="Total Energy Usage (thous Btu)"
              series={[
                {
                  name: 'Electricity consumption (thous Btu)',
                  data: pieChartSums.slice(-9),
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
              annotations={[
                {
                  name: 'Baseline',
                  value: 50000,
                },
              ]}
              className="h-1/2 bg-background"
            />
          </div>
        </div>
      }
    </div>
  );
}

import Building from 'src/components/building';
import LineGraph from 'src/components/lineGraph';
import PieChart from 'src/components/pieChart';
import NavBar from 'src/components/navBar';
import { db } from 'src/db';

export default async function Home() {
  const buildings = await db.query.building.findMany();
  return (
    <div className="flex h-screen flex-col items-center">
      <NavBar />
      <div className="flex h-3/4 w-3/4 flex-row">
        <div className="w-1/2">
          {buildings.map((building, index) => (
            <Building key={index} building={building} />
          ))}
        </div>
        <div className="h-full w-1/2 items-center p-5">
          <PieChart
            title="Your Buildings"
            series={[10, 41, 35]}
            labels={['Large Offices', 'Small Offices', 'Commercial Buildings']}
            className="mb-6 h-1/2 flex-1"
          />
          <LineGraph
            title="Total Energy Usage (thous Btu)"
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
            className="h-1/2"
          />
        </div>
      </div>
    </div>
  );
}

import Building, { BuildingCardProps } from 'src/components/building';
import LineGraph from 'src/components/lineGraph';
import PieChart from 'src/components/pieChart';
import SearchBar from 'src/components/searchBar';
import SmallButton from 'src/components/smallButton';

export default function Home() {
  const buildings: BuildingCardProps[] = [
    {
      id: '0',
      name: 'Building 1',
      location: 'Dallas, TX',
      classification: 'red',
    },
    {
      id: '1',
      name: 'Building 1',
      location: 'Dallas, TX',
      classification: 'yellow',
    },
    {
      id: '2',
      name: 'Building 1',
      location: 'Dallas, TX',
      classification: 'green',
    },
    {
      id: '3',
      name: 'Building 1',
      location: 'Dallas, TX',
      classification: 'orange',
    },
  ];
  return (
    <div className="flex flex-col items-center h-screen">
      <SearchBar />
      <div className="my-5 flex flex-row">
        <SmallButton text="Manage Buldings" />
        <SmallButton text="Water Usage" />
        <SmallButton text="Energy Usage" />
        <SmallButton text="Gas Emission" />
      </div>
      <div className="flex h-3/4 w-3/4 flex-row">
        <div className="w-1/2">
          {buildings.map((buildingData, index) => (
            <Building key={index} {...buildingData} />
          ))}
        </div>
        <div className="w-1/2 p-5 items-center h-full">
          <PieChart
            title="Your Buildings"
            series={[10, 41, 35]}
            labels={['Large Offices', 'Small Offices', 'Commercial Buildings']}
            className="flex-1 h-1/2 mb-6"
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

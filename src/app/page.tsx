import Building, { BuildingCardProps } from 'src/components/building';
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
    <div className="flex h-screen flex-col items-center">
      <SearchBar />
      <div className="my-5 flex flex-row">
        <SmallButton text="Manage Buldings" />
        <SmallButton text="Water Usage" />
        <SmallButton text="Energy Usage" />
        <SmallButton text="Gas Emission" />
      </div>
      <div className="h-3/4 w-3/4">
        <div className="w-1/2 overflow-y-scroll">
          {buildings.map((buildingData, index) => (
            <Building key={index} {...buildingData} />
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}

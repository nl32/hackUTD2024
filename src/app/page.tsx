import Building, { BuildingCardProps } from 'src/components/building';
import SearchBar from 'src/components/searchBar';
import SmallButton from 'src/components/smallButton';

export default function Home() {

  const buildings: BuildingCardProps[] = [
    { id: "", name: 'Building 1', location: 'Dallas, TX', classification: 'red' },
    { id: "", name: 'Building 1', location: 'Dallas, TX', classification: 'red' },
    { id: "", name: 'Building 1', location: 'Dallas, TX', classification: 'red' },
    { id: "", name: 'Building 1', location: 'Dallas, TX', classification: 'red' },
  ];
  return (
    <div className='flex flex-col items-center h-screen'>
      <SearchBar />
      <div className='flex flex-row my-3'>
        <SmallButton text="Manage Buldings" />
        <SmallButton text="Water Usage" />
        <SmallButton text="Energy Usage" />
        <SmallButton text="Gas Emission" />
      </div>
      <div className="w-3/4 h-3/4">
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

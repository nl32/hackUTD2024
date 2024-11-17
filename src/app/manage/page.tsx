import Building, { BuildingCardProps } from 'src/components/buildingManage';
import NavBar from 'src/components/navBar';
import { Button } from '@mui/material';
import Link from 'next/link';

export default function Manage() {
  const buildings: BuildingCardProps[] = [
    {
      id: '0',
      name: 'Building 1',
      location: 'Dallas, TX',
    },
    {
      id: '1',
      name: 'Building 1',
      location: 'Dallas, TX',
    },
    {
      id: '2',
      name: 'Building 1',
      location: 'Dallas, TX',
    },
    {
      id: '3',
      name: 'Building 1',
      location: 'Dallas, TX',
    },
  ];

  return (
    <div className="flex h-screen flex-col items-center">
      <NavBar />
      <Link href="/new-building">
        <Button variant="contained" className="mb-5 mt-10 rounded-full">
          Add new building
        </Button>
      </Link>
      <div className="flex w-1/2 flex-col">
        {buildings.map((buildingData, index) => (
          <Building key={index} {...buildingData} />
        ))}
      </div>
    </div>
  );
}

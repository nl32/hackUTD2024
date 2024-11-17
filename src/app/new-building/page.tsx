import { Card, Link } from '@mui/material';
import { BuildingForm } from 'src/components/buildingForm';
import NavBar from 'src/components/navBar';

export default async function NewBuilding() {
  return (
    <div className="flex h-screen flex-col items-center">
      <NavBar />
      <div className="flex w-1/2 flex-col">
        <BuildingForm />
      </div>
    </div>
  );
}

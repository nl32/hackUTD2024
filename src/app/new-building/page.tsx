import {
  Card,
} from '@mui/material';
import { BuildingForm } from 'src/components/buildingForm';

export default async function NewBuilding() {
  return (
    <div className='w-full h-full'>
      <Card className='items-center content-center flex flex-column'>
        <BuildingForm />
      </Card>
    </div>
  );
}

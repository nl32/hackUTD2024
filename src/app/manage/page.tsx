import Building from 'src/components/buildingManage';
import NavBar from 'src/components/navBar';
import { Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { db } from 'src/db';

export default async function Manage() {
  const buildings = await db.query.building.findMany();

  return (
    <div className="flex h-screen flex-col items-center">
      <NavBar />
      <Link href="/new-building">
        <Button variant="contained" className="mb-5 mt-10 rounded-full">
          Add new building
        </Button>
      </Link>
      <div className="flex w-1/2 flex-col">
        <Image
          src="/trees.png"
          width="350"
          height="75"
          alt="trees"
          className="fixed bottom-0 left-10"
        />
        {buildings.map((building, index) => (
          <Building key={index} building={building} />
        ))}
      </div>
    </div>
  );
}

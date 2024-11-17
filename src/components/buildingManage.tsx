'use client';
import DeleteIcon from '@mui/icons-material/Delete';
import { Card, IconButton, Typography } from '@mui/material';

export type BuildingCardProps = {
  name: string;
  location: string;
  id: string;
};
export default function Building(props: BuildingCardProps) {
  return (
    <Card className="m-5 flex flex-row items-center justify-between rounded-lg bg-white p-5">
      <div>
        <Typography variant="h6" fontWeight={700}>
          {props.name}
        </Typography>
        <Typography variant="body1">{props.location}</Typography>
      </div>
      <IconButton onClick={() => console.log('delete', props.id)}>
        <DeleteIcon />
      </IconButton>
    </Card>
  );
}

import { ArrowForwardIos } from '@mui/icons-material';
import { Card, Typography } from '@mui/material';

export type BuildingCardProps = {
  name: string;
  location: string;
  id: string;
  classification: 'red' | 'orange' | 'yellow' | 'green';
};
export default function Building(props: BuildingCardProps) {
  return (
    <Card className="flex m-5 rounded-lg bg-white p-5 flex-row justify-between items-center">
        <div>
          <div className="items-center flex flex-row">
            <Typography variant="h6" fontWeight={700}>
              {props.name}
            </Typography>
            <div
              className={`h-5 w-5 bg-${props.classification}-600 m-2 rounded-full`}
            />
          </div>
          <Typography variant="body1">{props.location}</Typography>
        </div>
        <ArrowForwardIos />
    </Card>
  );
}

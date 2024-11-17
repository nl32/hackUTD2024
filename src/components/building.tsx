import { ArrowForwardIos } from '@mui/icons-material';
import { Badge, Card, Typography } from '@mui/material';
import tailwindTheme from 'src/../tailwind.config';

export type BuildingCardProps = {
  name: string;
  location: string;
  id: string;
  classification: 'red' | 'orange' | 'yellow' | 'green';
};
export default function Building(props: BuildingCardProps) {
  const classificationKey = {
    "red": "Needs improvement",
    "orange": "Inefficient",
    "yellow": "Room for growth",
    "green": "Efficient"
  }
  return (
    <Card className="flex m-5 rounded-lg bg-white p-5 flex-row justify-between items-center">
        <div>
          <div className="items-center flex flex-row">
            <Typography variant="h6" fontWeight={700}>
              {props.name}
            </Typography>
            <Badge color='success'/>
            <div
              className={`px-2 py-1 mx-2 rounded-full`}
              style={{backgroundColor: tailwindTheme.theme.extend.colors.warning[props.classification]}}
            >
              <Typography fontWeight={700} fontSize={11}>{classificationKey[props.classification]}</Typography>
            </div>
          </div>
          <Typography variant="body1">{props.location}</Typography>
        </div>
        <ArrowForwardIos />
    </Card>
  );
}

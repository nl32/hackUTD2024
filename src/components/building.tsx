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
    red: 'Needs improvement',
    orange: 'Inefficient',
    yellow: 'Room for growth',
    green: 'Efficient',
  };
  return (
    <a href={`/building/${props.id}`}>
      <Card className="m-5 flex flex-row items-center justify-between rounded-lg bg-white p-5">
        <div>
          <div className="flex flex-row items-center">
            <Typography variant="h6" fontWeight={700}>
              {props.name}
            </Typography>
            <Badge color="success" />
            <div
              className={`mx-2 rounded-full px-2 py-1`}
              style={{
                backgroundColor:
                  tailwindTheme.theme.extend.colors.warning[
                    props.classification
                  ],
              }}
            >
              <Typography fontWeight={700} fontSize={11}>
                {classificationKey[props.classification]}
              </Typography>
            </div>
          </div>
          <Typography variant="body1">{props.location}</Typography>
        </div>
        <ArrowForwardIos />
      </Card>
    </a>
  );
}

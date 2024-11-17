import { ArrowForwardIos } from '@mui/icons-material';
import { Card, Typography } from '@mui/material';
import tailwindTheme from 'src/../tailwind.config';
import Link from 'next/link';
import { InferSelectModel } from 'drizzle-orm';
import { building } from 'src/db/schema';

export type BuildingCardProps = {
  building: InferSelectModel<typeof building>;
  // classification: 'red' | 'orange' | 'yellow' | 'green';
};
export default function Building({ building }: BuildingCardProps) {
  const classificationKey = {
    red: 'Needs improvement',
    orange: 'Inefficient',
    yellow: 'Room for growth',
    green: 'Efficient',
  };

  const totalEnergyUsage = building.energy.reduce((a, b) => a + b) / 12;
  const key =
    totalEnergyUsage > 0 && totalEnergyUsage < 500000
      ? 'green'
      : totalEnergyUsage > 0 && totalEnergyUsage < 800000
        ? 'yellow'
        : totalEnergyUsage > 0 && totalEnergyUsage < 1050000
          ? 'orange'
          : 'red';
  return (
    <Link className="m-5" href={`/building/${building.id}`}>
      <Card className="flex flex-row items-center justify-between rounded-lg bg-white p-5">
        <div>
          <div className="flex flex-row items-center">
            <Typography variant="h6" fontWeight={700}>
              {building.title}
            </Typography>
            <div
              className={`mx-2 rounded-full px-2 py-1`}
              style={{
                backgroundColor: tailwindTheme.theme.extend.colors.warning[key],
              }}
            >
              <Typography fontWeight={700} fontSize={11}>
                {classificationKey[key]}
              </Typography>
            </div>
          </div>
          <Typography variant="body1">{building.location}</Typography>
        </div>
        <ArrowForwardIos />
      </Card>
    </Link>
  );
}

import { Typography } from '@mui/material';

export default function SmallButton(props: { text: string }) {
  return (
    <div className="mx-5 rounded-full bg-green px-3 py-1">
      <Typography fontSize="0.75rem" fontWeight={700} color="white">
        {props.text}
      </Typography>
    </div>
  );
}

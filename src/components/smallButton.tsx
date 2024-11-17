import { Typography } from '@mui/material';

export default function SmallButton(props: { text: string }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        height: '5vh', // Full viewport height
      }}
    >
      <div className="mx-5 rounded-full bg-green-dark px-8 py-5">
        <Typography fontSize="0.75rem" fontWeight={700} color="white">
          {props.text}
        </Typography>
      </div>
    </div>
  );
}

import { Typography } from "@mui/material";

export default function SmallButton(props: {text: string}) {
    return <div className="bg-green rounded-full px-3 py-1 mx-5">
        <Typography fontSize="0.75rem" fontWeight={700} color="white">
            {props.text}
        </Typography>
    </div>;
  }
  
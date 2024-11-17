import BusinessIcon from '@mui/icons-material/Business';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/" className="flex items-center gap-2">
          <BusinessIcon className="text-4xl" />
          <Typography className="text-2xl font-bold" component="h1">
            Carbon Gauge
          </Typography>
        </Link>
        <Link href="/manage" className="ml-auto">
          <Button
            variant="contained"
            color="secondary"
            className="rounded-full"
          >
            Manage Buldings
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

'use client';
import { createTheme } from '@mui/material/styles';

import tailwindTheme from 'src/../tailwind.config.ts';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: tailwindTheme.theme.extend.colors.green.DEFAULT,
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});

export default theme;

'use client';
import { createTheme } from '@mui/material/styles';

import tailwindTheme from 'src/../tailwind.config';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: tailwindTheme.theme.extend.colors.green.DEFAULT,
    },
    secondary: {
      main: tailwindTheme.theme.extend.colors.background,
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});

export default theme;

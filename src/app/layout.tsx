import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'src/theme';

export const metadata: Metadata = {
  title: 'CarbonGauge',
  description: 'Insights into a reduced carbon footprint',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className="bg-background text-foreground">{children}</body>
      </ThemeProvider>
    </html>
  );
}

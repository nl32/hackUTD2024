import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'src/theme';

export const metadata: Metadata = {
  title: 'Carbon Gauge',
  description:
    'Insights into a reduced carbon footprint for property managers based on real world comparison.',
  openGraph: {
    title: 'Carbon Gauge',
    description:
      'Insights into a reduced carbon footprint for property managers based on real world comparison.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    site: 'carbongauge.tech',
  },
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

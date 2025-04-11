import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Or Roboto if preferred
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/styles/theme';
import StoreProvider from '@/lib/redux/provider';
import Navbar from '@/components/Navbar';
import Container from '@mui/material/Container';

const inter = Inter({ subsets: ['latin'] }); // Example font

export const metadata: Metadata = {
  title: 'Blog Dashboard',
  description: 'Frontend Developer Test Project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Container component="main" sx={{ mt: 4, mb: 4 }}>
              {children}
            </Container>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
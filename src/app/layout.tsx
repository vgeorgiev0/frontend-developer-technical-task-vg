import type { Metadata, Viewport } from 'next';
import { Domine, Poppins, Saira } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/footer/Footer';

import { ClerkProvider } from '@clerk/nextjs';

const domine = Domine({ subsets: ['latin'], variable: '--domine' });

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
  variable: '--poppins',
});

const saira = Saira({
  subsets: ['latin'],
  variable: '--font-saira',
});

export const metadata: Metadata = {
  title: 'VG Technical Task',
  description: 'A technical task for Daye',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={cn(
            'min-h-screen bg-background font-saira antialiased text-black light',
            domine.variable,
            poppins.variable,
            saira.variable
          )}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

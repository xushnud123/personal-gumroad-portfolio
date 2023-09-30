import { ReactNode } from 'react';
import { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/global/global.css';
import '@/global/cursor.css';
import '@/style/color.scss';

const getai = localFont({
  src: [
    {
      path: '../../public/fonts/grotesk/DTGetaiGroteskDisplay-Black.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-getai'
});

const mabryPro = localFont({
  src: [
    {
      path: '../../public/fonts/mabry-pro/MabryPro-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/mabry-pro/MabryPro-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/mabry-pro/MabryPro-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-mabry-pro'
});

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${mabryPro.variable} ${getai.variable}`}>
      <body>{children}</body>
    </html>
  );
}

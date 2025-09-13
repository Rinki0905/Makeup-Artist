import type { Metadata } from 'next';
import './globals.css'; // Make sure your global styles are imported

// Optional: If you're using a font
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GlamBook', // You can change the title here
  description: 'Find & Book Your Perfect Makeup Artist',
};

// This is the essential part
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* The className on the body is optional but common */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
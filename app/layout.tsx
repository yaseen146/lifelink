import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LifeLink - Emergency Organ & Blood Donor Platform',
  description: 'Connecting donors and recipients for emergency blood and organ donations in real-time. Save lives with LifeLink.',
  keywords: 'organ donation, blood donation, emergency, healthcare, lifesaving, donor, recipient',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* yaha par className update kiya hai */}
      <body className={`${inter.className} bg-background text-foreground`}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

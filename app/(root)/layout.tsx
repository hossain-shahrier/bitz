import '../globals.css';
import type { Metadata } from 'next';
import { LeftSidebar } from '@/components/shared/LeftSidebar';
import { Inter } from 'next/font/google';
import { Topbar } from '@/components/shared/Topbar';
import { RightSidebar } from '@/components/shared/RightSidebar';
import { Bottombar } from '@/components/shared/Bottombar';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bitz',
  description: 'Project Bitz: Share your projects with the world!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}

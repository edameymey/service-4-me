import React from 'react';
import MainNavbar from '@/components/MainNavbar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen w-full bg-[#f2f4f7] text-[#161c24]">
      <div className="flex min-h-screen w-full flex-col">
        <MainNavbar />
        {children}
      </div>
    </main>
  );
}

// components/Layout.tsx
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="bg-neutral-900 py-6 text-center text-2xl font-bold text-brand">
        Digilani Media
      </header>
      <main>{children}</main>
      <footer className="bg-neutral-900 py-6 text-center text-gray-400">
        © 2025 Digilani Media. All rights reserved.
      </footer>
    </div>
  );
};

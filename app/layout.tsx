// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Digilani Media',
  description: 'Lifestyle, wellness, personal growth, relationships',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}

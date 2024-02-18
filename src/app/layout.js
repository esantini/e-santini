import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "e-Santini Web App",
  description: "My portfolio: a showcase of innovative web projects using React.js, Next.js, Node.js and Raspberry Pi. Connect and explore the blend of technology and creativity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

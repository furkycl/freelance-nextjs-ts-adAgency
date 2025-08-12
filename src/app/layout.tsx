import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "../../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akgüler Reklam",
  description: "Akgüler Reklam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

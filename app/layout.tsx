import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";

import { Header } from "./_components/Header/Header";

import "./_styles/globals.css";

const sofia = Sofia_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A111.cloud test task",
  description: "Test task for a Frontend developer position",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sofia.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

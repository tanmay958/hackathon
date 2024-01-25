import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-12  bg-[#0E0C17] h-screen w-screen ">
          <LeftBar />

          {children}
          <RightBar />
        </div>
      </body>
    </html>
  );
}

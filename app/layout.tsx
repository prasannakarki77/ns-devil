import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientOnly from "@/components/ClientOnly";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NSDevil ",
  description: "Student Hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClientOnly>
        <Navbar />
        <Toaster position="bottom-left" reverseOrder={false} />
      </ClientOnly>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

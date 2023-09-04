import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientOnly from "@/components/ClientOnly";
import { Toaster } from "react-hot-toast";
import getCurrentUser from "./actions/getCurrentUser";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NSDevil ",
  description: "Student Hub",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <Provider>
        <ClientOnly>
          <Navbar currentUser={currentUser} />
          <Toaster position="bottom-left" reverseOrder={false} />
        </ClientOnly>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}

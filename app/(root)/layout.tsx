import type { Metadata } from "next";

import "../globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "HandLoom",
  description: "An e-commerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-white text-black"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

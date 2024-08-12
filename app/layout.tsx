import type { Metadata } from "next";
import { maitree } from "@/utils/fonts";
import "./globals.css";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Texperience",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(maitree.className, "bg-gray-50")}>{children}</body>
    </html>
  );
}

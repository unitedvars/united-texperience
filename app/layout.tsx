import type { Metadata } from "next";
import { maitree } from "@/utils/fonts";
import "./globals.css";
import clsx from "clsx";
import ProgressBarWrapper from "./components/common/ProgressBarWrapper";

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
      <body className={clsx(maitree.className, "bg-gray-50")}>
        <ProgressBarWrapper />
        {children}
      </body>
    </html>
  );
}

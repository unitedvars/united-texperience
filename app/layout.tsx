import type { Metadata } from "next";
import { Mukta } from "next/font/google";

import "./globals.css";

const mukta = Mukta({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Soberanía",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mukta.className + "  bg-sky-50"}>{children}</body>
    </html>
  );
}

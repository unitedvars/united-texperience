import type { Metadata } from "next";
import { maitree } from "@/utils/fonts";
import "./globals.css";
import clsx from "clsx";
import ProgressBarWrapper from "./components/common/ProgressBarWrapper";
import { GoogleTagManager } from "@next/third-parties/google";
import CookieBanner from "./components/common/CookieBanner";

import "react-datepicker/dist/react-datepicker.css";

export const metadata: Metadata = {
  title: "Texperience",
  description: "",
  verification: {
    google: "1AFwGEC99j7gnCtYv8MSQZCb9FHBqmZ9gcOo1qakQBs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MFD53K6V" />
      <body className={clsx(maitree.className, "bg-gray-50")}>
        <ProgressBarWrapper />
        {children}

        {/* ESTO ES EL BANNER DE COOKIES SE TIENE QUE ABRIR AL CARGAR LA PAGINA, Y ENVIAR EL EVENTO QUE ELIJA EL USUARIO*/}
        {/*<CookieBanner />*/}
      </body>
    </html>
  );
}

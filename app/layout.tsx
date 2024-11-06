import type { Metadata } from "next";
import { maitree } from "@/utils/fonts";
import "./globals.css";
import clsx from "clsx";
import ProgressBarWrapper from "./components/common/ProgressBarWrapper";
import { GoogleTagManager } from "@next/third-parties/google";

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
      <body
        className={clsx(maitree.className, "bg-gray-50", "overflow-x-hidden")}
      >
        <ProgressBarWrapper />
        {children}

        {/*Cookie Banner a componentizar
        <div className="w-4/5 max-w-7xl shadow-lg bg-white rounded-lg p-4 fixed bottom-10 right-[16px] lg:right-[80px]">
          <div>
            <h5
              className={clsx(
                orbitron.className,
                "text-primary-800 text-xl mb-2 transition"
              )}
            >
              This website uses cookies
            </h5>
            <p className={clsx(
                "text-secondary-100 text-1xl font-thin mb-4",
                  archivo.className
              )}>
              We use cookies to improve your experience, analyze website usage, and personalize advertising. By selecting "Accept All", you consent to the use of cookies as described in our <Link className={clsx(
              archivo.className,
              "hover:border-primary-200 pb-1 border-transparent transition border-b text-primary-500"
            )} href={`/en/cookies-policy`}>Cookies Policy</Link> and agree to our Privacy Policy. You can also choose to "Reject All" non-essential cookies or adjust your preferences in "Cookie Settings
            </p>
          </div>
          
          <div className="flex justify-end">
            <ButtonSecondary className="me-4">Reject all</ButtonSecondary>
            <Button> Accept all</Button>
          </div>
        </div>
         */}
      </body>
    </html>
  );
}

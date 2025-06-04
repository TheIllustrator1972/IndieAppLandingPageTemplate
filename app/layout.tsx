import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import {
  appData,
  openGraphMetadata,
  twitterMetadata,
} from "./common/constants";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400", "500", "700"], // optional: choose weights you need
});

export const metadata: Metadata = {
  title: appData.name,
  description: appData.description,
  icons: {
    icon: "/AppLogo/AppLogo.png",
  },
  openGraph: openGraphMetadata,
  twitter: twitterMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>{children}</body>
    </html>
  );
}

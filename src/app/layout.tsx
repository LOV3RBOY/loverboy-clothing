import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Loverboy Clothing - Wear Your Heart",
  description: "Elevated streetwear for the modern romantic. Clothing that speaks to your soul, made for those who dare to love boldly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://ext.same-assets.com/2208276496/2015582364.svg" />
      </head>
      <body className="locked">
        {children}
      </body>
    </html>
  );
}

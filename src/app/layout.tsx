import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const font = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Match Tracker",
  description: "by ModerNik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

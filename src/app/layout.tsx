import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppWrapper } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}

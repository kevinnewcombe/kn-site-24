import "./globals.css";
import { Inter } from "next/font/google";
import { EXAMPLE_PATH, CMS_NAME } from "@/lib/constants";

export const metadata = {
  title: `Kevin Newcombe's site`,
  description: `Kevin Newcombe, Front-end developer`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <main>{children}</main>
      </body>
    </html>
  );
}

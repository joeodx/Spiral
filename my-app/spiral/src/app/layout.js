import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spiral",
  description: "Stop your negative thoughts in their tracks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="my-app\spiral\public\spiral.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

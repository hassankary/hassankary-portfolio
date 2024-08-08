import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hassan Askary - Portfolio",
  description: "Hi, I'm Hassan Askary, a freelance front-end developer. I'm here to turn your website vision into reality with beautifully crafted, responsive designs. Let's create something amazing together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

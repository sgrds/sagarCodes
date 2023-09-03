import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "SagarCodes - Sagar Das a Full-Stack Developer, Designer and Content Creator",
  description:
    "We're a small team that works hard to create successful digital projects, develop creative digital products, and help your business grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="night">
      <body
        className={`${inter.className} bg-base-100 selection:bg-warning selection:text-black`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

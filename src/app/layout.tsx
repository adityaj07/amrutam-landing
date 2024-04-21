import type { Metadata } from "next";
import {
  Inter,
  Montserrat,
  IBM_Plex_Sans,
  Inknut_Antiqua,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/sections/Navbar";

const inter = Inter({ subsets: ["latin"] });
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const inknut_antiqua = Inknut_Antiqua({
  subsets: ["devanagari"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Amrutam",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-auto">
      <body
        className={`${inter.className} antialiased overflow-y-scroll scroll-smooth`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

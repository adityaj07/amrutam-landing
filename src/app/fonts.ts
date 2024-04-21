import { IBM_Plex_Sans, Inknut_Antiqua, Inter, Montserrat } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
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
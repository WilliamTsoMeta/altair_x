import "../app/styles/bootstrap.min.css";
import "../app/styles/animate.min.css";
import "../app/styles/remixicon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Navbar CSS
import "../app/styles/navbar.css";
// Footer CSS
import "../app/styles/footer.css";
// Globals CSS
import "../app/styles/globals.css";
// Responsive CSS
import "../app/styles/responsive.css";

import type { Metadata } from "next";
import { Open_Sans, Jost, Monoton } from "next/font/google";
import ScrollToTop from "@/components/Layouts/ScrollToTop";
import AosAnimation from "@/components/Layouts/AosAnimation";

// For all body text font
const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});
 
// For heading text font
const jost = Jost({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const monoton = Monoton({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-monoton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stax - React Nextjs IT Services & Startup Template",
  description: "React Nextjs IT Services & Startup Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${open_sans.variable} ${jost.variable} ${monoton.variable}`}>
        {children}

        <AosAnimation />

        <ScrollToTop />
      </body>
    </html>
  );
}

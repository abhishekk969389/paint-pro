import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Topbar from "./components/ui/topbar";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";
import SmoothScroll from "./components/ui/smoothscroll";
import { site } from "@/data/index";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: site.brand.brandName.join(" ") + " - " + site.brand.brandSubtitle,
  description: "Professional painting services for homes, offices, and commercial spaces.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <header className="sticky top-0 z-50 w-full flex flex-col bg-white">
            <Topbar />
            <Navbar />
          </header>
          <div className="flex-grow">
            {children}
          </div>
          <Footer/>
        </SmoothScroll>
      </body>
    </html>
  );
}

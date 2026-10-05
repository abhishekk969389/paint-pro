"use client";

import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { FiArrowUpRight } from "react-icons/fi";
import paintData from '../../../../data/paint.json';
import { PaintData } from '../../../../types';

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });
const { quotesection } = paintData as PaintData;

export default function QuoteSec() {
  return (
    <section className={`${poppins.className} relative w-full h-[320px] md:h-[320px] overflow-hidden flex items-center mt-12`}>
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={quotesection.bgImage}
          alt="Get a Quote"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay: deeper on the left for text readability */}
        <div className="absolute inset-0 bg-[#0f1d33]/80 sm:bg-gradient-to-r sm:from-[#0f1d33]/95 sm:via-[#0f1d33]/80 sm:to-[#0f1d33]/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Left Side: Texts */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[13px] md:text-[14px] font-bold tracking-[0.2em] text-[#ff8c00] uppercase">
              {quotesection.badgeText}
            </span>
            <span className="h-[2px] w-12 md:w-16 bg-[#ff8c00]" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.2]">
            {quotesection.headline.line1}
            <br />
            <span className="text-[#ff8c00]">{quotesection.headline.highlight}</span> {quotesection.headline.line2}
          </h2>
        </div>

        {/* Right Side: Button */}
        <div className="md:pr-10 lg:pr-20">
          <Link 
            href={quotesection.button.link}
            className="inline-flex items-center gap-2 bg-[#f48512] text-white font-semibold text-[15px] px-8 py-4 hover:bg-[#e07710] transition-colors shadow-lg"
          >
            {quotesection.button.text}
            <FiArrowUpRight className="w-5 h-5 ml-1 stroke-[2.5]" />
          </Link>
        </div>
        
      </div>
    </section>
  );
}

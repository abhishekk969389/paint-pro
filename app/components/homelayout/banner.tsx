'use client';

import React from 'react';
import Image from 'next/image';
import { HiOutlineShieldCheck } from 'react-icons/hi2';
import { HiOutlineUsers } from 'react-icons/hi';
import { FiClock, FiArrowUpRight } from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';
import { site } from '@/data/index';
import type { PaintBannerData as BannerData } from '@/data/index';
import { BannerFeature } from '@/types/paint';

const banner: BannerData = site.banner;

const iconMap: Record<string, React.ElementType> = {
  HiOutlineShieldCheck,
  HiOutlineUsers,
  FiClock,
};

export default function HeroBanner() {
  if (!banner) return null;
  return (
    <section className="relative w-full bg-white pt-8 pb-16 lg:pt-12 font-sans overflow-hidden">

      {/* 1. TOP TEXT & FORM SECTION */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-4 md:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Left Column: Heading & 3 Feature Badges */}
          <div className="lg:col-span-7 flex flex-col justify-between pb-4">
            <div>
              {/* Badge with red line */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-[3px] bg-[#FF3B1D] rounded-full inline-block"></span>
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#222B38] uppercase">
                  {banner.badgeText}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-[#0D1527] leading-[1.12] tracking-tight">
                {banner.headline.lines[0]} <br />
                {banner.headline.lines[1]} <br />
                {banner.headline.lines[2]} <span className="text-[#FF3B1D]">{banner.headline.highlight}</span>
              </h1>
            </div>

            {/* 3 Circular Icon Highlights */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-8 mt-4">

              {banner.features.map((feature: BannerFeature) => {
                const Icon = iconMap[feature.icon];
                return (
                  <div key={feature.icon} className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-[#FFF1ED] flex items-center justify-center shrink-0 text-[#FF3B1D]">
                      {Icon && <Icon className="w-10 h-10 stroke-[2]" />}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#1A2232] leading-tight max-w-[120px]">
                      {feature.text}
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Right Column: Floating Card Overlapping Image Below */}
          {/* Right Column: Floating Card Overlapping Image Below */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end relative z-30 translate-y-4 sm:translate-y-8 lg:translate-y-12">
            <div className="bg-[#FAF7F2] rounded-3xl p-7 sm:p-8 shadow-xl border border-[#F0EBE1] max-w-[380px] w-full">

              <span className="text-[14px] font-bold uppercase tracking-[0.25em] text-[#69707D] block mb-2">
                {banner.floatingCard.subtitle}
              </span>

              <h2 className="text-2xl sm:text-[26px] md:text-[30px] font-extrabold text-[#0D1527] leading-[1.2]">
                {banner.floatingCard.titleLines[0]} <br />
                {banner.floatingCard.titleLines[1]} <span className="text-[#FF3B1D]">{banner.floatingCard.titleHighlight}</span>
              </h2>

              <div className="w-14 h-[3px] bg-[#FF3B1D] rounded-full my-2"></div>

              <p className="text-sm sm:text-sm md:text-base text-[#525B6A] leading-[1.65] font-normal mb-7">
                {banner.floatingCard.description}
              </p>

              {/* CTA Button */}
              <a
                href={banner.floatingCard.buttonLink}
                className="flex items-center justify-between w-full pl-6 pr-2 py-2.5 rounded-full bg-[#FF3B1D] text-white text-sm font-bold shadow-md shadow-[#FF3B1D]/25 hover:bg-[#e63216] transition-all group"
              >
                <span>{banner.floatingCard.buttonText}</span>
                <div className="w-9 h-9 rounded-full bg-white text-[#FF3B1D] flex items-center justify-center shadow-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <FiArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* 2. FULL WIDTH BANNER IMAGE */}
      <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] bg-neutral-100 z-10">

        {/* Unsplash Painter Image */}
        <Image
          src={banner.heroImage.src}
          alt={banner.heroImage.alt}
          fill
          priority
          className="object-cover object-[center_28%]"
        />

        {/* Bottom Elements: Circular Play Button & Bottom Right Stats */}
        <div className="absolute -bottom-14 sm:-bottom-16 inset-x-0 z-20 w-full h-28 lg:h-[130px]">
          
          {/* Desktop View: Play Button & Stats Grouped and Flush Right */}
          <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-8 z-30">
            
            {/* Circular Play Button */}
            <div className="relative">
              <div className="relative w-[130px] h-[130px] rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-2 flex items-center justify-center">
                
                {/* Rotating Circular Text */}
                <svg
                  className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]"
                  viewBox="0 0 120 120"
                >
                  <path
                    id="circlePath"
                    d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                    fill="none"
                  />
                  <text className="text-[11px] font-bold tracking-[0.28em] fill-[#0D1527] uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      PAINTING <tspan fill="#FF3B1D">•</tspan> PAINTING <tspan fill="#FF3B1D">•</tspan> PAINTING <tspan fill="#FF3B1D">•</tspan>
                    </textPath>
                  </text>
                </svg>

                {/* Inner Play Button */}
                <button
                  type="button"
                  aria-label="Play Video"
                  className="w-[72px] h-[72px] rounded-full bg-[#FF3B1D] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 z-10"
                >
                  <FaPlay className="w-6 h-6 ml-1.5" />
                </button>
              </div>
            </div>

            {/* Bottom Right Stats Bar - Flush against right screen edge */}
            <div className="bg-[#FCF9F5] rounded-l-[32px] rounded-r-none px-10 py-7 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#F4EFE6] border-r-0 flex items-center gap-10">
              {banner.stats.map((stat, idx) => (
                <React.Fragment key={idx}>
                  <div className="text-center">
                    <h4 className="text-[32px] font-extrabold text-[#FF3B1D] tracking-tight leading-none">{stat.value}</h4>
                    <p className="text-[13px] font-semibold text-[#0D1527] mt-2 leading-snug">
                      {stat.labelLines[0]} <br /> {stat.labelLines[1]}
                    </p>
                  </div>
                  {idx < banner.stats.length - 1 && (
                    <div className="w-[1px] h-12 bg-[#E1E4EB]"></div>
                  )}
                </React.Fragment>
              ))}
            </div>

          </div>

          {/* Mobile View: Just Play Button Centered */}
          <div className="lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="relative w-28 h-28 rounded-full bg-white shadow-2xl p-2 flex items-center justify-center">
                <svg
                  className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]"
                  viewBox="0 0 120 120"
                >
                  <path
                    id="circlePathMob"
                    d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                    fill="none"
                  />
                  <text className="text-[10px] font-bold tracking-[0.16em] fill-[#0D1527] uppercase">
                    <textPath href="#circlePathMob" startOffset="0%">
                      PAINTING <tspan fill="#FF3B1D">•</tspan> PAINTING <tspan fill="#FF3B1D">•</tspan> PAINTING <tspan fill="#FF3B1D">•</tspan>
                    </textPath>
                  </text>
                </svg>
                <button
                  type="button"
                  aria-label="Play Video"
                  className="w-16 h-16 rounded-full bg-[#FF3B1D] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 z-10"
                >
                  <FaPlay className="w-5 h-5 ml-1" />
                </button>
            </div>
          </div>

        </div>

      </div>

      {/* Spacer taaki agla section overlap na ho */}
      <div className="h-16 sm:h-20"></div>

    </section>
  );
}
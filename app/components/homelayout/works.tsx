"use client";

import { Poppins } from "next/font/google";
import {
  MdOutlinePhoneInTalk,
  MdOutlineCalendarMonth,
  MdOutlineReceiptLong,
  MdOutlineFormatPaint,
  MdOutlineHome,
  MdAccessTime,
} from "react-icons/md";
import paintData from '../../../data/paint.json';
import { PaintData, WorkStep } from '../../../types';

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const { works } = paintData as PaintData;

const iconMap: Record<string, React.ElementType> = {
  MdOutlinePhoneInTalk,
  MdOutlineCalendarMonth,
  MdOutlineReceiptLong,
  MdOutlineFormatPaint,
  MdOutlineHome,
  MdAccessTime,
};

function Arrow() {
  return (
    <svg viewBox="0 0 80 24" className="h-6 w-20 text-orange-600" fill="none">
      <path d="M2 18 Q 38 2 72 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 6" />
      <path d="M66 5 L76 12 L65 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export default function HowItWorksSection() {
  return (
    <section className={`${poppins.className} relative bg-white mt-8 sm:mt-10 md:mt-12 lg:mt-14`}>
      {/* dotted accents (no brush images) */}
      <div
        className="pointer-events-none absolute right-[22%] top-28 hidden h-24 w-24 opacity-40 lg:block"
        style={{ backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)", backgroundSize: "14px 14px" }}
      />
      <div
        className="pointer-events-none absolute bottom-4 left-6 hidden h-16 w-24 opacity-40 lg:block"
        style={{ backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)", backgroundSize: "14px 14px" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[3px] w-10 rounded-full bg-orange-600" />
            <span className="text-sm font-semibold tracking-[0.2em] text-[#0b1a3a]">{works.badgeText}</span>
          </div>
          <h2 className=" mt-2 text-4xl font-extrabold text-[#0b1a3a] md:text-5xl">
            {works.headline.lines[0]}
            <br />
            <span className="text-orange-600">{works.headline.highlight}</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-[15px] leading-relaxed text-slate-500">
            {works.description}
          </p>
        </div>

        {/* Steps */}
        <div className="mt-8 flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          {works.steps.map((s: WorkStep, i) => {
            const t = works.tones[s.tone];
            const Icon = iconMap[s.icon];
            const SecIcon = s.secondaryIcon ? iconMap[s.secondaryIcon] : null;

            return (
              <div key={s.no} className="contents">
                <div className="flex w-full max-w-[250px] flex-col items-center text-center">
                  <div className="relative">
                    {/* outer dashed ring */}
                    <div className={`flex h-44 w-44 items-center justify-center rounded-full border border-dashed ${t.ring}`}>
                      {/* inner circle */}
                      <div className={`relative flex h-36 w-36 items-center justify-center rounded-full shadow-[0_10px_24px_-8px_rgba(0,0,0,0.12)] ${t.fill}`}>
                        <div className="relative">
                          {Icon && <Icon className={`h-14 w-14 ${s.tone === 'orange' ? 'text-orange-600' : 'text-[#0b1a3a]'}`} />}
                          {(SecIcon || s.secondaryText) && (
                            <span className={`absolute ${s.secondaryText ? 'bottom-[-4px] right-[-8px]' : 'bottom-[-2px] right-[-6px]'} flex h-7 w-7 items-center justify-center rounded-full ${s.secondaryText ? 'bg-orange-600 text-sm font-bold text-white' : 'bg-white ring-2 ring-orange-600'}`}>
                              {SecIcon && <SecIcon className="h-5 w-5 text-orange-600" />}
                              {s.secondaryText && s.secondaryText}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* number badge */}
                    <span className={`absolute -left-1 top-1 flex h-12 w-12 items-center justify-center rounded-full text-base font-bold text-white shadow-md ${t.badge}`}>
                      {s.no}
                    </span>
                  </div>

                  <h3 className="mt-8 text-lg font-bold text-[#0b1a3a]">{s.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-slate-500">{s.text}</p>
                </div>

                {i < works.steps.length - 1 && (
                  <div className="mt-20 hidden shrink-0 lg:block">
                    <Arrow />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
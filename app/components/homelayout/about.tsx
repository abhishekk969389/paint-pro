"use client";

import Image from "next/image";
import { Check, ArrowRight, PaintRoller, PaintBucket, ShieldCheck, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { site } from '@/data/index';
import type { PaintAboutSectionData as AboutData } from '@/data/index';
import { AboutFeature } from '@/types/paint';


const about: AboutData = site.about;

const iconMap: Record<string, React.ElementType> = {
  PaintRoller,
  PaintBucket,
  ShieldCheck,
  Leaf
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function AboutSection({ hideButton = false }: { hideButton?: boolean } = {}) {
  if (!about) return null;
  return (
    <section className={`relative bg-white`}>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1fr_1.1fr_0.85fr] lg:gap-6 lg:px-10"
      >
        {/* LEFT: text */}
        <motion.div variants={fadeInUp}>
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-9 bg-orange-500" />
            <span className="text-sm font-medium tracking-[0.15em] text-[#0b1a3a]">{about.badgeText}</span>
          </div>

          <h2 className="mt-5 text-4xl font-extrabold leading-[1.15] text-[#0b1a3a] md:text-5xl">
            {about.headline.lines[0]}
            <br />
            {about.headline.lines[1]} <span className="text-orange-500">{about.headline.highlight}</span>
          </h2>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-600">
            {about.description}
          </p>

          <ul className="mt-5 space-y-3">
            {about.points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[15px] font-medium text-[#0b1a3a]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500">
                  <Check className="h-4 w-4 text-white" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          {!hideButton && (
            <a
              href={about.buttonLink}
              className="mt-8 inline-flex items-center gap-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 py-3 pl-8 pr-3 font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:brightness-105"
            >
              {about.buttonText}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                <ArrowRight className="h-5 w-5 text-orange-500" />
              </span>
            </a>
          )}
        </motion.div>

        {/* CENTER: images */}
        <motion.div variants={fadeInUp} className="relative mx-auto h-[380px] w-full max-w-[420px] sm:max-w-[560px] sm:h-[520px]">
          {/* brush-stroke / circle decoration */}
         <div className="absolute left-6 sm:left-8 top-8 sm:top-10 h-32 sm:h-44 w-2.5 sm:w-3 rotate-[5.4deg] rounded-full bg-orange-500" />
          <div className="absolute bottom-10 left-6 h-40 w-3/4 -rotate-6 rounded-[50%] bg-orange-50 blur-sm" />

          {/* painter image */}
          <div
            className="absolute left-2 sm:left-6 top-0 h-[88%] sm:h-[92%] w-[65%] sm:w-[58%] overflow-hidden"
            style={{ clipPath: "polygon(14% 0, 100% 0, 86% 100%, 0 100%)" }}
          >
            <Image src={about.images.painter.src} alt={about.images.painter.alt} fill sizes="340px" className="object-cover" priority />
          </div>

          {/* house image */}
          <div
            className="absolute bottom-0 right-0 sm:right-2 h-[55%] sm:h-[62%] w-[52%] sm:w-[44%] overflow-hidden"
            style={{ clipPath: "polygon(12% 0, 100% 0, 88% 100%, 0 100%)" }}
          >
            <Image src={about.images.house.src} alt={about.images.house.alt} fill sizes="260px" className="object-cover" />
          </div>

          {/* navy accent bar */}
          <div className="absolute bottom-16 sm:bottom-24 right-0 sm:right-1 h-32 sm:h-40 w-2.5 sm:w-3 rotate-[5deg] rounded-full bg-[#0b1a3a]" />
        </motion.div>

        {/* RIGHT: feature cards */}
        <motion.div variants={fadeInUp} className="space-y-4 lg:border-l lg:border-slate-100 lg:pl-8">
          {about.features.map((feature: AboutFeature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div key={feature.title} className="flex items-center gap-5 rounded-2xl bg-orange-50/50 p-5 shadow-sm">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-100/70">
                  {Icon && <Icon className="h-8 w-8 text-orange-500" strokeWidth={2} />}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#0b1a3a]">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-snug text-slate-500">{feature.text}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
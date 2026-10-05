"use client";

import Image from "next/image";
import { Crown, BadgeCheck, Users, Clock, Headphones, Paintbrush } from "lucide-react";
import { motion } from "framer-motion";
import { site } from '@/data/index';
import type { PaintAboutPageData as AboutSecData } from '@/data/index';
import { AboutSecFeature } from '@/types/paint';


const aboutsec: AboutSecData = site.aboutSec;

const iconMap: Record<string, React.ElementType> = {
  BadgeCheck,
  Users,
  Clock,
  Headphones,
  Paintbrush
};

export default function AboutSec() {
  if (!aboutsec) return null;
  const FloatingIcon = iconMap[aboutsec.floatingCard.icon];

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

  return (
    <section className={`relative mt-8 sm:mt-10 md:mt-12 lg:mt-14`}>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-[1450px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-stretch"
      >
        
        {/* LEFT: Image Section */}
        <motion.div variants={fadeInUp} className="relative w-full min-h-[400px] h-full">
          {/* Decorative dots top */}
          <div
            className="absolute -top-6 left-1/4 h-20 w-32 opacity-30 z-0"
            style={{ backgroundImage: "radial-gradient(#0b1a3a 2px, transparent 2px)", backgroundSize: "16px 16px" }}
          />
          {/* Main Image */}
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-xl z-10">
            <Image
              src={aboutsec.image.src}
              alt={aboutsec.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {/* Accent strokes (simulated with CSS shapes for aesthetic) */}
          <div className="absolute -left-6 top-8 w-24 h-48 bg-orange-500 rounded-full opacity-20 blur-2xl z-0"></div>
          <div className="absolute -bottom-10 left-10 w-40 h-10 bg-orange-500 rounded-full opacity-30 blur-xl z-0 transform -rotate-12"></div>
        </motion.div>

        {/* RIGHT: Content Section */}
        <motion.div variants={fadeInUp}>
          {/* Badge */}
          <div className="flex items-center gap-3">
            <Crown className="w-5 h-5 text-orange-600" />
            <span className="text-[15px] font-bold text-[#0b1a3a]">{aboutsec.badgeText}</span>
            <span className="h-[2px] w-12 bg-orange-600 ml-2" />
          </div>

          {/* Headline */}
          <h2 className="mt-4 text-4xl lg:text-[46px] font-extrabold leading-[1.1] text-[#0b1a3a]">
            {aboutsec.headline.lines[0]}
            <br />
            {aboutsec.headline.lines[1]}{" "}
            <span className="text-orange-600">{aboutsec.headline.highlight}</span>
          </h2>

          {/* Description */}
          <p className="mt-5 text-[15.5px] leading-relaxed text-slate-500 max-w-[90%]">
            {aboutsec.description}
          </p>

          {/* Features Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {aboutsec.features.map((f: any) => {
              const Icon = iconMap[f.icon];
              const isOrange = f.tone === "orange";
              return (
                <div key={f.title} className={`p-5 rounded-2xl ${isOrange ? 'bg-orange-50' : 'bg-slate-50'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${isOrange ? 'bg-orange-500' : 'bg-[#0b1a3a]'}`}>
                    {Icon && <Icon className="w-5 h-5 text-white" />}
                  </div>
                  <h4 className="text-[15px] font-bold text-[#0b1a3a] leading-tight mb-2">{f.title}</h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{f.text}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom Section: Skills & Floating Card */}
          <div className="mt-10 flex flex-col xl:flex-row items-start gap-8">
            {/* Skills Progress Bars */}
            <div className="w-full xl:w-[55%] space-y-5 mt-2">
              {aboutsec.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[14.5px] font-bold text-[#0b1a3a]">{skill.name}</span>
                    <span className="text-[14.5px] font-extrabold text-[#0b1a3a]">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-[6px] bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-orange-600 rounded-full" 
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Card */}
            <div className="w-full xl:w-[45%]">
              <div className="relative p-6 rounded-2xl bg-white border-2 border-orange-200 shadow-xl border-dashed">
                {/* Icon Badge overlapping border */}
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg transform -rotate-12">
                  {FloatingIcon && <FloatingIcon className="w-6 h-6 text-white" />}
                </div>
                
                <p className="text-[13px] font-semibold text-slate-500 mt-2">
                  {aboutsec.floatingCard.subtitle}
                </p>
                <h3 className="text-xl font-extrabold text-[#0b1a3a] mt-2 leading-tight">
                  {aboutsec.floatingCard.titleLines[0]}
                  <br />
                  {aboutsec.floatingCard.titleLines[1]}{" "}
                  <span className="text-orange-600">{aboutsec.floatingCard.titleHighlight}</span>
                </h3>
              </div>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
}

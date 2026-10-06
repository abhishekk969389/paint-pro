"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, PaintRoller, House, Building2, Brush } from "lucide-react";
import { motion } from "framer-motion";
import { site } from '@/data/index';
import type { PaintServicesData as ServicesData } from '@/data/index';
import { ServiceItem } from '@/types/paint';


const services: ServicesData = site.ourServices;

const iconMap: Record<string, React.ElementType> = {
  PaintRoller,
  House,
  Building2,
  Brush
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

export default function ServicesSection() {
  if (!services) return null;
  return (
    <section className={`bg-white mt-8 sm:mt-10 md:mt-12 lg:mt-14`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"
      >
        {/* LEFT */}
        <motion.div variants={fadeInUp}>
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-12 rounded-full bg-orange-600" />
            <span className="text-sm font-semibold tracking-[0.18em] text-[#0b1a3a]">{services.badgeText}</span>
          </div>

          <h2 className="mt-5 text-4xl font-extrabold leading-[1.15] text-[#0b1a3a] md:text-5xl">
            {services.headline.lines[0]}{" "}
            <span className="text-orange-600">{services.headline.highlight}</span>
          </h2>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-500">
            {services.description}
          </p>

          <a
            href={services.buttonLink}
            className="mt-8 inline-flex items-center gap-10 rounded-full bg-gradient-to-r from-orange-600 to-red-500 py-3 pl-9 pr-3 text-lg font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:brightness-105"
          >
            {services.buttonText}
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <ArrowRight className="h-5 w-5 text-orange-600" />
            </span>
          </a>
        </motion.div>

        {/* RIGHT: service cards */}
        <div className="space-y-5">
          {services.list.map((item: ServiceItem) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div variants={fadeInUp} key={item.title}>
                <Link
                  href={`/service/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className={`group relative flex flex-col items-stretch gap-5 overflow-hidden rounded-xl p-5 shadow-sm md:flex-row md:items-center transition-shadow hover:shadow-md ${item.cardBg}`}
                >
                  <div className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl transition-transform group-hover:scale-105 ${item.iconBg}`}>
                    {Icon && <Icon className="h-10 w-10 text-orange-600" strokeWidth={2} />}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#0b1a3a]">{item.title}</h3>
                    <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-slate-500">{item.text}</p>
                    <ul className="mt-4 space-y-2.5">
                      {item.points.map((p) => (
                        <li key={p} className="flex items-center gap-3 text-[15px] text-[#0b1a3a]">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-600">
                            <Check className="h-3 w-3 text-white" strokeWidth={4} />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* slanted image + accent bar */}
                  <div className="relative h-56 w-full shrink-0 md:h-64 md:w-[300px]">
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ clipPath: "polygon(14% 0, 100% 0, 86% 100%, 0 100%)" }}
                    >
                      <Image src={item.image.src} alt={item.image.alt} fill sizes="300px" className="object-cover" />
                    </div>
                    <span className={`absolute -right-2 top-10 h-36 w-3 rotate-[6deg] rounded-full transition-transform group-hover:scale-110 ${item.bar}`} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
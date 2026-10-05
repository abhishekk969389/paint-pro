"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { site } from '@/data/index';
import type { PaintFaqData as FaqSecData } from '@/data/index';
import { motion } from "framer-motion";

const faqSec: FaqSecData = site.faqSec;

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqSec) return null;

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
    <section className={`mt-8 sm:mt-10 md:mt-12 lg:mt-14 relative`}>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-[1400px] px-6 lg:px-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column - Image with decorators */}
          <motion.div variants={fadeInUp} className="relative h-full">
            {/* Dot Pattern Top Left */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[radial-gradient(#fed7aa_3px,transparent_3px)] [background-size:12px_12px] opacity-70 z-0"></div>
            
            {/* Dot Pattern Bottom Right */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[radial-gradient(#fed7aa_3px,transparent_3px)] [background-size:12px_12px] opacity-70 z-0"></div>

            {/* Background Blob */}
            <div className="absolute top-4 left-4 right-4 bottom-4 bg-[#fff1e3] rounded-3xl -rotate-2 z-0 transform scale-105"></div>

            <div className="relative z-10 rounded-3xl overflow-hidden h-full shadow-xl min-h-[500px]">
              <Image 
                src={faqSec.image.src} 
                alt={faqSec.image.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right Column - Text & Accordion */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-[0.15em] text-orange-500 uppercase">
                {faqSec.badgeText}
              </span>
              <span className="h-[2px] w-12 bg-orange-500" />
            </div>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0b1a3a] md:text-5xl">
              {faqSec.headline.text1} <span className="text-orange-600">{faqSec.headline.highlight}</span>
            </h2>

            <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
              {faqSec.description}
            </p>

            <div className="mt-10 space-y-4">
              {faqSec.faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer ${
                      isOpen ? 'bg-[#fff6f0]' : 'bg-slate-50 hover:bg-slate-100'
                    }`}
                    onClick={() => toggleOpen(index)}
                  >
                    <div className="p-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white transition-colors duration-300 ${
                          isOpen ? 'bg-orange-600' : 'bg-[#0b1a3a]'
                        }`}>
                          ?
                        </span>
                        <h4 className={`text-[15px] sm:text-[16px] font-bold transition-colors duration-300 ${
                          isOpen ? 'text-orange-600' : 'text-[#0b1a3a]'
                        }`}>
                          {faq.q}
                        </h4>
                      </div>
                      <span className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        {isOpen ? (
                          <FiChevronUp className="h-5 w-5 text-orange-600" />
                        ) : (
                          <FiChevronDown className="h-5 w-5 text-[#0b1a3a]" />
                        )}
                      </span>
                    </div>

                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 pt-0 text-[14px] leading-relaxed text-slate-500 ml-10">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

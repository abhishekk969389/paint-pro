"use client";

import Image from "next/image";
import Link from "next/link";
import { MdHome } from "react-icons/md";
import {
  FaPaintRoller,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaRegCalendarAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { site } from '@/data/index';
import type { PaintFooterData as FooterData } from '@/data/index';
import { FooterContact, FooterLink, FooterPost, FooterSocial } from '@/types/paint';
import { motion } from "framer-motion";


const footer: FooterData = site.footer;

const iconMap: Record<string, React.ElementType> = {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
};



function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <h3 className="text-xl font-semibold text-white">{children}</h3>
      <span className="mt-3 block h-[3px] w-14 rounded-full bg-orange-500" />
    </div>
  );
}

export default function Footer() {
  if (!footer) return null;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <footer className={`relative overflow-hidden bg-[#08162b] text-slate-200 mt-8 sm:mt-10 md:mt-12 lg:mt-14`}>
      {/* background photo + dark overlay */}
      <div className="absolute inset-0">
        <Image src={footer.bgImage} alt="" fill sizes="100vw" className="object-cover opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08162b]/70 via-[#08162b]/95 to-[#08162b]" />
      </div>

      {/* right-top brush: put footer-top.png in /public */}
      <Image
        src="/footer-top.png"
        alt=""
        width={280}
        height={173}
        aria-hidden="true"
        className="pointer-events-none absolute right-0 -top-2 hidden w-[140px] select-none md:block lg:w-[190px]"
      />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative mx-auto max-w-[1400px] px-6 pt-14 lg:px-12"
      >
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.1fr]">
          {/* Brand + contact */}
          <motion.div variants={fadeInUp}>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative flex h-10 w-10 md:h-14 md:w-14 items-center justify-center shrink-0">
                <MdHome className="h-10 w-10 md:h-14 md:w-14 text-white" />
                <FaPaintRoller className="absolute -bottom-0.5 right-[-4px] md:-bottom-1 md:right-[-6px] h-3.5 w-3.5 md:h-5 md:w-5 text-orange-500" />
              </span>
              <span className="leading-none">
                <span className="block text-[26px] md:text-4xl font-bold text-white">
                  {footer.brandName[0]}<span className="text-orange-500">{footer.brandName[1]}</span>
                </span>
                <span className="mt-1 block text-[8px] md:text-[11px] tracking-[0.25em] text-slate-300">{footer.brandSubtitle}</span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-slate-300">
              {footer.description}
            </p>

            <ul className="mt-6 space-y-4">
              {footer.contacts.map((c: FooterContact) => {
                const Icon = iconMap[c.icon];
                return (
                  <li key={c.label} className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500">
                      {Icon && <Icon className="h-5 w-5 text-white" />}
                    </span>
                    <span>
                      <span className="block text-[15px] font-semibold text-white">{c.label}</span>
                      <span className="block text-[14.5px] text-slate-300">{c.value}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <Heading>Quick Links</Heading>
            <ul className="space-y-3.5">
              {footer.quickLinks.map((l: FooterLink) => (
                <li key={l.name}>
                  <Link href={l.href} className="flex items-center gap-3 text-[15px] text-slate-200 transition hover:text-orange-400">
                    <FaChevronRight className="h-3 w-3 text-orange-500" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div variants={fadeInUp}>
            <Heading>Our Services</Heading>
            <ul className="space-y-3.5">
              {footer.services.map((s: FooterLink) => (
                <li key={s.name}>
                  <Link href={s.href} className="flex items-center gap-3 text-[15px] text-slate-200 transition hover:text-orange-400">
                    <FaChevronRight className="h-3 w-3 text-orange-500" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Latest Blog Posts */}
          <motion.div variants={fadeInUp}>
            <Heading>Latest Blog Posts</Heading>
            <ul className="space-y-5">
              {footer.posts.map((p: FooterPost) => (
                <li key={p.title}>
                  <Link href={p.href} className="flex items-center gap-4">
                    <span className="relative h-[78px] w-[120px] shrink-0 overflow-hidden rounded-lg">
                      <Image src={p.img} alt={p.title} fill sizes="120px" className="object-cover" />
                    </span>
                    <span>
                      <span className="block text-[14.5px] font-semibold leading-snug text-white">{p.title}</span>
                      <span className="mt-2 flex items-center gap-2 text-[13.5px] text-slate-300">
                        <FaRegCalendarAlt className="h-3.5 w-3.5 text-orange-500" />
                        {p.date}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div variants={fadeInUp} className="mt-14 flex flex-col items-center text-center justify-between gap-5 border-t border-white/10 py-7 sm:flex-row sm:text-left">
          <p className="order-2 sm:order-1 text-[14.5px] text-slate-200">
            {footer.copyright}. All Rights Reserved.powred by Lestow
          </p>

          <div className="order-1 sm:order-2 flex flex-wrap justify-center items-center gap-3 sm:pr-16">
            <span className="mr-2 text-[15px] font-semibold text-white">Follow Us:</span>
            {footer.socials.map((s: FooterSocial) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-orange-500"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* back to top */}
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="hidden sm:flex absolute bottom-6 right-6 h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
      >
        <FaArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
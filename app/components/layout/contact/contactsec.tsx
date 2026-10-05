"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMapPin, FiPhone, FiClock, FiUser, FiMail, FiEdit2 } from "react-icons/fi";
import { RiArrowRightLine, RiArrowDownSLine } from "react-icons/ri";
import { site } from '@/data/index';
import type { PaintContactPageData as ContactSecData } from '@/data/index';
import { motion } from "framer-motion";

const contactSec: ContactSecData = site.contactSec;

const ICONS: Record<string, any> = {
  FiMapPin,
  FiPhone,
  FiClock
};

export default function ContactSection() {
  if (!contactSec) return null;
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const onChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
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

  return (
    <section className={`mt-8 sm:mt-10 md:mt-12 lg:mt-14`}>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-[1400px] px-6 lg:px-10 space-y-20 lg:space-y-28"
      >

        {/* Info & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-stretch">

          {/* Left - Contact Info */}
          <motion.div variants={fadeInUp} className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0b1a3a] mb-8">{contactSec.info.title}</h2>

            <div className="space-y-5">
              {contactSec.info.cards.map((card, i) => {
                const Icon = ICONS[card.icon];
                return (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-xl border border-slate-100 shadow-sm bg-white hover:shadow-md transition-shadow">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-white ${card.active ? 'bg-orange-500 shadow-lg shadow-orange-500/30' : 'bg-[#0b1a3a]'}`}>
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <div>
                      <h4 className="text-[17px] font-bold text-[#0b1a3a] mb-1">{card.title}</h4>
                      <div className="space-y-0.5">
                        {card.textLines.map((line, idx) => (
                          <p key={idx} className="text-[14px] text-slate-500 leading-snug">{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Map */}
          <motion.div variants={fadeInUp} className="mt-6 sm:mt-8 md:mt-10 h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85923192592!2d77.23701088488971!3d28.522404036526275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1786345160037!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              className="rounded-[20px] shadow-2xl border border-slate-800/80 w-full h-full min-h-[450px]"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </motion.div>
        </div>

        {/* Form & Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left - Form */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-[0.15em] text-orange-500 uppercase">
                {contactSec.formSec.badgeText}
              </span>
              <span className="h-[2px] w-12 bg-orange-500" />
            </div>

            <h2 className="mt-4 text-4xl font-extrabold leading-[1.1] text-[#0b1a3a] md:text-[40px]">
              {contactSec.formSec.headline.text1}
              <br className="hidden md:block" />
              {contactSec.formSec.headline.text2} <span className="text-orange-500">{contactSec.formSec.headline.highlight}</span>
            </h2>

            <form onSubmit={onSubmit} className="mt-10 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input name="name" value={form.name} onChange={onChange} placeholder={contactSec.formSec.form.fields.name} required className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-4 px-5 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100" />
                  <FiUser className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
                <div className="relative">
                  <input type="email" name="email" value={form.email} onChange={onChange} placeholder={contactSec.formSec.form.fields.email} required className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-4 px-5 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100" />
                  <FiMail className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
                <div className="relative">
                  <input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder={contactSec.formSec.form.fields.phone} required className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-4 px-5 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100" />
                  <FiPhone className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
                <div className="relative">
                  <select name="subject" value={form.subject} onChange={onChange} required className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 py-4 pl-5 pr-10 text-sm text-slate-400 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100">
                    <option value="" disabled>{contactSec.formSec.form.fields.subject}</option>
                    <option value="quote">Request a Quote</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                  <RiArrowDownSLine className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  placeholder={contactSec.formSec.form.fields.message}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 py-4 px-5 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                />
                <FiEdit2 className="pointer-events-none absolute right-5 top-5 h-4 w-4 text-slate-400" />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-sm font-bold text-white transition hover:bg-orange-600 shadow-[0_10px_30px_-10px_rgba(249,115,22,0.5)]"
              >
                {contactSec.formSec.form.buttonText} <RiArrowRightLine className="h-5 w-5" />
              </button>
            </form>
          </motion.div>

          {/* Right - Image */}
          <motion.div variants={fadeInUp} className="relative h-[500px] lg:h-[600px] w-full rounded-[30px] overflow-hidden shadow-2xl">
            <Image
              src={contactSec.formSec.image.src}
              alt={contactSec.formSec.image.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

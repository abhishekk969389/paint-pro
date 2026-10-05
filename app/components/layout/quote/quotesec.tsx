"use client";

import { useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { FaRegFileAlt, FaPaintRoller, FaHome, FaBuilding } from "react-icons/fa";
import { GiPaintBucket } from "react-icons/gi";
import {
  FiClock,
  FiHeadphones,
  FiUser,
  FiMail,
  FiPhone,
  FiGrid,
  FiMessageSquare,
  FiLock,
  FiArrowRight,
  FiChevronDown,
} from "react-icons/fi";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

import paintData from '../../../../data/paint.json';
import { PaintData } from '../../../../types';

const { quotePageSec } = paintData as PaintData;

const ICONS: Record<string, React.ElementType> = {
  FaRegFileAlt,
  FaPaintRoller,
  FaHome,
  FaBuilding,
  FiClock,
  FiHeadphones,
};

function Field({ icon: Icon, children }: { icon: React.ElementType, children: React.ReactNode }) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
      {children}
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-slate-200 bg-slate-50/60 py-3.5 pl-10 pr-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-orange-400 focus:bg-white";

export default function QuoteSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send `form` to your API route
    console.log(form);
  };

  return (
    <section className={`${poppins.className} mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-4`}>
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 lg:grid-cols-[1.45fr_0.75fr] lg:px-10">
        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.18em] text-orange-600 uppercase">{quotePageSec.badgeText}</span>
            <span className="h-[3px] w-10 rounded-full bg-orange-600" />
          </div>

          <h2 className="mt-4 text-4xl font-extrabold leading-[1.1] text-[#0b1a3a] md:text-5xl">
            {quotePageSec.headline.text1}
            <br />
            <span className="text-orange-600">{quotePageSec.headline.highlight}</span> {quotePageSec.headline.text2}
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-500">
            {quotePageSec.description}
          </p>

          <div className="mt-8 grid grid-cols-1 items-start gap-8 md:grid-cols-[0.55fr_1fr]">
            {/* features */}
            <ul className="space-y-1">
              {quotePageSec.features.map(({ icon, title, text }) => {
                const Icon = ICONS[icon];
                return (
                <li key={title} className="flex items-center gap-4 border-b border-slate-100 py-4 last:border-0">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-100/70">
                    {Icon && <Icon className="h-6 w-6 text-orange-600" />}
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold text-[#0b1a3a]">{title}</span>
                    <span className="block text-[13px] leading-snug text-slate-500">{text}</span>
                  </span>
                </li>
              )})}
            </ul>

            {/* form card */}
            <div className="relative z-10 rounded-2xl bg-white p-7 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.2)] lg:-mt-12 lg:-mb-6">
              <h3 className="text-2xl font-bold text-[#0b1a3a]">
                {quotePageSec.form.title1} <span className="text-orange-600">{quotePageSec.form.titleHighlight}</span>
              </h3>
              <p className="mt-2 text-[13px] text-slate-500">
                {quotePageSec.form.subtitle}
              </p>

              <form onSubmit={onSubmit} className="mt-5 space-y-3.5">
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <Field icon={FiUser}>
                    <input name="name" value={form.name} onChange={onChange} placeholder={quotePageSec.form.fields.name} required className={inputCls} />
                  </Field>
                  <Field icon={FiMail}>
                    <input type="email" name="email" value={form.email} onChange={onChange} placeholder={quotePageSec.form.fields.email} required className={inputCls} />
                  </Field>
                  <Field icon={FiPhone}>
                    <input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder={quotePageSec.form.fields.phone} required className={inputCls} />
                  </Field>
                  <Field icon={FiGrid}>
                    <select name="service" value={form.service} onChange={onChange} required className={`${inputCls} appearance-none pr-9`}>
                      <option value="" disabled>
                        {quotePageSec.form.fields.service}
                      </option>
                      {quotePageSec.services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                  </Field>
                </div>

                <div className="relative">
                  <FiMessageSquare className="pointer-events-none absolute left-3.5 top-4 h-4 w-4 text-slate-500" />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={4}
                    placeholder={quotePageSec.form.fields.message}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 py-3.5 text-sm font-semibold tracking-wider text-white shadow-lg shadow-orange-500/30 transition hover:brightness-105"
                >
                  {quotePageSec.form.buttonText} <FiArrowRight className="h-4 w-4" />
                </button>

                <p className="flex items-center gap-2 pt-1 text-xs text-slate-500">
                  <FiLock className="h-3.5 w-3.5" />
                  {quotePageSec.form.securityText}
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* RIGHT: image + promo */}
        <div className="relative lg:pt-0">
          <span className="absolute -left-3 top-6 hidden h-24 w-4 -rotate-[15deg] rounded-full bg-orange-500 lg:block" />
          <div className="relative h-[420px] overflow-hidden rounded-2xl sm:h-[520px] lg:h-[560px]">
            <Image src={quotePageSec.image.src} alt={quotePageSec.image.alt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" priority />
          </div>

          <div className="relative z-20 -mt-24 rounded-2xl border border-orange-100 bg-[#fff1e3] p-6 shadow-lg lg:-mt-28">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold leading-snug text-[#0b1a3a]">
                  {quotePageSec.card.title1}
                  <br />
                  with <span className="text-orange-600">{quotePageSec.card.highlight}</span>
                </h3>
                <p className="mt-3 max-w-[210px] text-[13px] leading-snug text-slate-600">
                  {quotePageSec.card.text}
                </p>
              </div>
              <span className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm sm:flex">
                <GiPaintBucket className="h-14 w-14 text-orange-600" />
              </span>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              {quotePageSec.card.promoServices.map(({ icon, a, b }) => {
                const Icon = ICONS[icon];
                return (
                <div key={a} className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                    {Icon && <Icon className="h-4 w-4 text-orange-600" />}
                  </span>
                  <span className="text-[12px] font-semibold leading-tight text-[#0b1a3a]">
                    {a}
                    <br />
                    {b}
                  </span>
                </div>
              )})}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
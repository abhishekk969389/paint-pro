"use client";

import { useState } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { site } from '@/data/index';
import type { PaintTestimonialData as TestimonialData } from '@/data/index';
import { TestimonialItem } from '@/types/paint';


const testimonial: TestimonialData = site.testimonialSec;

const PER_PAGE = 3;

export default function TestimonialsSection() {
  const pages = testimonial ? Math.ceil(testimonial.testimonials.length / PER_PAGE) : 0;
  const [page, setPage] = useState(0);

  if (!testimonial) return null;

  const prev = () => setPage((p) => (p - 1 + pages) % pages);
  const next = () => setPage((p) => (p + 1) % pages);
  const visible = testimonial.testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className={`relative overflow-hidden mt-8 sm:mt-10 md:mt-12 lg:mt-14`}>
      {/* right-top brush: put sidebrush.png in /public */}
      <Image
        src="/sidebrush.png"
        alt=""
        width={420}
        height={300}
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden w-[260px] select-none md:block lg:w-[340px]"
        priority
      />

      {/* dotted accent */}
      <div
        className="pointer-events-none absolute left-16 top-24 hidden h-28 w-28 opacity-50 lg:block"
        style={{ backgroundImage: "radial-gradient(#94a3b8 1.8px, transparent 1.8px)", backgroundSize: "24px 24px" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[3px] w-10 rounded-full bg-orange-600" />
            <span className="text-sm font-semibold tracking-[0.2em] text-[#0b1a3a]">{testimonial.badgeText}</span>
            <span className="h-[3px] w-10 rounded-full bg-orange-600" />
          </div>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#0b1a3a] md:text-5xl">
            {testimonial.headline.text} <span className="text-orange-600">{testimonial.headline.highlight}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-500">
            {testimonial.description}
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-8 md:px-14">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonials"
            className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-orange-600 shadow-md transition hover:bg-orange-50 md:flex"
          >
            <FiChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonials"
            className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-orange-600 shadow-md transition hover:bg-orange-50 md:flex"
          >
            <FiChevronRight className="h-6 w-6" />
          </button>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {visible.map((t: TestimonialItem) => (
              <article
                key={t.name}
                className="relative overflow-hidden rounded-2xl bg-white p-7 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.15)]"
              >
                {/* peach corner */}
                <div
                  className="absolute bottom-0 right-0 h-28 w-28 bg-orange-100/80"
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%, 35% 45%)" }}
                />

                <div className="relative flex items-start justify-between">
                  <FaQuoteLeft className="h-9 w-9 text-orange-200" />
                  <div className="flex gap-1 text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="h-4 w-4" />
                    ))}
                  </div>
                </div>

                <p className="relative mt-4 text-[16px] leading-relaxed text-slate-600">“{t.text}”</p>

                <div className="relative mt-6 flex items-center gap-4">
                  <span className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full ring-2 ring-slate-100">
                    <Image src={t.img} alt={t.name} fill sizes="72px" className="object-cover" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#0b1a3a]">{t.name}</h3>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {[...Array(pages)].map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-3 w-3 rounded-full transition ${i === page ? "bg-orange-600" : "bg-slate-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { site } from '@/data/index';
import type { PaintGalleryData as GalleryData } from '@/data/index';
import { GalleryProject } from '@/types/paint';


const gallery: GalleryData = site.gallerySec;

export default function GallerySection({ showAll = false }: { showAll?: boolean }) {
  const [visibleCount, setVisibleCount] = useState(16);

  if (!gallery) return null;

  const displayedProjects = showAll 
    ? gallery.projects.slice(0, visibleCount) 
    : gallery.projects.slice(0, 8);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  return (
    <section className={`relative mt-8 sm:mt-10 md:mt-12 lg:mt-14`}>
      {/* right-top brush image: put sidebrush.png in /public */}
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
        className="pointer-events-none absolute left-16 top-24 hidden h-24 w-24 opacity-40 lg:block"
        style={{ backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)", backgroundSize: "14px 14px" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[3px] w-10 rounded-full bg-orange-600" />
            <span className="text-sm font-semibold tracking-[0.2em] text-[#0b1a3a]">{gallery.badgeText}</span>
          </div>
          <h2 className="mt-2 text-4xl font-extrabold text-[#0b1a3a] md:text-5xl">
            {gallery.headline.lines[0]} <span className="text-orange-600">{gallery.headline.highlight}</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-[15px] leading-relaxed text-slate-500">
            {gallery.description}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {displayedProjects.map((p: GalleryProject, idx: number) => (
            <div key={idx} className="relative aspect-[6/5] overflow-hidden rounded-2xl shadow-sm">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* View More / Load More */}
        {showAll ? (
          visibleCount < gallery.projects.length && (
            <div className="mt-12 flex items-center justify-center gap-6">
              <span className="h-px w-12 bg-slate-300 sm:w-24" />
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-orange-600 to-red-500 px-9 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:brightness-105"
              >
                Load More Images
                <FiArrowRight className="h-5 w-5" />
              </button>
              <span className="h-px w-12 bg-slate-300 sm:w-24" />
            </div>
          )
        ) : (
          <div className="mt-12 flex items-center justify-center gap-6">
            <span className="h-px w-12 bg-slate-300 sm:w-24" />
            <Link
              href={gallery.buttonLink}
              className="inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-orange-600 to-red-500 px-9 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:brightness-105"
            >
              {gallery.buttonText}
              <FiArrowRight className="h-5 w-5" />
            </Link>
            <span className="h-px w-12 bg-slate-300 sm:w-24" />
          </div>
        )}
      </div>
    </section>
  );
}
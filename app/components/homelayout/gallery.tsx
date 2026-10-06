"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { site } from '@/data/index';
import type { PaintGalleryData as GalleryData } from '@/data/index';
import { GalleryProject } from '@/types/paint';

const gallery: GalleryData = site.gallerySec;

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

export default function GallerySection({ showAll = false }: { showAll?: boolean }) {
  const [visibleCount, setVisibleCount] = useState(16);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!gallery) return null;

  const displayedProjects = showAll 
    ? gallery.projects.slice(0, visibleCount) 
    : gallery.projects.slice(0, 8);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayedProjects.length);
    }
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + displayedProjects.length) % displayedProjects.length);
    }
  };

  return (
    <section className={`relative mt-8 sm:mt-10 md:mt-12 lg:mt-14`}>
      {/* right-top brush image: put sidebrush.png in /public */}
      <Image
        src="/sidebrush.png"
        alt=""
        width={200}
        height={190}
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden w-[220px] select-none md:block lg:w-[250px]"
        priority
      />

      {/* dotted accent */}
      <div
        className="pointer-events-none absolute left-16 top-24 hidden h-24 w-24 opacity-40 lg:block"
        style={{ backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)", backgroundSize: "14px 14px" }}
      />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative mx-auto max-w-[1400px] px-6 lg:px-10"
      >
        {/* Heading */}
        <motion.div variants={fadeInUp} className="mx-auto max-w-3xl text-center">
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
        </motion.div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {displayedProjects.map((p: GalleryProject, idx: number) => (
            <motion.div 
              variants={fadeInUp}
              key={idx} 
              className="relative aspect-[6/5] overflow-hidden rounded-2xl shadow-sm cursor-pointer group"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
            </motion.div>
          ))}
        </div>

        {/* View More / Load More */}
        {showAll ? (
          visibleCount < gallery.projects.length && (
            <motion.div variants={fadeInUp} className="mt-12 flex items-center justify-center gap-2 sm:gap-6">
              <span className="h-px w-8 bg-slate-300 sm:w-24" />
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-orange-600 to-red-500 px-6 sm:px-9 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:brightness-105"
              >
                Load More Images
                <FiArrowRight className="h-5 w-5" />
              </button>
              <span className="h-px w-8 bg-slate-300 sm:w-24" />
            </motion.div>
          )
        ) : (
          <motion.div variants={fadeInUp} className="mt-12 flex items-center justify-center gap-2 sm:gap-6">
            <span className="h-px w-8 bg-slate-300 sm:w-24" />
            <Link
              href={gallery.buttonLink}
              className="inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-orange-600 to-red-500 px-6 sm:px-9 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:brightness-105"
            >
              {gallery.buttonText}
              <FiArrowRight className="h-5 w-5" />
            </Link>
            <span className="h-px w-8 bg-slate-300 sm:w-24" />
          </motion.div>
        )}
      </motion.div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a1a1a]/95 p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 sm:top-6 right-4 sm:right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={closeLightbox}
          >
            <FiX className="h-5 w-5" />
          </button>

          {/* Prev button */}
          <button 
            className="absolute left-2 sm:left-8 top-1/2 z-50 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={prevImage}
          >
            <FiChevronLeft className="h-6 w-6" />
          </button>

          {/* Next button */}
          <button 
            className="absolute right-2 sm:right-8 top-1/2 z-50 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={nextImage}
          >
            <FiChevronRight className="h-6 w-6" />
          </button>

          {/* Image Container */}
          <div className="relative flex h-[70vh] sm:h-[85vh] w-full max-w-5xl items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={displayedProjects[lightboxIndex].src}
              alt={displayedProjects[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
            {/* Caption matching reference screenshot */}
            <div className="absolute bottom-[-10px] sm:bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#463a32] px-6 py-2 shadow-xl">
              <p className="whitespace-nowrap text-[13px] sm:text-sm font-bold text-white">{displayedProjects[lightboxIndex].alt || "Gallery Image"}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
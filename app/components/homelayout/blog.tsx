"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

import { site } from '@/data/index';
import type { PaintBlogData as BlogData } from '@/data/index';
import { BlogPost } from '@/types/paint';


const blog: BlogData = site.ourBlogs;

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

export default function BlogSection({ hideButton = false, maxPosts = 3 }: { hideButton?: boolean, maxPosts?: number } = {}) {
  if (!blog) return null;
  const postsToShow = blog.posts.slice(0, maxPosts);

  return (
    <section className={`relative mt-8 sm:mt-10 md:mt-12 lg:mt-14`}>
      {/* right-top brush image: put sidebrush.png in /public */}
      <Image
        src="/sidebrush.png"
        alt=""
        width={420}
        height={300}
        aria-hidden="true"
        className="pointer-events-none absolute right-0  top-0 hidden w-[260px] select-none md:block lg:w-[340px]"
        priority
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
            <span className="h-[3px] w-12 rounded-full bg-orange-600" />
            <span className="text-sm font-semibold tracking-[0.2em] text-[#0b1a3a]">{blog.badgeText}</span>
          </div>
          <h2 className="mt-2 text-4xl font-extrabold text-[#0b1a3a] md:text-5xl">
            {blog.headline.lines[0]} <span className="text-orange-600">{blog.headline.highlight}</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-[15px] leading-relaxed text-slate-500">
            {blog.description}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {postsToShow.map((p: BlogPost, index: number) => (
            <motion.article variants={fadeInUp} key={`${p.title}-${index}`} className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_-12px_rgba(15,23,42,0.15)]">
              <div className="relative aspect-[16/11]">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                {/* date badge */}
                <div className="absolute left-4 top-4 flex h-[72px] w-[66px] flex-col items-center justify-center rounded-xl bg-white shadow-md">
                  <span className="text-2xl font-extrabold leading-none text-orange-600">{p.day}</span>
                  <span className="mt-1 text-xs font-bold leading-none text-[#0b1a3a]">{p.month}</span>
                  <span className="mt-1 text-[11px] font-medium leading-none text-slate-500">{p.year}</span>
                </div>
              </div>

              <div className="p-6">
                <span className={`inline-block rounded-full px-3.5 py-1.5 text-[11px] font-semibold tracking-wide ${p.tagStyle}`}>
                  {p.tag}
                </span>
                <h3 className="mt-4 text-xl font-bold leading-snug text-[#0b1a3a]">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{p.text}</p>

                <Link href={p.href} className="mt-5 inline-flex items-center gap-3 font-semibold text-orange-600">
                  Read More
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 text-white">
                    <FiArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Blog */}
        {!hideButton && (
          <motion.div variants={fadeInUp} className="mt-8 flex items-center justify-center gap-2 sm:gap-6">
            <span className="h-px w-8 bg-slate-300 sm:w-28" />
            <Link
              href={blog.buttonLink}
              className="inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-orange-600 to-red-500 px-6 sm:px-9 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:brightness-105"
            >
              {blog.buttonText}
              <FiArrowRight className="h-5 w-5" />
            </Link>
            <span className="h-px w-8 bg-slate-300 sm:w-28" />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiUser } from "react-icons/fi";
import { site } from '@/data/index';
import type { PaintBlogSidebarData as BlogSidebarData } from '@/data/index';
import { motion } from "framer-motion";


const blogSidebar: BlogSidebarData = site.blogSidebar;

export default function BlogDetailSection({ detail }: { detail: any }) {
  if (!detail) return null;

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
    <section className={` mt-8 sm:mt-10 md:mt-12 lg:mt-14`}>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="mx-auto max-w-[1400px] px-6 lg:px-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 lg:gap-16 items-start">
          
          {/* Main Content (Left) */}
          <motion.div variants={fadeInUp} className="space-y-8">
            
            {/* Top Image */}
            <div className="relative w-full aspect-[16/9] rounded-[30px] overflow-hidden shadow-sm">
              <Image 
                src={detail.mainImage}
                alt={detail.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-6 left-6 bg-orange-600 text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wide">
                {detail.tag}
              </div>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-6 text-sm font-semibold text-[#0b1a3a]">
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4 text-orange-600" />
                {detail.date}
              </div>
              <div className="flex items-center gap-2">
                <FiUser className="w-4 h-4 text-orange-600" />
                {detail.author}
              </div>
            </div>

            {/* Title & Content */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0b1a3a] leading-tight mb-6">
                {detail.title}
              </h1>
              <p className="text-[15px] leading-loose text-slate-500 mb-10">
                {detail.content1}
              </p>

              <h3 className="text-2xl font-bold text-orange-600 mb-4">
                {detail.subtitle}
              </h3>
              <p className="text-[15px] leading-loose text-slate-500">
                {detail.content2}
              </p>
            </div>

          </motion.div>

          {/* Sidebar (Right) */}
          <motion.div variants={fadeInUp} className="space-y-12 lg:sticky lg:top-8">
            
            {/* Latest Posts */}
            <div>
              <h3 className="text-[22px] font-extrabold text-[#0b1a3a] mb-8">
                {blogSidebar.latestPostsTitle}
              </h3>
              <div className="space-y-6">
                {blogSidebar.latestPosts.map((post, i) => (
                  <Link href={`/blog/${post.slug}`} key={i} className="flex items-center gap-5 group">
                    <div className="relative w-[85px] h-[85px] rounded-xl overflow-hidden shrink-0">
                      <Image 
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-[#0b1a3a] leading-snug group-hover:text-orange-600 transition-colors line-clamp-2 mb-2">
                        {post.title}
                      </h4>
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                        {post.date}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>


          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

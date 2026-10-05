"use client";

import Image from "next/image";
import Link from "next/link";
import { PaintBucket, Home, Paintbrush, FileImage, Hammer, Building2, ArrowRight } from "lucide-react";
import { site } from '@/data/index';
import type { PaintServicesPageData as ServiceSecData } from '@/data/index';
import { motion } from "framer-motion";
import { ServiceSecCard } from '@/types/paint';


const servicesec: ServiceSecData = site.servicesSec;

const iconMap: Record<string, React.ElementType> = {
    PaintBucket,
    Home,
    Paintbrush,
    FileImage,
    Hammer,
    Building2
};

export default function ServiceSec() {
    if (!servicesec) return null;

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
        <section className={`relative mt-8 sm:mt-10 md:mt-12 lg:mt-14`}>
            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="mx-auto max-w-[1400px] px-6 lg:px-10"
            >

                {/* Header Section */}
                <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-6">
                    <div className="flex items-center justify-center gap-4">
                        <span className="h-[2px] w-12 bg-orange-200" />
                        <span className="text-sm font-semibold tracking-[0.2em] text-[#0b1a3a]">{servicesec.badgeText}</span>
                        <span className="h-[2px] w-12 bg-orange-200" />
                    </div>
                    <h2 className="mt-2 text-4xl font-extrabold text-[#0b1a3a] md:text-5xl">
                        {servicesec.headline.lines[0]} <span className="text-orange-600">{servicesec.headline.highlight}</span>
                    </h2>
                    <p className="mx-auto mt-2 max-w-2xl text-[15px] leading-relaxed text-slate-500">
                        {servicesec.description}
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesec.cards.map((card: ServiceSecCard) => {
                        const Icon = iconMap[card.icon];

                        return (
                            <motion.div variants={fadeInUp} key={card.title}>
                                <Link
                                    href={`/service/${card.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                className="block group relative bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300"
                            >
                                {/* Image Section */}
                                <div className="relative w-full h-[240px] overflow-hidden">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Icon Badge overlapping */}
                                <div className="absolute top-[204px] left-6 w-[72px] h-[72px] bg-[#ffeed5] rounded-2xl shadow-sm flex items-center justify-center z-20 transition-transform group-hover:-translate-y-1">
                                    {Icon && <Icon className="w-8 h-8 text-orange-500" strokeWidth={1.75} />}
                                </div>

                                {/* Content Section */}
                                <div className="pt-12 px-8 pb-8">
                                    <h3 className="text-xl font-bold text-[#0b1a3a] mb-3 group-hover:text-orange-600 transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="text-[14.5px] text-slate-500 leading-relaxed mb-6">
                                        {card.text}
                                    </p>

                                    <div
                                        className="inline-flex items-center text-[14px] font-bold text-orange-600 hover:text-[#0b1a3a] transition-colors"
                                    >
                                        Read More
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
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

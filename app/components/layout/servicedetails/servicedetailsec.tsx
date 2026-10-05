"use client";

import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { FiCheckCircle, FiMessageSquare, FiTool, FiDroplet, FiFileText, FiFile, FiChevronRight } from "react-icons/fi";
import paintData from '../../../../data/paint.json';
import { PaintData } from '../../../../types';
import ProcessSection from './processsec';

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const { serviceSidebar, serviceDetails } = paintData as PaintData;

const ICONS: Record<string, any> = {
  FiMessageSquare,
  FiTool,
  FiDroplet,
  FiCheckCircle,
  FiFileText,
  FiFile
};

export default function ServiceDetailSection({ slug }: { slug: string }) {
  // If the service doesn't exist, fallback to interior-painting for demonstration
  const detail = serviceDetails[slug] || serviceDetails['interior-painting'];

  return (
    <section className={`${poppins.className} mt-8 sm:mt-10 md:mt-12 lg:mt-14`}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 lg:gap-16 items-start">
          
          {/* Main Content (Left) */}
          <div className="space-y-12">
            
            {/* Top Image & Intro */}
            <div>
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-[30px] overflow-hidden shadow-lg mb-8">
                <Image 
                  src={detail.mainImage} 
                  alt={detail.title.text1}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  priority
                />
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1a3a] mb-4">
                {detail.title.text1} <span className="text-orange-500">{detail.title.highlight}</span>
              </h2>
              
              <h3 className="text-[20px] font-bold text-[#0b1a3a] mb-5">{detail.subtitle}</h3>

              <div className="space-y-4">
                {detail.content.map((p, i) => (
                  <p key={i} className="text-[15px] leading-relaxed text-slate-500">{p}</p>
                ))}
              </div>
            </div>

            {/* Service Features */}
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1a3a] mb-6">
                {detail.features.title.text1} <span className="text-orange-500">{detail.features.title.highlight}</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-[15px] leading-relaxed text-slate-500 mb-6">
                    {detail.features.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {detail.features.list.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[14px] font-semibold text-slate-600">
                        <FiCheckCircle className="h-[18px] w-[18px] text-orange-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="relative w-full h-[400px] rounded-[30px] overflow-hidden shadow-lg">
                  <Image 
                    src={detail.features.image} 
                    alt="Features"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar (Right) */}
          <div className="space-y-10 lg:sticky lg:top-8">
            
            {/* All Services */}
            <div className="bg-slate-50 rounded-[30px] p-8">
              <h3 className="text-2xl font-extrabold text-[#0b1a3a] mb-8 relative">
                {serviceSidebar.allServicesTitle}
                <span className="absolute -bottom-3 left-0 w-12 h-[3px] bg-orange-500 rounded-full" />
              </h3>
              
              <ul className="mt-8 space-y-3">
                {serviceSidebar.servicesList.map((svc) => {
                  const isActive = svc.slug === slug;
                  return (
                    <li key={svc.slug}>
                      <Link 
                        href={`/service/${svc.slug}`}
                        className={`flex items-center justify-between px-4 py-3 rounded-2xl border transition-all ${
                          isActive 
                            ? "bg-white border-white shadow-md" 
                            : "bg-transparent border-slate-200 hover:bg-white hover:border-white hover:shadow-sm"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative w-14 h-[42px] rounded-lg overflow-hidden shrink-0">
                            <Image src={svc.image} alt={svc.name} fill className="object-cover" sizes="50px" />
                          </div>
                          <span className={`text-[15px] font-bold ${isActive ? "text-orange-500" : "text-[#0b1a3a]"}`}>
                            {svc.name}
                          </span>
                        </div>
                        <FiChevronRight className={`h-5 w-5 ${isActive ? "text-orange-500" : "text-slate-400"}`} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Download Section */}
            <div className="bg-slate-50 rounded-[30px] p-8">
              <h3 className="text-2xl font-extrabold text-[#0b1a3a] mb-8 relative">
                {serviceSidebar.downloadTitle}
                <span className="absolute -bottom-3 left-0 w-12 h-[3px] bg-orange-500 rounded-full" />
              </h3>

              <ul className="mt-8 space-y-4">
                {serviceSidebar.downloads.map((dl, i) => {
                  const Icon = ICONS[dl.icon];
                  return (
                    <li key={i}>
                      <a href={dl.link} className="flex items-center justify-between px-6 py-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all group">
                        <div className="flex items-center gap-3 text-[#0b1a3a] group-hover:text-orange-500 transition-colors">
                          {Icon && <Icon className="h-5 w-5" />}
                          <span className="text-[14px] font-bold">{dl.name}</span>
                        </div>
                        <div className="w-8 h-8 rounded-md bg-orange-500 text-white flex items-center justify-center transition-transform group-hover:scale-105">
                          {/* Screenshot shows a right arrow here instead of download, but user provided an arrow. I'll use ArrowRight or ChevronRight */}
                          <FiChevronRight className="h-5 w-5" />
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>

        </div>

        {/* Full Width Process Section below Sidebar & Main Content */}
        <ProcessSection processData={detail.process} />
      </div>
    </section>
  );
}

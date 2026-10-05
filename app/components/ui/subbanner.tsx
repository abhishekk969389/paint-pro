import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { site } from '@/data/index';
import type { PaintSubBannersData as SubBannersData } from '@/data/index';
import { SubbannerItem } from '@/types/paint';


const subbanners: SubBannersData = site.subBanners;

interface SubbannerProps {
  pageKey: string;
}

export default function Subbanner({ pageKey }: SubbannerProps) {
  if (!subbanners) return null;
  const data: SubbannerItem = (subbanners as any)[pageKey];

  if (!data) return null;

  return (
    <div className={`relative h-[300px] md:h-[360px] w-full overflow-hidden flex items-center`}>
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={data.bgImage} 
          alt={data.title} 
          fill 
          sizes="100vw" 
          className="object-cover object-center brightness-[0.4]" 
          priority
        />
        {/* Subtle gradient overlay to make text pop more on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          {data.title}
        </h1>
        <div className="mt-6 flex items-center gap-4">
          <span className="h-6 w-1.5 bg-red-600" />
          <div className="flex items-center text-[15px] font-medium text-slate-300">
            {data.breadcrumbs.map((crumb, index) => (
              <div key={crumb.label} className="flex items-center">
                {index > 0 && <FaChevronRight className="mx-3 text-[11px] text-slate-400" />}
                <Link 
                  href={crumb.href} 
                  className={`hover:text-white transition ${index === data.breadcrumbs.length - 1 ? "text-white" : ""}`}
                >
                  {crumb.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

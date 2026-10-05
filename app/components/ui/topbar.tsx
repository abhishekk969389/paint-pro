import React from 'react';
import { FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { site } from '@/data/index';
import type { PaintTopbarData as TopbarData } from '@/data/index';
import { TopbarLink } from '@/types/paint';
import { MdOutlineMailOutline } from 'react-icons/md';

const topbar: TopbarData = site.topbar;

const platformIcons: Record<string, React.ReactNode> = {
  facebook: <FaFacebookF />,
  instagram: <FaInstagram />,
  youtube: <FaYoutube />,
  linkedin: <FaLinkedinIn />,
};

const Topbar = () => {
  if (!topbar) return null;
  return (
    <div className="bg-[#0B2F4C] text-white py-2 px-4 md:px-8 flex  flex-col md:flex-row justify-between items-center text-sm font-medium">
      <div className="flex items-center space-x-2 mb-0 md:mb-0">
        <FaMapMarkerAlt className="text-[#F97316] text-base md:text-lg shrink-0" />
        <span className="text-xs md:text-sm text-center">{topbar.welcomeMessage}</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <MdOutlineMailOutline className="text-[#F97316] text-lg" />
          <span>{topbar.timing}</span>
        </div>
        <div className="hidden md:block h-5 w-px bg-gray-500/50"></div>
        <div className="flex items-center space-x-3">
          {topbar.socialLinks.map((link: any, index) => (
            <a
              key={index}
              href={link.url}
              className="bg-white text-[#0B2F4C] p-1.5 rounded-full hover:bg-[#F97316] hover:text-white transition-colors"
            >
              {platformIcons[link.platform]}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;

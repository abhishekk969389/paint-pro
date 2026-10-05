import React from 'react';
import { FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import paintData from '../../../data/paint.json';
import { PaintData, TopbarLink } from '../../../types';

const { topbar } = paintData as PaintData;

const platformIcons: Record<string, React.ReactNode> = {
  facebook: <FaFacebookF />,
  instagram: <FaInstagram />,
  youtube: <FaYoutube />,
  linkedin: <FaLinkedinIn />,
};

const Topbar = () => {
  return (
    <div className="bg-[#0B2F4C] text-white py-2 px-4 md:px-8 flex  flex-col md:flex-row justify-between items-center text-sm font-medium">
      <div className="flex items-center space-x-2 mb-2 md:mb-0">
        <FaMapMarkerAlt className="text-[#F97316] text-lg" />
        <span>{topbar.welcomeMessage}</span>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <FaClock className="text-[#F97316] text-lg" />
          <span>{topbar.timing}</span>
        </div>
        <div className="hidden md:block h-5 w-px bg-gray-500/50"></div>
        <div className="flex items-center space-x-3">
          {topbar.socialLinks.map((link: TopbarLink, index) => (
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

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaChevronDown } from 'react-icons/fa';
import data from '../../../data/paint.json';
import { PaintData } from '../../../types';

const appData = data as PaintData;
const { navbar } = appData;

const Navbar = () => {
  return (
    <div className="bg-white py-4 px-4 md:px-8 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt={navbar.logo.alt}
            width={240}
            height={70}
            className="h-auto w-auto max-h-[80px]"
            priority
          />
        </Link>
      </div>

      <div className="hidden lg:flex items-center space-x-8">
        {navbar.links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className={`flex items-center font-bold text-base transition-colors py-2 ${
              link.active 
                ? 'text-[#F97316] border-b-[3px] border-[#F97316]' 
                : 'text-[#0B2F4C] hover:text-[#F97316]'
            }`}
          >
            {link.label}
            {link.hasDropdown}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center space-x-6 border-l border-gray-200 pl-6">
        <a
          href={navbar.contactButton.url}
          className="bg-[#F97316] text-white px-6 py-2.5 rounded-full font-bold flex items-center space-x-3 hover:bg-[#ea580c] transition-colors shadow-lg shadow-orange-500/30"
        >
          <div className="bg-white text-[#F97316] p-2 rounded-full">
            <FaPhoneAlt className="text-sm" />
          </div>
          <span className="text-lg">{navbar.contactButton.phone}</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

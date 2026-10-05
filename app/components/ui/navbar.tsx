"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPhoneAlt, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import type { PaintHeaderData as HeaderData } from '@/data/index';
import { site } from '@/data/index';
import { motion } from "framer-motion";

const navbar: HeaderData = site.navbar;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  if (!navbar) return null;

  const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
      className="bg-white py-4 px-4 md:px-8 flex justify-between items-center relative gap-4"
    >
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt={navbar.logo.alt}
            width={240}
            height={70}
            className="h-auto w-auto max-h-[50px] md:max-h-[80px] max-w-[180px] md:max-w-none"
            priority
          />
        </Link>
      </div>

      <div className="hidden lg:flex items-center space-x-8">
        {navbar.links.map((link, index) => {
          const isActive = link.url === '/' ? pathname === '/' : pathname?.startsWith(link.url);
          return (
            <Link
              key={index}
              href={link.url}
              className={`flex items-center font-bold text-base transition-colors py-2 border-b-[3px] ${
                isActive 
                  ? 'text-[#F97316] border-[#F97316]' 
                  : 'text-[#0B2F4C] border-transparent hover:text-[#F97316] hover:border-[#F97316]'
              }`}
            >
              {link.label}
              {link.hasDropdown}
            </Link>
          );
        })}
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

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-[#0B2F4C] focus:outline-none p-2"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl z-50 lg:hidden flex flex-col border-t border-gray-100">
          {navbar.links.map((link, index) => {
            const isActive = link.url === '/' ? pathname === '/' : pathname?.startsWith(link.url);
            return (
              <Link
                key={index}
                href={link.url}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-4 font-bold text-base border-b border-gray-50 ${
                  isActive ? 'text-[#F97316]' : 'text-[#0B2F4C] hover:text-[#F97316]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="px-6 py-6">
            <a
              href={navbar.contactButton.url}
              className="bg-[#F97316] text-white px-6 py-3 rounded-full font-bold flex items-center justify-center space-x-3 shadow-lg shadow-orange-500/30 w-full"
            >
              <div className="bg-white text-[#F97316] p-2 rounded-full">
                <FaPhoneAlt className="text-sm" />
              </div>
              <span className="text-lg">{navbar.contactButton.phone}</span>
            </a>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;

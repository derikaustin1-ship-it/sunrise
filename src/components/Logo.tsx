import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'footer' | 'compact';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`} aria-label="Sunrise Public School Home">
      {/* Sunrise Graphic Mark */}
      <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600 p-0.5 shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle sun rays background */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-50 via-amber-50 to-white" />
          
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 relative z-10">
            {/* Sun rays */}
            <circle cx="20" cy="18" r="8" fill="url(#sun-grad)" />
            <path d="M20 4V8M20 28V32M6 18H10M30 18H34M10 8L13 11M27 25L30 28M10 28L13 25M27 11L30 8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            
            {/* Open book motif */}
            <path d="M12 28C14.5 26.5 17.5 26.5 20 28C22.5 26.5 25.5 26.5 28 28V20C25.5 18.5 22.5 18.5 20 20C17.5 18.5 14.5 18.5 12 20V28Z" fill="#F97316" stroke="#EA580C" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M20 20V28" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
            
            {/* Upward growth spark */}
            <path d="M20 12L21.5 15L24.5 15.5L22 17.5L23 20.5L20 19L17 20.5L18 17.5L15.5 15.5L18.5 15L20 12Z" fill="#38BDF8" />
            
            <defs>
              <linearGradient id="sun-grad" x1="20" y1="10" x2="20" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FBBF24" />
                <stop offset="1" stopColor="#F97316" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <span className={`font-heading font-extrabold tracking-tight leading-none ${variant === 'footer' ? 'text-white text-xl' : 'text-[#172033] text-xl group-hover:text-orange-600'} transition-colors`}>
          SUNRISE
        </span>
        <span className={`text-[10px] font-semibold tracking-wider uppercase leading-snug ${variant === 'footer' ? 'text-amber-300' : 'text-orange-600'}`}>
          Public School
        </span>
      </div>
    </Link>
  );
};

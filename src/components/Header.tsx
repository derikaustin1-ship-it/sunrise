import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Campus', path: '/campus' },
  { name: 'Student Life', path: '/student-life' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#172033] text-white text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 text-slate-300">
            <span className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              Peelamedu, Coimbatore, Tamil Nadu
            </span>
            <span className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              +91 98765 12345
            </span>
            <span className="text-amber-300/90 bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-500/30 font-medium text-[11px]">
              Pre-Primary to Grade 12 • Co-Educational Day School
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Help Desk</Link>
            <span className="text-slate-600">|</span>
            <Link to="/admissions" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors">Admissions 2026-27 Open</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-[#FFFDF7] py-4 border-b border-orange-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-orange-50 text-orange-600 font-semibold shadow-xs'
                      : 'text-slate-700 hover:text-orange-600 hover:bg-orange-50/50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Primary CTA Button (Desktop) */}
          <div className="hidden xl:flex items-center gap-3">
            <Link
              to="/admissions"
              className="btn-primary text-sm shadow-md hover:shadow-orange-500/25 px-5 py-2.5 rounded-full flex items-center gap-2"
            >
              <span>Apply / Enquire</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <Link
              to="/admissions"
              className="bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-orange-600 transition-colors"
            >
              Apply
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-2xl text-slate-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Menu Overlay */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-b border-orange-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pb-3 border-b border-slate-100">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-orange-50 text-orange-600 font-semibold border-l-4 border-orange-500'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-orange-600'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              ))}
            </div>

            <div className="pt-3 flex flex-col gap-2">
              <Link
                to="/admissions"
                className="w-full btn-primary py-3 rounded-xl flex items-center justify-center gap-2 text-base font-semibold shadow-lg shadow-orange-500/20"
              >
                <span>Apply / Enquire Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="text-center pt-2 text-xs text-slate-500">
                Peelamedu, Coimbatore • +91 98765 12345
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Globe, Share2, PlayCircle, MessageCircle, Heart } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#172033] text-slate-300 relative overflow-hidden border-t-4 border-orange-500">
      {/* Decorative Top Accent Light Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand */}
          <div className="space-y-5">
            <Logo variant="footer" />
            <p className="text-sm text-slate-400 leading-relaxed">
              At Sunrise Public School, we empower young minds to learn with purpose, grow with confidence, and lead with character.
            </p>
            <div className="inline-block bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
              <span className="text-xs font-semibold text-amber-300 block mb-1">CBSE-Aligned Learning Concept</span>
              <span className="text-xs text-slate-400">Co-Educational • Pre-Primary to Grade 12</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#social" aria-label="Sunrise Social" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-orange-500 hover:text-white flex items-center justify-center text-slate-400 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#social" aria-label="Sunrise Updates" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-orange-500 hover:text-white flex items-center justify-center text-slate-400 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#social" aria-label="Sunrise Video Channel" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-orange-500 hover:text-white flex items-center justify-center text-slate-400 transition-colors">
                <PlayCircle className="w-4 h-4" />
              </a>
              <a href="#social" aria-label="Sunrise Network" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-orange-500 hover:text-white flex items-center justify-center text-slate-400 transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: School Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-white tracking-wide border-b border-orange-500/30 pb-2 inline-block">
              School
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  About Sunrise
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  Academics Curriculum
                </Link>
              </li>
              <li>
                <Link to="/campus" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  Campus & Facilities
                </Link>
              </li>
              <li>
                <Link to="/student-life" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  Student Life & Clubs
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Admissions Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-white tracking-wide border-b border-orange-500/30 pb-2 inline-block">
              Admissions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/admissions" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Admission Process
                </Link>
              </li>
              <li>
                <Link to="/admissions#enquiry-form" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Online Enquiry Form
                </Link>
              </li>
              <li>
                <Link to="/admissions#campus-visit" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Book Campus Visit
                </Link>
              </li>
              <li>
                <Link to="/contact#faq" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Contact Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-white tracking-wide border-b border-orange-500/30 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-amber-400 transition-colors">
                  {SCHOOL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-sky-400 transition-colors">
                  {SCHOOL_INFO.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <Link to="/admissions" className="btn-yellow text-xs w-full py-2.5 rounded-xl font-semibold justify-center">
                Admissions 2026 Open — Apply
              </Link>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Sunrise Public School. All rights reserved.
          </div>
          
          {/* Explicit Portfolio Demo Banner */}
          <div className="bg-amber-500/10 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full font-medium flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
            <span>Portfolio Demo — Fictional School</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

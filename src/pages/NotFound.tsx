import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, Home as HomeIcon } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center bg-sun-rays">
      <div className="max-w-md mx-auto space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-orange-100 shadow-xl relative overflow-hidden">
        
        {/* Sun illustration badge */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-300 via-orange-400 to-orange-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-orange-500/30 animate-float">
          <Compass className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="font-heading font-extrabold text-5xl text-orange-500 block">404</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Oops! This Page Took a Different Route.
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            "Let's get you back to where the learning begins."
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/" className="btn-primary w-full sm:w-auto text-sm px-6 py-3">
            <HomeIcon className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link to="/about" className="btn-outline w-full sm:w-auto text-sm px-6 py-3">
            <span>Explore Our School</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};

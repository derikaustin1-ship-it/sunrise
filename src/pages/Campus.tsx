import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Bus, Monitor, FlaskConical 
} from 'lucide-react';
import { CAMPUS_FACILITIES } from '../data/schoolData';

export const Campus: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="bg-sun-rays py-12 md:py-20 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3.5 py-1.5 rounded-full">
            Modern Educational Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Campus & Facilities
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Designed to foster curiosity, safety, active play, and collaborative learning in Peelamedu, Coimbatore.
          </p>
        </div>
      </section>

      {/* CAMPUS OVERVIEW HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
              <Monitor className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-slate-900">Interactive Classrooms</h3>
              <p className="text-xs text-slate-500">Smart digital panels & ergonomic seating</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-slate-900">Modern STEM Labs</h3>
              <p className="text-xs text-slate-500">Physics, Chemistry & Biology suites</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-slate-900">24/7 CCTV & Security</h3>
              <p className="text-xs text-slate-500">Monitored entry & trained campus guards</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <Bus className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-slate-900">GPS Bus Fleet</h3>
              <p className="text-xs text-slate-500">Serving Coimbatore residential zones</p>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITY CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
            Campus Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Spaces Engineered for Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAMPUS_FACILITIES.map((facility, idx) => (
            <div key={idx} className="sunrise-card overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 text-orange-700 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {facility.badge}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-heading font-bold text-xl text-slate-900">{facility.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SAFETY & TRANSPORT */}
      <section className="bg-warm-cream py-16 border-y border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
                Safety & Well-being
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Student Safety is Our Top Priority
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We believe that learning flourishes when students feel secure. Sunrise maintains strict safety protocols across campus premises and transport services.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold text-sm text-slate-900">Monitored Entry & Campus CCTV</h3>
                    <p className="text-xs text-slate-600">Visitor authentication, gated entry, and full CCTV coverage across public hallways and perimeters.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200">
                  <Bus className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold text-sm text-slate-900">GPS-Tracked School Bus Network</h3>
                    <p className="text-xs text-slate-600">Speed-regulated buses accompanied by female bus attendants and live parent location updates.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80" 
                  alt="Sunrise campus safety and green walkway" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CAMPUS CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Schedule a Personal Campus Tour
          </h2>
          <p className="text-orange-50 text-base max-w-xl mx-auto">
            Experience the warmth of our classrooms and tour our laboratories in person.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/admissions#campus-visit" className="btn-secondary bg-slate-950 hover:bg-slate-900 text-white">
              <span>Book Your Visit Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

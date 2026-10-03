import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Award, Trophy, Star, ShieldCheck
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/schoolData';

export const Achievements: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="bg-sun-rays py-12 md:py-20 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-100 px-3.5 py-1.5 rounded-full">
            Student Milestones & Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Celebrating Progress, Not Just Prizes
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Honoring academic leaps, athletic achievements, creative innovation, and social impact across all grades.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-warm-cream rounded-3xl p-8 border border-amber-200/70 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-orange-600">250+</div>
            <div className="font-heading font-semibold text-slate-800 text-sm mt-1">Student Projects</div>
            <div className="text-xs text-slate-500">STEM & Creative Expos</div>
          </div>
          <div>
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-amber-600">40+</div>
            <div className="font-heading font-semibold text-slate-800 text-sm mt-1">Annual Activities</div>
            <div className="text-xs text-slate-500">Cultural & Academic Events</div>
          </div>
          <div>
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-sky-600">15+</div>
            <div className="font-heading font-semibold text-slate-800 text-sm mt-1">Inter-School Events</div>
            <div className="text-xs text-slate-500">Regional & District Meets</div>
          </div>
          <div>
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-600">100%</div>
            <div className="font-heading font-semibold text-slate-800 text-sm mt-1">Participation Goal</div>
            <div className="text-xs text-slate-500">Every Child Included</div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
            Featured Recognitions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Recent Accomplishments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach) => (
            <div key={ach.id} className="sunrise-card p-6 text-left flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-orange-100 text-orange-700">
                    {ach.category}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{ach.year}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">{ach.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{ach.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-amber-600 flex items-center gap-1">
                  <Award className="w-4 h-4 text-amber-500" />
                  {ach.badge}
                </span>
                <span className="text-slate-400 text-[11px]">Sunrise Public School</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECOGNITION PHILOSOPHY */}
      <section className="bg-warm-cream py-16 border-y border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">Personal Growth Charts</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Recognizing individual effort, consistency, and improvements rather than comparing students against each other.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">Balanced Excellence</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Celebrating artistic creations, scientific prototypes, and sportsmanship with equal pride.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">Character Citations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Monthly badges awarded for empathy, environmental responsibility, and helpful campus behavior.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Help Your Child Reach Their Potential
          </h2>
          <p className="text-orange-100 text-base max-w-xl mx-auto">
            Join the Sunrise family and nurture your child's innate strengths.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/admissions" className="btn-secondary bg-slate-950 text-white">
              <span>Start Admission Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

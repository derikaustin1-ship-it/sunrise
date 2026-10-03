import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Compass, Heart, ShieldCheck, Flame, Smile, Award,
  Target, Eye
} from 'lucide-react';
import { CORE_VALUES } from '../data/schoolData';

export const About: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="bg-sun-rays py-12 md:py-20 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3.5 py-1.5 rounded-full">
            Our Identity & Purpose
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About Sunrise Public School
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Nurturing curious thinkers, confident communicators, and compassionate citizens in Coimbatore, Tamil Nadu.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5 text-left">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Founded on the Promise of Bright Futures
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Sunrise Public School was established with a singular vision: to create an educational ecosystem where academic rigor coexists seamlessly with joy, exploration, and character building.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Over the past 18 years, our campus in Peelamedu, Coimbatore has grown from a humble primary learning center into a thriving day school catering to over 2,000 students from Pre-Primary through Grade 12.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <div className="bg-warm-cream px-4 py-3 rounded-2xl border border-amber-200">
                <span className="block font-heading font-extrabold text-2xl text-orange-600">2008</span>
                <span className="text-xs font-medium text-slate-600">Established in Coimbatore</span>
              </div>
              <div className="bg-warm-cream px-4 py-3 rounded-2xl border border-amber-200">
                <span className="block font-heading font-extrabold text-2xl text-amber-600">2,000+</span>
                <span className="text-xs font-medium text-slate-600">Active Students</span>
              </div>
              <div className="bg-warm-cream px-4 py-3 rounded-2xl border border-amber-200">
                <span className="block font-heading font-extrabold text-2xl text-sky-600">120+</span>
                <span className="text-xs font-medium text-slate-600">Dedicated Educators</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80" 
                alt="Sunrise Public School campus in Coimbatore" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="bg-warm-cream py-16 border-y border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl p-8 border border-orange-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-slate-900">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To be a beacon of progressive, child-centric learning that inspires students to embrace curiosity, act with integrity, and become empathetic leaders in a rapidly evolving global society.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-amber-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-slate-900">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To provide a vibrant, safe, and inclusive learning environment with structured academic pathways, modern technology, active sports, and values-based mentorship that unlocks every child's full potential.
            </p>
          </div>

        </div>
      </section>

      {/* 4. PRINCIPAL'S MESSAGE (DR. ANANYA RAO) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-4 text-center space-y-4">
              <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-orange-400 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" 
                  alt="Dr. Ananya Rao - Principal of Sunrise Public School" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900">Dr. Ananya Rao</h3>
                <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide">Principal & Educational Director</p>
                <p className="text-[11px] text-slate-400 mt-1">Ph.D. in Education Management • 22+ Yrs Experience</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
                Leadership Message
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                "Believing in the Infinite Potential of Every Child"
              </h2>

              <p className="text-slate-600 text-base leading-relaxed italic">
                "Welcome to Sunrise Public School. Education is not merely the transmission of facts from textbooks to exam sheets; it is the spark that ignites lifelong curiosity, resilience, and personal confidence."
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At Sunrise, our educators treat every classroom as a laboratory of discovery. We encourage students to ask 'why' and 'how', to embrace challenges without fear of failure, and to work collaboratively with their peers. Our goal is to see our graduates step into the world as knowledgeable, compassionate leaders who lead with character and empathy.
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Sunrise Public School, Coimbatore</span>
                <span className="text-orange-600 font-semibold">Learn Today. Lead Tomorrow.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
            Guiding Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Core Values
          </h2>
          <p className="text-slate-600 text-base">
            The foundational principles that shape our character curriculum and daily school interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div key={idx} className="sunrise-card p-6 text-left space-y-3">
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${val.color}`}>
                {val.iconName === 'Compass' && <Compass className="w-5 h-5" />}
                {val.iconName === 'Heart' && <Heart className="w-5 h-5" />}
                {val.iconName === 'ShieldCheck' && <ShieldCheck className="w-5 h-5" />}
                {val.iconName === 'Flame' && <Flame className="w-5 h-5" />}
                {val.iconName === 'Smile' && <Smile className="w-5 h-5" />}
                {val.iconName === 'Award' && <Award className="w-5 h-5" />}
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">{val.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHAT MAKES SUNRISE DIFFERENT */}
      <section className="bg-warm-cream py-16 border-y border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
              The Sunrise Edge
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Makes Sunrise Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">CBSE-Aligned Rigor</h3>
              <p className="text-xs text-slate-600 leading-relaxed">A structured curriculum focused on conceptual understanding, inquiry, and analytical reasoning.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">Holistic Personality Development</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Equal emphasis on sports, public speaking, visual arts, and digital robotics skills.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">Individual Student Care</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Balanced teacher-student ratio ensuring every child receives personalized attention and encouragement.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">Warm & Inclusive Community</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Collaborative parent-teacher communication with transparent progress tracking and active workshops.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ABOUT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Experience Sunrise Public School
          </h2>
          <p className="text-orange-100 text-base max-w-xl mx-auto">
            Schedule a personal walk-through of our campus facilities and meet our academic mentors.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link to="/admissions" className="btn-secondary bg-slate-950 hover:bg-slate-900 text-white">
              <span>Apply for Admission</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

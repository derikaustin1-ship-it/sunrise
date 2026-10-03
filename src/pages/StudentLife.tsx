import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Trophy, Music, Paintbrush, Heart, 
  Smile, Flag
} from 'lucide-react';
import { CLUBS } from '../data/schoolData';

export const StudentLife: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="bg-sun-rays py-12 md:py-20 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-100 px-3.5 py-1.5 rounded-full">
            Vibrant Co-Curricular Culture
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Student Life Beyond Classrooms
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Where friendships flourish, talents blossom, and every student finds their unique spark.
          </p>
        </div>
      </section>

      {/* CLUBS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
            30+ Co-Curricular Clubs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Find Your Passion
          </h2>
          <p className="text-slate-600 text-base">
            From robotics programming to classical choir, Sunrise clubs encourage students to explore diverse interests.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLUBS.map((club) => (
            <div key={club.id} className="sunrise-card p-6 space-y-3 text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                {club.category}
              </span>
              <h3 className="font-heading font-bold text-lg text-slate-900">{club.name}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{club.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPORTS & FITNESS ACADEMY */}
      <section className="bg-warm-cream py-16 border-y border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5 text-left">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
                Athletics & Physical Well-being
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Sunrise Sports Academy
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Physical fitness and sportsmanship are integral to our daily timetable. Professional coaches train students in athletics, basketball, badminton, football, cricket, and chess.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-orange-500" />
                  <span>Annual Sports Carnival</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
                  <Flag className="w-4 h-4 text-amber-500" />
                  <span>Inter-House Tournaments</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-sky-500" />
                  <span>District Level Athletics</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
                  <Smile className="w-4 h-4 text-emerald-500" />
                  <span>Morning Fitness Routine</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80" 
                  alt="Sunrise Sports Academy Ground" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 right-4 bg-orange-500 text-white font-heading font-bold text-xs px-4 py-2 rounded-full shadow-lg">
                100% Student Participation Goal
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ARTS, MUSIC & CELEBRATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="sunrise-card p-6 space-y-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <Music className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900">Music & Performing Arts</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Vocal choir, keyboard, guitar, traditional Carnatic vocal, and theatrical drama rehearsals preparing students for regional inter-school showcases.
            </p>
          </div>

          <div className="sunrise-card p-6 space-y-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Paintbrush className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900">Visual Arts & Crafts</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sketches, oil painting, pottery, mural making, and digital graphics workshops guided by passionate resident art mentors.
            </p>
          </div>

          <div className="sunrise-card p-6 space-y-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900">Community Outreach</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Student Eco-Warriors lead recycling drives, neighborhood literacy initiatives, and tree plantation projects around Peelamedu.
            </p>
          </div>

        </div>
      </section>

      {/* STUDENT LIFE CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Discover a Place Where Every Child Belongs
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Experience our vibrant campus culture during an interactive campus tour.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/admissions" className="btn-primary">
              <span>Apply for Admission</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

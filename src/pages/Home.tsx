import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, Palette, Lightbulb as LightIcon, Zap, CheckCircle2, 
  ChevronRight, Award, Trophy, Phone, Mail, 
  Calendar, BookOpen, Cpu, FlaskConical, Music, Paintbrush, 
  Leaf, Mic, Star
} from 'lucide-react';
import { 
  SCHOOL_INFO, QUICK_STATS, LEARNING_EXPERIENCE, ACADEMIC_STAGES, 
  CLUBS, NEWS_ITEMS, TESTIMONIALS, ACHIEVEMENTS, CAMPUS_FACILITIES 
} from '../data/schoolData';

export const Home: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-12 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-12 md:py-16 bg-sun-rays border-b border-orange-100/60">
        {/* Subtle SVG Sunray Background Graphic */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gradient-to-bl from-amber-300/30 via-orange-400/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Trust Strip Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-xs sm:text-sm font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                <span>{SCHOOL_INFO.trustStrip}</span>
              </div>

              {/* Main Hero Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#172033] tracking-tight leading-[1.15]">
                Learn Today.{' '}
                <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                  Lead Tomorrow.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                "At Sunrise Public School, every child is encouraged to discover their strengths, explore new ideas and grow into a confident learner and responsible future leader."
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link to="/about" className="btn-primary text-base px-6 py-3.5 shadow-lg shadow-orange-500/25">
                  <span>Explore Our School</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/admissions" className="btn-outline text-base px-6 py-3.5 bg-white/80">
                  <span>Start an Enquiry</span>
                </Link>
              </div>

              {/* Highlights strip below hero text */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-orange-200/60 max-w-lg">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span>CBSE-Aligned</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Co-Ed Campus</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>30+ Activities</span>
                </div>
              </div>

            </div>

            {/* Right Hero Visual Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80" 
                    alt="Happy students collaborating in bright Sunrise classroom"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                </div>

                {/* Floating Badge 1: Community & Joy */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-orange-100 flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
                    ★
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Vibrant Community</div>
                    <div className="text-sm font-bold text-slate-800">Coimbatore, Tamil Nadu</div>
                  </div>
                </div>

                {/* Floating Badge 2: Admissions Badge */}
                <div className="absolute -top-4 -right-4 bg-amber-400 text-slate-900 font-heading font-bold text-xs px-4 py-2 rounded-full shadow-lg border border-amber-300 transform rotate-2">
                  Admissions 2026-27 Open!
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. HOMEPAGE — QUICK STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {QUICK_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 text-center border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-400 to-amber-400 group-hover:h-2 transition-all" />
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-orange-600 tracking-tight">
                {stat.value}
              </div>
              <div className="font-heading font-semibold text-slate-800 text-sm sm:text-base mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOMEPAGE — WELCOME SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-warm-cream rounded-3xl p-6 sm:p-10 lg:p-12 border border-amber-200/70 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                  alt="Teacher guiding young Sunrise students in interactive project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-3 rounded-2xl font-heading font-bold text-xs shadow-md">
                18+ Years of Educational Excellence
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
                Welcome to Sunrise
              </span>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Where Every Child Gets a Chance to Shine
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                "At Sunrise, we believe education should do more than prepare students for examinations. It should help them become curious thinkers, confident communicators and compassionate members of their community."
              </p>

              {/* 3 Small Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold mb-2">
                    1
                  </div>
                  <h3 className="font-heading font-semibold text-slate-900 text-sm">Learn with Purpose</h3>
                  <p className="text-xs text-slate-500 mt-1">Deep conceptual clarity and practical curiosity.</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-2">
                    2
                  </div>
                  <h3 className="font-heading font-semibold text-slate-900 text-sm">Grow with Confidence</h3>
                  <p className="text-xs text-slate-500 mt-1">Encouraging self-expression and resilience.</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center font-bold mb-2">
                    3
                  </div>
                  <h3 className="font-heading font-semibold text-slate-900 text-sm">Lead with Character</h3>
                  <p className="text-xs text-slate-500 mt-1">Values-driven integrity and social empathy.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/about" className="btn-secondary text-sm">
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. HOMEPAGE — LEARNING EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
            Our Learning Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Learning That Sparks Curiosity
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We blend experiential academics with creative problem-solving so every student thrives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEARNING_EXPERIENCE.map((item) => (
            <div key={item.id} className="sunrise-card p-6 text-left space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.accentColor} border`}>
                  {item.iconName === 'Sparkles' && <Sparkles className="w-6 h-6" />}
                  {item.iconName === 'Palette' && <Palette className="w-6 h-6" />}
                  {item.iconName === 'Lightbulb' && <LightIcon className="w-6 h-6" />}
                  {item.iconName === 'Zap' && <Zap className="w-6 h-6" />}
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-orange-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore Methodology</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HOMEPAGE — ACADEMIC JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider bg-sky-100 px-3 py-1 rounded-full">
            Nurturing Continuous Growth
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Every Stage. Every Step. Every Possibility.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A continuous educational continuum designed around academic depth and personal progression.
          </p>
        </div>

        {/* Academic Journey Stages Stack/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {ACADEMIC_STAGES.map((stage, idx) => (
            <div 
              key={stage.id} 
              className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-orange-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 relative group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">0{idx + 1}</span>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${stage.badgeColor}`}>
                    {stage.grades}
                  </span>
                </div>
                
                <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-orange-600 transition-colors">
                  {stage.title}
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {stage.focus}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1.5">
                {stage.highlights.slice(0, 2).map((h, i) => (
                  <div key={i} className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link to="/academics" className="btn-primary">
            <span>Explore Complete Academics Curriculum</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. HOMEPAGE — CAMPUS */}
      <section className="bg-warm-cream py-16 border-y border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
                World-Class Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                A Campus Full of Possibilities
              </h2>
            </div>
            <Link to="/campus" className="btn-outline text-sm bg-white self-start md:self-auto">
              <span>Take a Campus Tour</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Campus Collage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAMPUS_FACILITIES.slice(0, 3).map((facility, idx) => (
              <div key={idx} className="sunrise-card overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 text-orange-700 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {facility.badge}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-heading font-bold text-lg text-slate-900">{facility.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOMEPAGE — STUDENT LIFE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
              Beyond Academics
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              School Life Beyond the Classroom
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Education at Sunrise reaches into playing fields, art canvases, debate stages, and community projects where lifelong passions are discovered.
            </p>

            {/* Categories Pills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              {['Sports', 'Music', 'Dance', 'Art', 'Clubs', 'Competitions', 'Leadership', 'Field Trips'].map((cat, i) => (
                <div key={i} className="bg-white p-2.5 rounded-xl border border-slate-200 text-center text-xs font-semibold text-slate-700 hover:border-orange-400 hover:text-orange-600 transition-colors">
                  {cat}
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link to="/student-life" className="btn-primary">
                <span>Discover Student Life</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] relative">
              <img 
                src="https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80" 
                alt="Sunrise sports and student activities" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>

            {/* Floating Banner Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-heading font-extrabold text-sm sm:text-base px-6 py-3 rounded-full shadow-xl border-2 border-white whitespace-nowrap animate-glow">
              Learn. Play. Create. Belong.
            </div>
          </div>

        </div>
      </section>

      {/* 8. HOMEPAGE — CLUBS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
            Co-Curricular Clubs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Find Your Spark
          </h2>
          <p className="text-slate-600 text-base">
            Over 30 student-led interest groups that nurture talent, curiosity, and teamwork.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CLUBS.map((club) => (
            <div key={club.id} className="sunrise-card p-5 space-y-3 text-left">
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${club.color}`}>
                  {club.iconName === 'Cpu' && <Cpu className="w-5 h-5" />}
                  {club.iconName === 'FlaskConical' && <FlaskConical className="w-5 h-5" />}
                  {club.iconName === 'Paintbrush' && <Paintbrush className="w-5 h-5" />}
                  {club.iconName === 'Music' && <Music className="w-5 h-5" />}
                  {club.iconName === 'BookOpen' && <BookOpen className="w-5 h-5" />}
                  {club.iconName === 'Leaf' && <Leaf className="w-5 h-5" />}
                  {club.iconName === 'Trophy' && <Trophy className="w-5 h-5" />}
                  {club.iconName === 'Mic' && <Mic className="w-5 h-5" />}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  {club.category}
                </span>
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">{club.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{club.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. HOMEPAGE — ACHIEVEMENTS */}
      <section className="bg-warm-cream py-16 border-y border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
              Student Recognition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Celebrating Progress, Not Just Prizes
            </h2>
            <p className="text-slate-600 text-base">
              Honoring resilience, effort, academic milestones, and social contributions across all grades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACHIEVEMENTS.slice(0, 3).map((ach) => (
              <div key={ach.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-orange-300 hover:shadow-md transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-orange-100 text-orange-700">
                    {ach.category}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{ach.year}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">{ach.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{ach.description}</p>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-amber-600">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>{ach.badge}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/achievements" className="btn-outline text-sm bg-white">
              <span>View All Student Achievements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. HOMEPAGE — NEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
              Latest Happenings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Life at Sunrise
            </h2>
          </div>
          <Link to="/gallery" className="btn-outline text-sm self-start sm:self-auto">
            <span>Explore Photo Gallery</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ITEMS.map((news) => (
            <div key={news.id} className="sunrise-card overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{news.date}</span>
                    <span>•</span>
                    <span>{news.readTime}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 hover:text-orange-600 transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {news.description}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link to="/gallery" className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1">
                  <span>Read Story</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. HOMEPAGE — TESTIMONIALS */}
      <section className="bg-gradient-to-b from-orange-50/50 to-amber-50/60 py-16 border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
              Parent Community Voices
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Growing Together
            </h2>
            <p className="text-slate-600 text-base">
              Hear what our warm parent community says about the Sunrise learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-6 border border-orange-100 shadow-sm text-left flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-orange-300" />
                  <div>
                    <h3 className="font-heading font-bold text-sm text-slate-900">{t.name}</h3>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. HOMEPAGE — ADMISSIONS CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Subtle Background Art */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6 text-left">
            <span className="inline-block bg-white/20 backdrop-blur-md text-white font-heading font-semibold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/30">
              Admissions Open 2026-27
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to Begin the Journey?
            </h2>

            <p className="text-base sm:text-xl text-orange-50 font-normal leading-relaxed">
              "Discover a school environment where your child can learn, explore and grow with confidence."
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link to="/admissions" className="btn-secondary text-base px-7 py-3.5 bg-slate-950 hover:bg-slate-900 shadow-xl">
                <span>Admissions Enquiry</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/admissions#campus-visit" className="btn-yellow text-base px-7 py-3.5 shadow-xl">
                <span>Book a Campus Visit</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 13. HOMEPAGE — FINAL CONTACT QUICK STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-slate-900">
              Have Questions? We're Here to Help.
            </h2>
            <p className="text-slate-600 text-sm">
              Connect with our admissions desk or drop by our Peelamedu campus.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-semibold bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200">
              <Phone className="w-4 h-4 text-orange-500" />
              <span>{SCHOOL_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-semibold bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200">
              <Mail className="w-4 h-4 text-sky-500" />
              <span>{SCHOOL_INFO.email}</span>
            </div>
            <Link to="/contact" className="btn-primary text-sm">
              <span>Contact Sunrise</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

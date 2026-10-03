import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, CheckCircle2, Laptop, 
  TrendingUp, Award
} from 'lucide-react';
import { ACADEMIC_STAGES } from '../data/schoolData';

export const Academics: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="bg-sun-rays py-12 md:py-20 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3.5 py-1.5 rounded-full">
            CBSE-Aligned Educational Approach
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Academics That Inspire Excellence
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A structured, inquiry-based curriculum designed around conceptual clarity, practical discovery, and exam readiness.
          </p>
        </div>
      </section>

      {/* ACADEMIC PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-warm-cream rounded-3xl p-8 sm:p-12 border border-amber-200/70 shadow-xs space-y-6">
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
              Our Academic Pedagogy
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Learning Beyond Rote Memorization
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              At Sunrise Public School, we follow a structured educational framework that aligns with modern CBSE standards while integrating international best practices in experiential learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-heading font-bold text-lg text-slate-900">Conceptual Depth</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Ensuring students understand the fundamental 'why' behind mathematical formulas and scientific principles.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-heading font-bold text-lg text-slate-900">Interdisciplinary Connections</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Linking science, literature, history, and digital coding through integrated thematic projects.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-heading font-bold text-lg text-slate-900">Continuous Evaluation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Formative assessments, lab practicals, and creative portfolios alongside periodic term examinations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC STAGES DETAILED DEEP-DIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider bg-sky-100 px-3 py-1 rounded-full">
            Educational Continuum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Academic Stages at Sunrise
          </h2>
          <p className="text-slate-600 text-base">
            Detailed view of our age-appropriate academic wings from foundational years to senior graduation.
          </p>
        </div>

        <div className="space-y-8">
          {ACADEMIC_STAGES.map((stage, index) => (
            <div 
              key={stage.id} 
              id={stage.id}
              className={`sunrise-card p-6 sm:p-8 flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
            >
              <div className="lg:w-1/2 relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] w-full">
                <img src={stage.image} alt={stage.title} className="w-full h-full object-cover" />
                <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full border ${stage.badgeColor}`}>
                  {stage.grades}
                </span>
              </div>

              <div className="lg:w-1/2 space-y-4 text-left">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Stage 0{index + 1}
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                  {stage.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {stage.description}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="font-heading font-semibold text-xs text-slate-400 uppercase tracking-wide">Key Focus Areas:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {stage.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENTIAL LEARNING & TECH IN EDUCATION */}
      <section className="bg-warm-cream py-16 border-y border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Experiential Learning */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-slate-900">Experiential & Lab Learning</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Concepts come alive when students test theories in our Physics, Chemistry, Biology, and Math laboratories. Field trips, eco-projects, and outdoor science explorations anchor theoretical learning in daily life.
              </p>
              <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Hands-on laboratory experiments every week</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Subject-oriented field excursions & botanical walks</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Annual Innovation & Science Exhibition</li>
              </ul>
            </div>

            {/* Technology in Education */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-slate-900">Technology & Digital Skills</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From interactive smart displays in classrooms to coding modules starting in middle school, we equip students with the digital fluency necessary for 21st-century careers.
              </p>
              <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-500" /> Smart interactive boards in all classrooms</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-500" /> Coding & basic AI logic modules</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-500" /> 3D Printing & Robotics lab workshops</li>
              </ul>
            </div>
          </div>

          {/* Assessment & Future Pathways */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
                <h4 className="font-heading font-bold text-lg text-slate-900">Assessment & Progress Tracking</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe assessments should measure growth rather than generate stress. Periodic unit tests, project presentations, and parent-teacher consultations offer clear insights into each child's academic journey.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-purple-600" />
                <h4 className="font-heading font-bold text-lg text-slate-900">Future Pathways & Career Guidance</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Senior secondary students receive dedicated entrance exam orientation (JEE, NEET, CUET, CA Foundation) alongside guidance for top university admissions across India.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ACADEMICS CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Have Questions About Our Curriculum?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Our academic counselors are happy to explain stage-wise subject choices and learning support programs.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/admissions" className="btn-primary">
              <span>Enquire for Admission</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

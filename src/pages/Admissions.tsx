import React, { useState } from 'react';
import { 
  CheckCircle2, FileText, Calendar, Send, User, Mail, Phone, AlertCircle
} from 'lucide-react';
import { Accordion } from '../components/Accordion';
import { FAQS } from '../data/schoolData';

export const Admissions: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    grade: 'Grade 1',
    phone: '',
    email: '',
    visitDate: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent Name is required.';
    if (!formData.studentName.trim()) newErrors.studentName = 'Student Name is required.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate polished API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const admissionsFaqs = FAQS.filter(f => f.category === 'admissions' || f.category === 'general');

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="bg-sun-rays py-12 md:py-20 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3.5 py-1.5 rounded-full">
            Admissions Open for Academic Session 2026-27
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Your Child's Journey Starts Here
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover a welcoming educational home in Peelamedu, Coimbatore where curiosity is celebrated and character is built.
          </p>
        </div>
      </section>

      {/* 2. WHY SUNRISE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
            Why Parents Choose Sunrise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Right Environment for Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="sunrise-card p-6 space-y-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900">CBSE-Aligned Rigor</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Structured academic standards focusing on deep conceptual comprehension, analytical reasoning, and competitive readiness.
            </p>
          </div>

          <div className="sunrise-card p-6 space-y-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900">Holistic Mentorship</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Over 30 clubs, competitive sports academies, leadership councils, and visual arts to foster rounded confidence.
            </p>
          </div>

          <div className="sunrise-card p-6 space-y-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900">Safe & Caring Campus</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Modern smart classrooms, GPS-enabled transport, infirmary care, and a warm, approachable faculty.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ADMISSION PROCESS (5 STEPS) */}
      <section className="bg-warm-cream py-16 border-y border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
              Simple Step-by-Step
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              5-Step Admission Process
            </h2>
            <p className="text-slate-600 text-base">
              A transparent, hassle-free admission journey designed to welcome your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Submit Enquiry', desc: 'Fill the online form or connect with our helpdesk.' },
              { step: '02', title: 'Campus Visit', desc: 'Take a guided tour of our classrooms and facilities.' },
              { step: '03', title: 'Student Interaction', desc: 'Friendly informal interaction to assess learning readiness.' },
              { step: '04', title: 'Submit Documents', desc: 'Submit birth certificate, academic records & photos.' },
              { step: '05', title: 'Admission Confirmed', desc: 'Complete fee payment & receive official welcome kit.' },
            ].map((st, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-3 relative group">
                <div className="space-y-2">
                  <span className="font-heading font-extrabold text-2xl text-orange-500">{st.step}</span>
                  <h3 className="font-heading font-bold text-base text-slate-900">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DOCUMENTS REQUIRED & AGE GUIDELINES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Documents Required */}
          <div className="sunrise-card p-6 sm:p-8 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-orange-600" />
              <h3 className="font-heading font-bold text-xl text-slate-900">Documents Required</h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>Attested copy of Student's Birth Certificate</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>Original Transfer Certificate (TC) for Grade 2 and above</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>Copy of previous year's Academic Report Card</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>4 recent passport-size photographs of the student</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>Parent Identity and Residential Address proof</span>
              </li>
            </ul>
          </div>

          {/* Age Guidelines */}
          <div className="sunrise-card p-6 sm:p-8 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-amber-600" />
              <h3 className="font-heading font-bold text-xl text-slate-900">Age Eligibility Guidelines</h3>
            </div>
            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              <div className="py-2.5 flex justify-between">
                <span className="font-semibold text-slate-800">Nursery / Pre-K</span>
                <span className="text-slate-600">3 Years as of June 31</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="font-semibold text-slate-800">LKG</span>
                <span className="text-slate-600">4 Years as of June 31</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="font-semibold text-slate-800">UKG</span>
                <span className="text-slate-600">5 Years as of June 31</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="font-semibold text-slate-800">Grade 1</span>
                <span className="text-slate-600">6 Years as of June 31</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="font-semibold text-slate-800">Grades 2 to 12</span>
                <span className="text-slate-600">Based on successful completion of previous grade</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE DEMO ADMISSION ENQUIRY FORM */}
      <section id="enquiry-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-orange-200 shadow-xl space-y-6 text-left relative overflow-hidden">
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
              Online Enquiry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Admission Enquiry Form
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Please submit the form below. Our admissions desk will get in touch within 24 hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-8 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-emerald-900">
                Thank You! Enquiry Submitted.
              </h3>
              <p className="text-emerald-800 text-sm max-w-md mx-auto leading-relaxed">
                Thank you! Your enquiry has been received. Our admissions team will be in touch with you shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    parentName: '',
                    studentName: '',
                    grade: 'Grade 1',
                    phone: '',
                    email: '',
                    visitDate: '',
                    message: ''
                  });
                }}
                className="btn-outline text-xs border-emerald-300 text-emerald-800 hover:bg-emerald-100"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Parent Name */}
                <div className="space-y-1.5">
                  <label htmlFor="parentName" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Parent / Guardian Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      id="parentName"
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.parentName ? 'border-red-400 bg-red-50/50' : 'border-slate-300 focus:border-orange-500'
                      }`}
                    />
                  </div>
                  {errors.parentName && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.parentName}</p>}
                </div>

                {/* Student Name */}
                <div className="space-y-1.5">
                  <label htmlFor="studentName" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Student Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      id="studentName"
                      type="text"
                      placeholder="e.g. Ananya Ramesh"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.studentName ? 'border-red-400 bg-red-50/50' : 'border-slate-300 focus:border-orange-500'
                      }`}
                    />
                  </div>
                  {errors.studentName && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.studentName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Grade Applying For */}
                <div className="space-y-1.5">
                  <label htmlFor="grade" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Grade Applying For *
                  </label>
                  <select
                    id="grade"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-orange-500 bg-white"
                  >
                    <option value="Pre-Primary (Nursery-UKG)">Pre-Primary (Nursery - UKG)</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 11 (Science)">Grade 11 (Science)</option>
                    <option value="Grade 11 (Commerce)">Grade 11 (Commerce)</option>
                    <option value="Grade 11 (Humanities)">Grade 11 (Humanities)</option>
                  </select>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Mobile Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-400 bg-red-50/50' : 'border-slate-300 focus:border-orange-500'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      id="email"
                      type="email"
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.email ? 'border-red-400 bg-red-50/50' : 'border-slate-300 focus:border-orange-500'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                </div>
              </div>

              {/* Preferred Visit Date */}
              <div className="space-y-1.5" id="campus-visit">
                <label htmlFor="visitDate" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Preferred Campus Visit Date (Optional)
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    id="visitDate"
                    type="date"
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Message / Special Queries
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Tell us about your child's interests or any specific queries..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3.5 text-base font-semibold shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Admission Enquiry</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </section>

      {/* 6. ADMISSIONS FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
            Helpful Information
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Admissions FAQs
          </h2>
        </div>
        <Accordion items={admissionsFaqs} />
      </section>

    </div>
  );
};

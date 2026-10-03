import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, CheckCircle2, 
  AlertCircle
} from 'lucide-react';
import { Accordion } from '../components/Accordion';
import { FAQS, SCHOOL_INFO } from '../data/schoolData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Your Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter a message.';
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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="bg-sun-rays py-12 md:py-20 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3.5 py-1.5 rounded-full">
            We're Here to Help
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact Sunrise Public School
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have a question about admissions, academics, or campus visits? Get in touch with our team.
          </p>
        </div>
      </section>

      {/* CONTACT INFO + CONTACT FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-warm-cream rounded-3xl p-6 sm:p-8 border border-amber-200/80 space-y-6 shadow-xs">
              <div className="space-y-2">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
                  School Address
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">Sunrise Public School</h2>
              </div>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 text-slate-700">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Campus Location</span>
                    <span>{SCHOOL_INFO.address}</span>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-slate-700">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Admissions & General Phone</span>
                    <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-orange-600 transition-colors font-medium">
                      {SCHOOL_INFO.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-slate-700">
                  <Mail className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Email Address</span>
                    <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-orange-600 transition-colors font-medium">
                      {SCHOOL_INFO.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-slate-700">
                  <Clock className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Office Working Hours</span>
                    <span>{SCHOOL_INFO.officeHours}</span>
                  </div>
                </li>
              </ul>

              {/* Map Location Card */}
              <div className="pt-2">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600">
                    <MapPin className="w-4 h-4" />
                    <span>Location Map (Coimbatore)</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Located conveniently off Avinashi Road, Peelamedu, Coimbatore — easily accessible via public and school bus routes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg space-y-6 text-left">
              <div className="space-y-2 border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-extrabold text-slate-900">Send Us a Message</h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Please fill out the form below and we will respond promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-emerald-900">
                    Message Sent!
                  </h3>
                  <p className="text-emerald-800 text-sm max-w-md mx-auto leading-relaxed">
                    Thanks for reaching out. We'll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Enquiry',
                        message: ''
                      });
                    }}
                    className="btn-outline text-xs border-emerald-300 text-emerald-800 hover:bg-emerald-100"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Your Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Priya Sundaram"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full p-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.name ? 'border-red-400 bg-red-50/50' : 'border-slate-300 focus:border-orange-500'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contactEmail" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        id="contactEmail"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full p-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.email ? 'border-red-400 bg-red-50/50' : 'border-slate-300 focus:border-orange-500'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contactPhone" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                        id="contactPhone"
                        type="tel"
                        placeholder="+91 98765 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-orange-500 bg-white"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Admissions Information">Admissions Information</option>
                      <option value="Campus Tour Request">Campus Tour Request</option>
                      <option value="Curriculum & Academics">Curriculum & Academics</option>
                      <option value="Careers / Faculty Application">Careers / Faculty Application</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contactMessage" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Message *
                    </label>
                    <textarea
                      id="contactMessage"
                      rows={4}
                      placeholder="Write your query or message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full p-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.message ? 'border-red-400 bg-red-50/50' : 'border-slate-300 focus:border-orange-500'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-3 text-base shadow-md shadow-orange-500/20"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Submit Message'}
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 scroll-mt-24">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Have Questions? We Have Answers.
          </h2>
        </div>
        <Accordion items={FAQS} />
      </section>

    </div>
  );
};

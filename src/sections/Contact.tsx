import React, { useState } from 'react';
import { personalInfo } from '../data/socialLinks';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) errs.message = 'Please enter a message.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    // Open mailto fallback with prefilled fields
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Dibendu,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Form Container mirroring Homepage.jpg */}
        <div className="bg-slate-50/70 rounded-3xl sm:rounded-[36px] border border-slate-100 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Direct Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3.5 py-1 mb-3 text-xs font-semibold tracking-wider text-[#3875DE] uppercase bg-blue-50 border border-blue-100 rounded-full">
                  Get in Touch
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Have a Project Idea? Let's discuss your next project!
                </h2>

                {/* Contact Info Pills */}
                <address className="mt-8 space-y-4 not-italic">
                  {/* Email */}
                  <a
                    href={personalInfo.social.emailMailto}
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/70 hover:border-blue-200 hover:shadow-xs transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#3875DE] flex items-center justify-center shrink-0 group-hover:bg-[#3875DE] group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Email Me</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#3875DE] transition-colors">
                        {personalInfo.email}
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={personalInfo.social.phoneTel}
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/70 hover:border-blue-200 hover:shadow-xs transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#3875DE] flex items-center justify-center shrink-0 group-hover:bg-[#3875DE] group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Call / WhatsApp</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#3875DE] transition-colors">
                        {personalInfo.phone}
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/70">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#3875DE] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Location</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>
                </address>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
                  Profiles:
                </span>
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200/70 text-slate-700 hover:text-[#3875DE] hover:border-blue-200 hover:bg-blue-50 transition-all shadow-2xs"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200/70 text-slate-700 hover:text-[#3875DE] hover:border-blue-200 hover:bg-blue-50 transition-all shadow-2xs"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/70 shadow-xs">
              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100 text-center animate-fadeIn">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950">Thank You!</h4>
                  <p className="mt-1 text-xs sm:text-sm text-emerald-800">
                    Your email client has been launched with your message details prefilled to <strong>{personalInfo.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-bold text-emerald-700 bg-white border border-emerald-200 rounded-xl hover:bg-emerald-100/50 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none ${
                          errors.name
                            ? 'border-red-400 bg-red-50/30'
                            : 'border-slate-200 bg-slate-50/50 focus:border-[#3875DE] focus:bg-white'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none ${
                          errors.email
                            ? 'border-red-400 bg-red-50/30'
                            : 'border-slate-200 bg-slate-50/50 focus:border-[#3875DE] focus:bg-white'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      placeholder="React Native Mobile Developer Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none ${
                        errors.subject
                          ? 'border-red-400 bg-red-50/30'
                          : 'border-slate-200 bg-slate-50/50 focus:border-[#3875DE] focus:bg-white'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Hi Dibendu, we'd like to talk about an exciting mobile engineering project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none resize-none ${
                        errors.message
                          ? 'border-red-400 bg-red-50/30'
                          : 'border-slate-200 bg-slate-50/50 focus:border-[#3875DE] focus:bg-white'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#3875DE] to-blue-600 hover:from-[#2962C4] hover:to-blue-700 shadow-md shadow-[#3875DE]/25 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <span className="block sm:inline sm:ml-4 text-[11px] text-slate-400 mt-2 sm:mt-0">
                      Directly opens your default mail client with prefilled details.
                    </span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

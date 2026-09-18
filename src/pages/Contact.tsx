import { useState, useEffect, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowUpRight, Mail, Linkedin, Calendar, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const CAL_BOOKING_URL = "https://cal.com/sayed-ahmad/project-consultation";
const OFFICIAL_EMAIL = "hello@sitora.org";
const OFFICIAL_LINKEDIN = "https://www.linkedin.com/in/sayedahmad-/";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialInquiry = searchParams.get('inquiry') === 'agency' ? 'agency' : 'business';
  const [inquiryType, setInquiryType] = useState<'agency' | 'business'>(initialInquiry);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('WordPress Website');
  const [details, setDetails] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Anti-spam hidden field
  const [formStartTime] = useState<number>(() => Date.now());

  // UX & Validation State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Sync service default when switching pathways
  useEffect(() => {
    const param = searchParams.get('inquiry');
    if (param === 'agency') {
      setInquiryType('agency');
      setService('White-label agency partnership');
    } else if (param === 'business' || param === 'project') {
      setInquiryType('business');
      setService('WordPress Website');
    }
  }, [searchParams]);

  const handleInquiryChange = (type: 'agency' | 'business') => {
    setInquiryType(type);
    if (type === 'agency') {
      setService('White-label agency partnership');
    } else {
      setService('WordPress Website');
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your full name.';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailPattern.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!service.trim()) {
      newErrors.service = 'Please choose a service.';
    }

    if (!details.trim()) {
      newErrors.details = 'Please provide details about your project.';
    } else if (details.trim().length < 15) {
      newErrors.details = 'Please provide at least 15 characters describing your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');

    // Bot detection check
    if (honeypot) {
      setSubmitStatus('success');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      service: service.trim(),
      details: details.trim(),
      budget: budget.trim(),
      timeline: timeline.trim(),
      _t: formStartTime,
    };

    try {
      // Determine endpoint: either Supabase Edge function (if configured) or local full-stack server /api/contact
      const endpoint = (import.meta.env.VITE_SUPABASE_FUNCTION_URL as string) || '/api/contact';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setName('');
        setEmail('');
        setCompany('');
        setDetails('');
        setBudget('');
        setTimeline('');
        setErrors({});
      } else {
        setSubmitStatus('error');
        // Only log internal errors to console for secure developer debugging; never expose backend env details in UI
        if (data.error || data.code) {
          console.error('[Contact Form Debug]', data.error || data.code);
        }
      }
    } catch (err) {
      console.error('Submission network error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact & 1:1 Consultation | Sayed Ahmad</title>
        <meta name="description" content="Get in touch to discuss agency partnerships, business web development projects, or book a 1:1 consultation call." />
      </Helmet>

      <div className="pt-32 pb-24 bg-stone-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Direct Info & 1:1 Call Booking */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-200/60 rounded-full text-[11px] font-mono font-semibold tracking-wider text-stone-700 uppercase mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C701B]" />
                    Direct Contact &amp; Booking
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-4">
                    Let's Talk About Your Project
                  </h1>
                  <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-md">
                    Whether you need a reliable white-label development partner for your agency or a bespoke website for your business, I'm here to help you build it right.
                  </p>
                </div>

                {/* Direct Contact Links */}
                <div className="space-y-4 pt-2">
                  <a 
                    href="mailto:sayed@sitora.org" 
                    className="flex items-center text-stone-700 hover:text-stone-900 transition-colors group text-sm sm:text-base"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center mr-3.5 group-hover:border-stone-400 transition-colors shadow-2xs">
                      <Mail className="w-4 h-4 text-stone-600" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-stone-400">Email Directly</div>
                      <span className="font-medium text-stone-800 group-hover:text-stone-950 underline underline-offset-2">sayed@sitora.org</span>
                    </div>
                  </a>

                  <a 
                    href={OFFICIAL_LINKEDIN} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-stone-700 hover:text-stone-900 transition-colors group text-sm sm:text-base"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center mr-3.5 group-hover:border-stone-400 transition-colors shadow-2xs">
                      <Linkedin className="w-4 h-4 text-stone-600" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-stone-400">Professional Network</div>
                      <span className="font-medium text-stone-800 group-hover:text-stone-950 flex items-center gap-1">
                        linkedin.com/in/sayedahmad-
                        <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </a>
                </div>

                {/* 1:1 Consultation Booking Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#8C701B]">
                      <Calendar className="w-3.5 h-3.5" />
                      30-MIN 1:1 CONSULTATION
                    </span>
                    <span className="text-[11px] font-mono text-stone-400">Cal.com</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-stone-900 tracking-tight">
                      Prefer to speak directly?
                    </h3>
                    <p className="text-xs sm:text-[13px] text-stone-600 mt-1.5 leading-relaxed">
                      Schedule a 30-minute 1:1 Project Consultation directly on my calendar to discuss project requirements, architecture, or timelines.
                    </p>
                  </div>

                  <a
                    href={CAL_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book a 1:1 Call with Sayed Ahmad on Cal.com (opens in a new tab)"
                    className="w-full inline-flex items-center justify-center px-5 py-3 text-xs font-bold tracking-wider uppercase text-stone-900 bg-amber-500/15 border border-amber-500/40 hover:bg-amber-500/25 hover:border-amber-600/60 rounded-xl transition-all duration-200 group shadow-2xs"
                  >
                    <span>Book a 1:1 Call</span>
                    <ArrowUpRight className="ml-2 w-4 h-4 text-[#8C701B] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                <div className="text-xs font-mono text-stone-500 pt-2 border-t border-stone-200/60">
                  <p>Typical response time: Within 24 hours on business days.</p>
                </div>
              </div>
            </div>
            
            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-stone-200 shadow-sm">
                
                {/* Secondary Booking CTA Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl bg-stone-50 border border-stone-200/80 mb-8">
                  <div className="text-xs text-stone-600">
                    <strong className="text-stone-900 font-semibold">Need immediate project feedback?</strong> You can skip the form and book time directly.
                  </div>
                  <a
                    href={CAL_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-[#8C701B] transition-colors whitespace-nowrap"
                  >
                    <span>Book a 1:1 Call</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Pathway Toggle */}
                <div className="flex p-1 bg-stone-100 rounded-xl mb-8">
                  <button 
                    type="button"
                    onClick={() => handleInquiryChange('business')}
                    className={`flex-1 py-3 px-4 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                      inquiryType === 'business' 
                        ? 'bg-white text-stone-900 shadow-sm' 
                        : 'text-stone-500 hover:text-stone-700'
                    }`}
                  >
                    Direct Business Project
                  </button>
                  <button 
                    type="button"
                    onClick={() => handleInquiryChange('agency')}
                    className={`flex-1 py-3 px-4 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                      inquiryType === 'agency' 
                        ? 'bg-white text-stone-900 shadow-sm' 
                        : 'text-stone-500 hover:text-stone-700'
                    }`}
                  >
                    Agency Partnership
                  </button>
                </div>

                {/* Feedback Alerts */}
                {submitStatus === 'success' && (
                  <div className="mb-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold">Inquiry Sent Successfully</h4>
                      <p className="text-xs sm:text-sm text-emerald-800 mt-1 leading-relaxed">
                        Thanks for reaching out. Your message has been sent successfully. I'll get back to you soon.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-8 p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3.5">
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold">Message Not Sent</h4>
                      <p className="text-xs sm:text-sm text-rose-800 mt-1 leading-relaxed">
                        Something went wrong while sending your message. Please try again or email me directly at{' '}
                        <a href={`mailto:${OFFICIAL_EMAIL}`} className="underline font-semibold text-rose-950">
                          {OFFICIAL_EMAIL}
                        </a>.
                      </p>
                    </div>
                  </div>
                )}
                
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  
                  {/* Honeypot Spam Prevention Field (Invisible to human users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input 
                      type="text" 
                      id="website" 
                      name="website" 
                      tabIndex={-1} 
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)} 
                    />
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs sm:text-sm font-medium text-stone-700 flex items-center justify-between">
                        <span>Full Name <span className="text-rose-500">*</span></span>
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                        }}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-stone-50 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.name 
                            ? 'border-rose-400 focus:ring-rose-200' 
                            : 'border-stone-200 focus:ring-stone-900/10 focus:border-stone-900'
                        }`}
                        placeholder="John Doe"
                        required
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-600">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs sm:text-sm font-medium text-stone-700 flex items-center justify-between">
                        <span>Email Address <span className="text-rose-500">*</span></span>
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                        }}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-stone-50 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.email 
                            ? 'border-rose-400 focus:ring-rose-200' 
                            : 'border-stone-200 focus:ring-stone-900/10 focus:border-stone-900'
                        }`}
                        placeholder="john@company.com"
                        required
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-600">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Company Name (Optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-xs sm:text-sm font-medium text-stone-700">
                      Company / Organization <span className="text-stone-400 text-xs font-normal">(Optional)</span>
                    </label>
                    <input 
                      type="text" 
                      id="company" 
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all"
                      placeholder="Acme Studio, Inc."
                    />
                  </div>
                  
                  {/* Service Interested In */}
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-xs sm:text-sm font-medium text-stone-700">
                      Service Interested In <span className="text-rose-500">*</span>
                    </label>
                    <select 
                      id="service" 
                      value={service}
                      onChange={(e) => {
                        setService(e.target.value);
                        if (errors.service) setErrors(prev => ({ ...prev, service: '' }));
                      }}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all appearance-none cursor-pointer"
                    >
                      {inquiryType === 'agency' ? (
                        <>
                          <option value="White-label agency partnership">White-label agency partnership</option>
                          <option value="Overflow development support">Overflow development support</option>
                          <option value="Specific client project">Specific client project</option>
                          <option value="Dedicated development retainer">Dedicated development retainer</option>
                          <option value="Other agency service">Other agency service</option>
                        </>
                      ) : (
                        <>
                          <option value="WordPress Website">WordPress Website</option>
                          <option value="WooCommerce / eCommerce">WooCommerce / eCommerce</option>
                          <option value="Website Redesign">Website Redesign</option>
                          <option value="Web Application / MVP">Web Application / MVP</option>
                          <option value="Custom Functionality">Custom Functionality</option>
                          <option value="Maintenance & Speed Optimization">Maintenance &amp; Speed Optimization</option>
                          <option value="Other">Other</option>
                        </>
                      )}
                    </select>
                    {errors.service && (
                      <p className="text-xs text-rose-600">{errors.service}</p>
                    )}
                  </div>

                  {/* Optional Budget & Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="budget" className="text-xs sm:text-sm font-medium text-stone-700">
                        Estimated Budget <span className="text-stone-400 text-xs font-normal">(Optional)</span>
                      </label>
                      <select 
                        id="budget" 
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all appearance-none cursor-pointer text-stone-800"
                      >
                        <option value="">Select budget range (optional)</option>
                        <option value="< $2,500">&lt; $2,500</option>
                        <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                        <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                        <option value="Flexible / Let's discuss">Flexible / Let's discuss</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="timeline" className="text-xs sm:text-sm font-medium text-stone-700">
                        Target Timeline <span className="text-stone-400 text-xs font-normal">(Optional)</span>
                      </label>
                      <select 
                        id="timeline" 
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all appearance-none cursor-pointer text-stone-800"
                      >
                        <option value="">Select timeline (optional)</option>
                        <option value="Immediately (Within 2 weeks)">Immediately (Within 2 weeks)</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="1 – 3 months">1 – 3 months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <label htmlFor="details" className="text-xs sm:text-sm font-medium text-stone-700 flex items-center justify-between">
                      <span>Project Details <span className="text-rose-500">*</span></span>
                      <span className="text-[11px] font-mono text-stone-400">Min. 15 characters</span>
                    </label>
                    <textarea 
                      id="details" 
                      rows={5}
                      value={details}
                      onChange={(e) => {
                        setDetails(e.target.value);
                        if (errors.details) setErrors(prev => ({ ...prev, details: '' }));
                      }}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-stone-50 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.details 
                          ? 'border-rose-400 focus:ring-rose-200' 
                          : 'border-stone-200 focus:ring-stone-900/10 focus:border-stone-900'
                      }`}
                      placeholder="Tell me a bit about what you're looking to build, your goals, key features, or reference links..."
                      required
                    ></textarea>
                    {errors.details && (
                      <p className="text-xs text-rose-600">{errors.details}</p>
                    )}
                  </div>
                  
                  {/* Submit Button & UX States */}
                  <div className="pt-2">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-stone-900 rounded-xl hover:bg-stone-800 active:bg-stone-950 transition-all duration-200 group shadow-sm disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin text-stone-300" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="text-[11px] font-mono text-stone-400">
                      Your privacy is respected. No spam, ever.
                    </p>
                  </div>
                  
                </form>
                
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
}

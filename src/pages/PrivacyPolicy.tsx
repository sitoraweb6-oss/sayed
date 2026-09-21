import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Calendar, ArrowLeft, ArrowUpRight, Lock, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy — Sayed Ahmad | Sitora Web</title>
        <meta 
          name="description" 
          content="Privacy Policy for Sayed Ahmad's web development portfolio and Sitora Web. Transparent details on contact form inquiries, communication, and data handling." 
        />
        <meta property="og:title" content="Privacy Policy — Sayed Ahmad | Sitora Web" />
        <meta 
          property="og:description" 
          content="Privacy Policy for Sayed Ahmad's web development portfolio and Sitora Web. Transparent details on contact form inquiries, communication, and data handling." 
        />
      </Helmet>

      <div className="bg-brand-bg min-h-screen py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Top Breadcrumb / Back Link */}
          <div className="mb-8 sm:mb-10">
            <Link 
              to="/" 
              className="inline-flex items-center text-xs sm:text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <header className="border-b border-stone-200 pb-8 sm:pb-12 mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-mono uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-stone-600" />
              <span>Legal & Transparency</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-stone-600 max-w-2xl leading-relaxed">
              This Privacy Policy explains how <strong>Sayed Ahmad</strong> (operating under <strong>Sitora Web</strong>) collects, uses, and protects information when you visit this portfolio website or submit an inquiry.
            </p>
            <div className="mt-6 text-xs sm:text-sm font-mono text-stone-400">
              Last Updated: September 2026
            </div>
          </header>

          {/* Document Content */}
          <div className="space-y-10 sm:space-y-12 text-stone-700 leading-relaxed text-[15px] sm:text-base">
            
            {/* Section 1: Introduction */}
            <section className="space-y-3.5">
              <h2 className="text-xl sm:text-2xl font-medium text-stone-900 tracking-tight flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-mono text-stone-400">01.</span>
                Introduction
              </h2>
              <p>
                Welcome to the personal web development portfolio of <strong>Sayed Ahmad</strong>, founder of <strong>Sitora Web</strong>. I respect your privacy and aim to be transparent about how information is collected, used, and protected.
              </p>
              <p>
                This portfolio is an informational showcase of selected web development projects, services, and technical capabilities. It is designed to be lean, straightforward, and privacy-respecting: there are no commercial user accounts, paywalls, advertising trackers, or unsolicited marketing newsletters.
              </p>
            </section>

            {/* Section 2: Information We Collect */}
            <section className="space-y-3.5">
              <h2 className="text-xl sm:text-2xl font-medium text-stone-900 tracking-tight flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-mono text-stone-400">02.</span>
                Information We Collect
              </h2>
              <p>
                We only collect personal information that you voluntarily choose to provide when contacting us directly or submitting the project inquiry form on our website.
              </p>
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 sm:p-6 mt-3">
                <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-3">
                  Information Submitted via Contact Form:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-stone-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stone-400 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Full Name</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stone-400 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Email Address</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stone-400 flex-shrink-0" aria-hidden="true" />
                    <span>Company or Organization <em>(optional)</em></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stone-400 flex-shrink-0" aria-hidden="true" />
                    <span>Selected Service Interest</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stone-400 flex-shrink-0" aria-hidden="true" />
                    <span>Estimated Project Budget <em>(optional)</em></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stone-400 flex-shrink-0" aria-hidden="true" />
                    <span>Target Delivery Timeline <em>(optional)</em></span>
                  </li>
                  <li className="flex items-start gap-2 sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Project Details / Message</span>
                  </li>
                </ul>
              </div>
              <p className="text-stone-500 text-sm">
                We do not collect sensitive personal data (e.g., government IDs, financial account numbers, or health information). We also do not employ third-party advertising tracking pixels, cross-site behavior profiling, or automated user account trackers.
              </p>
            </section>

            {/* Section 3: How We Use Information */}
            <section className="space-y-3.5">
              <h2 className="text-xl sm:text-2xl font-medium text-stone-900 tracking-tight flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-mono text-stone-400">03.</span>
                How We Use Information
              </h2>
              <p>
                Any information you submit is used solely for legitimate business communication purposes related to your inquiry:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li>To evaluate your project requirements and technical scope.</li>
                <li>To respond to your inquiries, answer questions, or provide proposals.</li>
                <li>To communicate directly regarding requested web design or development services.</li>
                <li>To schedule, confirm, or manage 1:1 consultation appointments.</li>
              </ul>
              <p>
                Your information is <strong>never sold, rented, leased, or monetized</strong> to any third parties or marketing lists.
              </p>
            </section>

            {/* Section 4: Third-Party Services */}
            <section className="space-y-3.5">
              <h2 className="text-xl sm:text-2xl font-medium text-stone-900 tracking-tight flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-mono text-stone-400">04.</span>
                Third-Party Services
              </h2>
              <p>
                To provide reliable communication and scheduling, we rely on trusted third-party service providers:
              </p>
              <div className="space-y-4 mt-2">
                <div className="border border-stone-200 rounded-xl p-4 sm:p-5 bg-white shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-stone-900 text-base">Resend (Email Delivery)</h3>
                    <span className="text-xs font-mono text-stone-400 uppercase">Infrastructure</span>
                  </div>
                  <p className="text-sm text-stone-600">
                    When you submit the contact form, the data is processed securely through an authenticated server-side API integration using <strong>Resend</strong> to deliver your message to our private business inbox (<code className="text-xs bg-stone-100 px-1.5 py-0.5 rounded font-mono text-stone-800">hello@sitora.org</code>). Resend is used as the email delivery provider for contact form submissions.
                  </p>
                </div>

                <div className="border border-stone-200 rounded-xl p-4 sm:p-5 bg-white shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-stone-900 text-base">Cal.com (Meeting Scheduling)</h3>
                    <span className="text-xs font-mono text-stone-400 uppercase">Consultations</span>
                  </div>
                  <p className="text-sm text-stone-600">
                    If you choose to schedule a 30-minute 1:1 consultation via our booking links, the appointment booking workflow is powered by <strong>Cal.com</strong>. Any information entered into the Cal.com scheduling system (such as your name, email, and meeting notes) is processed according to Cal.com's own Privacy Policy and Terms of Service.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Data Retention */}
            <section className="space-y-3.5">
              <h2 className="text-xl sm:text-2xl font-medium text-stone-900 tracking-tight flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-mono text-stone-400">05.</span>
                Data Retention
              </h2>
              <p>
                Inquiry emails and correspondence are retained in our secure business email account only for as long as necessary to fulfill the business relationship, address your project inquiries, or maintain standard business correspondence records. If an inquiry does not result in an active engagement, correspondence may be archived or deleted periodically.
              </p>
            </section>

            {/* Section 6: Data Security */}
            <section className="space-y-3.5">
              <h2 className="text-xl sm:text-2xl font-medium text-stone-900 tracking-tight flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-mono text-stone-400">06.</span>
                Data Security
              </h2>
              <div className="flex items-start gap-3 bg-stone-50 border border-stone-200 rounded-xl p-4 sm:p-5">
                <Lock className="w-5 h-5 text-stone-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-stone-600 leading-relaxed">
                  We use industry-standard HTTPS encryption across all web traffic. Backend delivery credentials and API tokens are kept strictly server-side and are never exposed to the client browser. While no internet transmission can be guaranteed 100% impenetrable, we apply reasonable technical and organizational measures to safeguard your communications.
                </p>
              </div>
            </section>

            {/* Section 7: External Links */}
            <section className="space-y-3.5">
              <h2 className="text-xl sm:text-2xl font-medium text-stone-900 tracking-tight flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-mono text-stone-400">07.</span>
                External Links
              </h2>
              <p>
                This website includes links to third-party platforms such as LinkedIn, GitHub, and Cal.com, as well as live client websites in our portfolio. Once you navigate away from this website, we do not have control over and are not responsible for the privacy practices, content, or policies of those external websites. We encourage you to review the privacy statements of any third-party sites you visit.
              </p>
            </section>

            {/* Section 8: Your Rights and Choices */}
            <section className="space-y-3.5">
              <h2 className="text-xl sm:text-2xl font-medium text-stone-900 tracking-tight flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-mono text-stone-400">08.</span>
                Your Rights and Choices
              </h2>
              <p>
                Depending on your jurisdiction (such as GDPR in Europe or state privacy laws in the United States), you may have the right to request access to the personal data we hold about you, request corrections, or request deletion of our correspondence history.
              </p>
              <p>
                To exercise any of these rights, please send an email to <a href="mailto:hello@sitora.org" className="text-stone-900 font-medium underline underline-offset-2 hover:text-stone-600">hello@sitora.org</a> with your request. We will review and respond to your request as required by applicable law.
              </p>
            </section>

            {/* Section 9: Changes to This Privacy Policy */}
            <section className="space-y-3.5">
              <h2 className="text-xl sm:text-2xl font-medium text-stone-900 tracking-tight flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-mono text-stone-400">09.</span>
                Changes to This Privacy Policy
              </h2>
              <p>
                We may periodically update this Privacy Policy to reflect changes in our practices or applicable legal requirements. Any updates will be posted directly to this page with an updated "Last Updated" timestamp at the top. We encourage you to review this page periodically.
              </p>
            </section>

            {/* Section 10: Contact */}
            <section className="space-y-3.5 pt-4 border-t border-stone-200">
              <h2 className="text-xl sm:text-2xl font-medium text-stone-900 tracking-tight flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-mono text-stone-400">10.</span>
                Contact
              </h2>
              <p>
                If you have questions, feedback, or concerns regarding this Privacy Policy or how your information is handled, please contact:
              </p>
              <div className="bg-stone-100/80 border border-stone-200 rounded-2xl p-5 sm:p-6 mt-3 space-y-2">
                <div className="text-base font-semibold text-stone-900">Sayed Ahmad &bull; Sitora Web</div>
                <div className="text-sm text-stone-600 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-stone-400" aria-hidden="true" />
                  <span>Email:</span>
                  <a href="mailto:hello@sitora.org" className="text-stone-900 font-medium underline underline-offset-2 hover:text-stone-600">
                    hello@sitora.org
                  </a>
                </div>
                <div className="text-sm text-stone-600 flex items-center gap-2 pt-1">
                  <Calendar className="w-4 h-4 text-stone-400" aria-hidden="true" />
                  <span>Consultations:</span>
                  <a 
                    href="https://cal.com/sayed-ahmad/project-consultation" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-stone-900 font-medium inline-flex items-center gap-1 underline underline-offset-2 hover:text-stone-600"
                  >
                    cal.com/sayed-ahmad/project-consultation
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </section>

          </div>

          {/* Bottom Navigation */}
          <div className="mt-14 sm:mt-16 pt-8 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors"
            >
              Have a project in mind? Contact Sayed
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
            <Link 
              to="/" 
              className="text-xs sm:text-sm text-stone-500 hover:text-stone-800 transition-colors"
            >
              &larr; Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

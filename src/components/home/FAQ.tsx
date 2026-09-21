import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What types of businesses do you work with?',
    answer: 'I work with businesses, eCommerce brands, growing companies, and founders who need a stronger website or a custom digital solution.'
  },
  {
    id: 'faq-2',
    question: 'Do you build eCommerce websites?',
    answer: 'Yes. I build WooCommerce and eCommerce experiences with product management, checkout flows, payment integrations, and custom functionality.'
  },
  {
    id: 'faq-3',
    question: 'Can you improve an existing website?',
    answer: 'Yes. I can redesign outdated websites, improve usability and mobile experience, optimize performance, and add the functionality your business needs.'
  },
  {
    id: 'faq-4',
    question: 'Can you build custom web applications or MVPs?',
    answer: 'Yes. I can turn business ideas and requirements into functional web applications, SaaS concepts, MVPs, dashboards, and database-connected systems.'
  },
  {
    id: 'faq-5',
    question: 'Do you work with clients outside Bangladesh?',
    answer: 'Yes. I work with businesses and clients internationally and can collaborate remotely across different time zones.'
  },
  {
    id: 'faq-6',
    question: 'How do I start a project?',
    answer: 'Simply send me a message or book a 1:1 consultation. We can discuss your goals, requirements, timeline, and the right approach for your project.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section 
      id="faq" 
      aria-labelledby="faq-heading"
      className="py-16 sm:py-20 md:py-24 bg-white border-t border-stone-200/80 scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" aria-hidden="true" />
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#8C701B]">
              FAQ
            </span>
          </div>

          <h2 
            id="faq-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-stone-900 tracking-tight uppercase mb-3 sm:mb-4"
          >
            Questions Before We Build?
          </h2>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            A few common questions about working together, projects, and what I can build for your business.
          </p>
        </div>

        {/* Minimal Accordion List */}
        <div className="divide-y divide-stone-200 border-y border-stone-200" role="region" aria-label="Frequently Asked Questions">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div key={item.id} className="transition-colors">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full py-4 sm:py-5 flex items-center justify-between text-left gap-4 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 rounded-sm"
                  >
                    <span className="text-base sm:text-lg font-medium text-stone-900 group-hover:text-stone-700 transition-colors pr-2">
                      {item.question}
                    </span>
                    <span 
                      className="shrink-0 w-8 h-8 rounded-full border border-stone-200 group-hover:border-stone-400 flex items-center justify-center text-stone-700 transition-colors"
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-stone-900" />
                      ) : (
                        <Plus className="w-4 h-4 text-stone-600 group-hover:text-stone-900" />
                      )}
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: 'auto', 
                        opacity: 1,
                        transition: {
                          height: { duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] },
                          opacity: { duration: 0.22, delay: 0.05 }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: { duration: 0.22, ease: [0.04, 0.62, 0.23, 0.98] },
                          opacity: { duration: 0.15 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 sm:pb-6 text-sm sm:text-base text-stone-600 leading-relaxed pr-8">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

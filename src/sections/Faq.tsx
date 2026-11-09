import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FaqItem[] = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React Native, React.js, Next.js, JavaScript, TypeScript, and Redux Toolkit. I also have experience with Node.js, Express.js, MongoDB, and REST API integration.",
    category: "Technical Skills",
  },
  {
    question: "Do you develop applications for both Android and iOS?",
    answer:
      "Yes, I build cross-platform mobile applications using React Native, delivering scalable, responsive, and high-performance experiences for both Android and iOS platforms.",
    category: "Mobile Development",
  },
  {
    question: "Do you have experience with backend development?",
    answer:
      "Yes, I have experience integrating REST APIs and working with Node.js, Express.js, and MongoDB to connect frontend and mobile applications with backend services.",
    category: "Backend Development",
  },
  {
    question: "How do you optimize application performance?",
    answer:
      "I focus on efficient state management, component optimization, lazy loading, FlatList optimization, API handling, and offline-first architecture to deliver smooth user experiences.",
    category: "Performance",
  },
  {
    question: "Are you available for new opportunities or freelance projects?",
    answer:
      "Yes, I am open to exciting frontend and mobile application development opportunities, freelance projects, and collaborations where I can contribute my technical skills and experience.",
    category: "Opportunities",
  },
];
export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 bg-slate-50/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with SEO Semantic ID */}
        <div id="faq-heading">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Questions About Experience & Technical Capabilities"
            subtitle="Authoritative answers regarding React Native development, offline-first Realm architecture, store deployments, and project history."
          />
        </div>

        {/* AI & Search Snippet Badge */}
        <div className="mb-8 p-3 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-between text-xs text-blue-900 font-medium">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#3875DE]" />
            <span>Structured for Google Rich Snippets &amp; AI Search Engines (ChatGPT, Perplexity, Gemini)</span>
          </div>
          <span className="hidden sm:inline-block font-bold text-[#3875DE]">6 Key Topics</span>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 shadow-2xs overflow-hidden transition-all duration-200 hover:border-blue-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3875DE]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#3875DE] flex items-center justify-center shrink-0 mt-0.5">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#3875DE] block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div className={`w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-blue-50 text-[#3875DE]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50 pl-16 animate-fadeIn"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

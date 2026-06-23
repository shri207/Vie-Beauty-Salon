import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do I need an appointment?",
    a: "While walk-ins are accepted based on availability, we highly recommend booking an appointment to ensure you receive your preferred service time without waiting.",
  },
  {
    q: "What hair treatments are available?",
    a: "We offer a range of treatments including Natural Hair Therapy, Protein Treatments, Hair Spa, and specialized Scalp Care.",
  },
  {
    q: "Do you provide massage services?",
    a: "Yes, we offer relaxing Shoulder, Back, and Head massages as part of our wellness and relaxation therapies.",
  },
  {
    q: "Are walk-ins accepted?",
    a: "Yes, walk-ins are welcome, but priority is given to booked appointments.",
  },
  {
    q: "Which products do you use?",
    a: "We pride ourselves on using high-quality, natural products tailored to enhance your hair and skin health safely.",
  },
  {
    q: "What are your working hours?",
    a: "We are open daily from 10 AM to 8 PM.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-6">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-transparent border border-charcoal/20 rounded-[30px] overflow-hidden hover:border-charcoal/40 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-serif text-xl font-bold pr-4">{faq.q}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full border border-charcoal/20 flex items-center justify-center transition-colors ${isOpen ? 'bg-charcoal text-white border-charcoal' : 'text-charcoal'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-charcoal/70 text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

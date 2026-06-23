import { motion } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "../lib/utils";

const packages = [
  {
    title: "Essential Care",
    price: "15",
    features: ["Hair Wash", "Hair Treatment", "Head Massage"],
    highlight: false,
  },
  {
    title: "Wellness Package",
    price: "25",
    features: ["Shoulder Massage", "Hair Spa", "Facial", "Manicure"],
    highlight: true,
  },
  {
    title: "Signature Experience",
    price: "40",
    features: ["Natural Hair Treatment", "Back Massage", "Pedicure", "Skin Therapy"],
    highlight: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-cream relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sage/10 rounded-l-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Curated Packages</h2>
          <p className="text-charcoal/70">
            Thoughtfully combined treatments for a complete wellness experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={cn(
                "rounded-[40px] p-8 lg:p-10 transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full",
                pkg.highlight 
                  ? "bg-charcoal text-white shadow-2xl scale-105 md:scale-110 z-10 py-12" 
                  : "bg-white border border-charcoal/10 text-charcoal"
              )}
            >
              {pkg.highlight ? (
                <div className="bg-accent text-charcoal px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest self-start mb-6">Best Value</div>
              ) : (
                <div className="bg-cream text-charcoal/60 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest self-start mb-6">Standard</div>
              )}
              
              <h3 className="text-2xl font-serif mb-6">{pkg.title}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-xl font-medium">KD</span>
                <span className="text-4xl font-serif font-bold">{pkg.price}</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className={cn("text-xs opacity-80", pkg.highlight ? "text-white" : "text-charcoal")}>
                      • {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#appointment"
                className={cn(
                  "block w-full text-center py-4 rounded-full transition-colors mt-auto",
                  pkg.highlight
                    ? "border border-white/20 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-charcoal"
                    : "border border-charcoal/20 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-charcoal hover:text-white"
                )}
              >
                Book Package
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

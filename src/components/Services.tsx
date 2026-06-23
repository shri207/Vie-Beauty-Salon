import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

const services = [
  {
    title: "Hair Treatments",
    items: ["Natural Hair Therapy", "Protein Treatment", "Hair Spa", "Scalp Care"],
    price: "10",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Wellness Treatments",
    items: ["Shoulder Massage", "Back Massage", "Relaxation Therapy", "Head Massage"],
    price: "8",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Nail Care",
    items: ["Manicure", "Pedicure", "Gel Polish"],
    price: "6",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Facial Treatments",
    items: ["Hydration Facial", "Cleanup", "Skin Therapy"],
    price: "12",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80",
    className: "md:col-span-2 md:row-span-1",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="uppercase tracking-widest text-xs font-semibold text-charcoal/60 block mb-4">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Signature Services</h2>
          <p className="text-charcoal/70">
            Tailored treatments designed to enhance your natural beauty and provide deep relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={cn(
                "group relative rounded-[40px] overflow-hidden flex flex-col justify-end p-8 isolate cursor-pointer border border-charcoal/10",
                service.className
              )}
            >
              {/* Background Image */}
              <div className="absolute inset-0 -z-20">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-2">{service.title.split(' ')[1]}</div>
                <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-2">{service.title}</h3>
                
                <div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-500 mb-4">
                  <ul className="text-xs text-white/80 space-y-2 mt-2">
                    {service.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
                  <span className="bg-white text-charcoal px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest inline-block">KD {service.price}+</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-accent group-hover:text-charcoal transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

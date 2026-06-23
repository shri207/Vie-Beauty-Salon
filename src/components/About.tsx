import { motion } from "motion/react";

export default function About() {
  const stats = [
    { number: "5000+", label: "Happy Clients" },
    { number: "8+", label: "Beauty Specialists" },
    { number: "6+", label: "Years Experience" },
    { number: "4.9★", label: "Customer Rating" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Magazine Style Images */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bfcbaa6362d?auto=format&fit=crop&q=80&w=800"
                alt="Salon Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-[40px] overflow-hidden border-8 border-white shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600"
                alt="Spa Treatment"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-10"
          >
            <h2 className="text-5xl lg:text-6xl font-serif mb-6 font-bold leading-tight">
              A Peaceful Destination for <span className="italic text-accent">Inner Harmony</span>
            </h2>
            <p className="text-sm leading-relaxed text-charcoal/70 mb-12">
              Vie Beauty Salon is a peaceful beauty destination in Kuwait City offering personalized hair treatments, nail care, massages and wellness experiences in a calming environment. We believe in using natural products to enhance your natural beauty.
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-charcoal/10 pt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl lg:text-4xl font-serif font-bold italic mb-1">{stat.number}</div>
                  <div className="text-[10px] text-charcoal/60 uppercase tracking-widest font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

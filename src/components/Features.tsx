import { motion } from "motion/react";
import { Smile, Sparkles, Leaf, DollarSign, Heart, Star } from "lucide-react";

const features = [
  { icon: Smile, title: "Friendly Staff" },
  { icon: Sparkles, title: "Relaxing Atmosphere" },
  { icon: Leaf, title: "Natural Treatments" },
  { icon: DollarSign, title: "Affordable Pricing" },
  { icon: Heart, title: "Personalized Care" },
  { icon: Star, title: "Customer Satisfaction" },
];

export default function Features() {
  return (
    <section className="py-24 bg-cream text-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-4">Why Clients Love Us</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full border border-charcoal/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-charcoal group-hover:border-charcoal group-hover:text-white text-charcoal">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-[10px] uppercase tracking-widest font-bold">
                  {feature.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

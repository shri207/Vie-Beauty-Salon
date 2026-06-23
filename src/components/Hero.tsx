import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-lavender/10 rounded-l-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-sage/10 rounded-r-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl z-10"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
            <span className="text-lavender font-serif italic text-lg lg:text-xl tracking-wide">Beauty, Wellness & Relaxation</span>
            <div className="h-px w-16 bg-accent hidden sm:block" />
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-bold leading-[0.9] mb-8">
            VIE BEAUTY<br />
            SALON
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-sm md:text-base leading-relaxed text-charcoal/70 max-w-sm mb-8">
            Experience calming beauty treatments, rejuvenating massages, hair care and personalized services designed to refresh your body and mind.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href="#appointment"
              className="flex gap-4 items-center group"
            >
              <div className="w-12 h-12 rounded-full border border-charcoal flex items-center justify-center group-hover:bg-charcoal group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
              <span className="text-[11px] uppercase tracking-widest font-bold">Book Appointment</span>
            </a>
            <a
              href="#services"
              className="flex gap-4 items-center group sm:ml-4"
            >
              <span className="text-[11px] uppercase tracking-widest font-bold text-charcoal/60 hover:text-charcoal transition-colors">Explore Services</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Image Collage */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[600px] hidden md:block"
        >
          {/* Main Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800"
              alt="Relaxing spa treatment"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Layered Image 1 */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute top-10 right-0 w-48 h-64 rounded-[30px] overflow-hidden shadow-xl border-4 border-cream"
          >
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400"
              alt="Hair treatment"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating Card 1 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-20 -left-10 bg-white/90 backdrop-blur-sm p-4 rounded-[20px] shadow-sm border border-charcoal/10 flex items-center gap-4"
          >
            <div className="bg-sage/30 p-3 rounded-full">
              <Star className="w-6 h-6 text-charcoal fill-charcoal" />
            </div>
            <div>
              <div className="flex items-center gap-1 text-[11px] uppercase tracking-widest font-bold">
                4.9 <Star className="w-3 h-3 fill-accent text-accent" />
              </div>
              <div className="text-[10px] text-charcoal/60 uppercase tracking-widest mt-1">35+ Reviews</div>
            </div>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute top-20 left-0 bg-white/90 backdrop-blur-sm p-4 rounded-[20px] shadow-sm border border-charcoal/10"
          >
            <p className="text-[11px] uppercase tracking-widest font-bold">Natural Treatments</p>
            <p className="text-[10px] text-charcoal/60 uppercase tracking-widest mt-1">Relaxing Atmosphere</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

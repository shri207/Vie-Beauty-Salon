import { motion } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1521590832167-7bfcbaa6362d?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="uppercase tracking-widest text-[10px] font-bold text-charcoal/60 block mb-4">Experience</span>
            <h2 className="text-5xl font-serif font-bold mb-4">Inside Vie</h2>
            <p className="text-charcoal/70 text-sm">
              A glimpse into our serene environment and the natural treatments we provide.
            </p>
          </div>
          
          <div className="flex gap-3 flex-wrap">
            {["All", "Hair", "Massage", "Interior"].map((category, i) => (
              <button 
                key={category} 
                className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-colors border ${
                  i === 0 ? "bg-charcoal text-white border-charcoal" : "bg-transparent text-charcoal border-charcoal/20 hover:bg-charcoal/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="masonry-grid">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="masonry-item rounded-[40px] overflow-hidden group cursor-pointer relative"
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

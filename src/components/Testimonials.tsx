import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Reem Algshat",
    text: "This place feels like my second home. The staff are friendly and the natural hair treatments are amazing.",
    rating: 5,
  },
  {
    name: "Sa Ra",
    text: "Good service and calm atmosphere. I love the massage treatments.",
    rating: 5,
  },
  {
    name: "Aisha Al-Sabah",
    text: "The staff are welcoming and the relaxing atmosphere keeps me coming back. Best pedicures in town.",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    text: "Incredible experience! The wellness package completely rejuvenated me. Highly recommend.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    text: "Beautiful salon, great products. The protein treatment brought my hair back to life.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Client Stories</h2>
          <p className="text-charcoal/70">
            Read what our wonderful clients have to say about their experiences at Vie.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            className="pb-16 !overflow-visible"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-accent/20 border border-accent/40 rounded-[30px] p-8 h-full relative isolate mt-8 flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-accent text-xs italic font-serif">★</span>
                    ))}
                  </div>
                  
                  <p className="text-charcoal/90 text-sm italic mb-8 leading-relaxed flex-1">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="text-[10px] font-bold uppercase tracking-widest">
                    {testimonial.name}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="custom-pagination flex justify-center gap-2 mt-8" />
        </motion.div>
      </div>
    </section>
  );
}

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-serif font-bold mb-12">Visit Vie</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-charcoal" />
                </div>
                <div className="pt-2">
                  <h4 className="font-serif text-xl font-bold mb-2">Address</h4>
                  <p className="text-charcoal/70 text-sm leading-relaxed">Al Kindi St<br />Kuwait City, Kuwait</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-charcoal" />
                </div>
                <div className="pt-2">
                  <h4 className="font-serif text-xl font-bold mb-2">Contact</h4>
                  <p className="text-charcoal/70 text-sm leading-relaxed">Phone: +965 9901 2207<br />WhatsApp: +965 9901 2207</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-charcoal" />
                </div>
                <div className="pt-2">
                  <h4 className="font-serif text-xl font-bold mb-2">Email</h4>
                  <a href="mailto:info@viebeautysalon.com" className="text-charcoal/70 text-sm hover:text-accent transition-colors">
                    info@viebeautysalon.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-charcoal" />
                </div>
                <div className="pt-2">
                  <h4 className="font-serif text-xl font-bold mb-2">Business Hours</h4>
                  <p className="text-charcoal/70 text-sm leading-relaxed">Open Daily<br />10:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[500px] rounded-[40px] overflow-hidden shadow-sm border border-charcoal/10"
          >
            {/* Google Maps Embed using an iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111246.33129596482!2d47.88720803513337!3d29.356396827050186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c83ce455983%3A0xc3ebaef5af09b90e!2sKuwait%20City%2C%20Kuwait!5e0!3m2!1sen!2sus!4v1716500000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

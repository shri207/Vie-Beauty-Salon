import { Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cream/50 backdrop-blur-sm text-charcoal pt-24 pb-12 rounded-t-[40px] mt-[-3rem] border-t border-charcoal/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl font-bold italic tracking-tighter uppercase mb-6">VIE</h3>
            <p className="text-charcoal/60 text-sm mb-6 leading-relaxed">
              Beauty, Wellness & Relaxation.<br />
              Your sanctuary in Kuwait City.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center hover:bg-charcoal hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center hover:bg-charcoal hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center hover:bg-charcoal hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-[10px] uppercase tracking-widest font-semibold opacity-60 hover:opacity-100 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="text-[10px] uppercase tracking-widest font-semibold opacity-60 hover:opacity-100 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-[10px] uppercase tracking-widest font-semibold opacity-60 hover:opacity-100 hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="#appointment" className="text-[10px] uppercase tracking-widest font-semibold opacity-60 hover:opacity-100 hover:text-accent transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-[10px] uppercase tracking-widest font-semibold opacity-60 hover:opacity-100 hover:text-accent transition-colors">Hair Treatments</a></li>
              <li><a href="#services" className="text-[10px] uppercase tracking-widest font-semibold opacity-60 hover:opacity-100 hover:text-accent transition-colors">Wellness Massage</a></li>
              <li><a href="#services" className="text-[10px] uppercase tracking-widest font-semibold opacity-60 hover:opacity-100 hover:text-accent transition-colors">Nail Care</a></li>
              <li><a href="#services" className="text-[10px] uppercase tracking-widest font-semibold opacity-60 hover:opacity-100 hover:text-accent transition-colors">Skin Therapy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Newsletter</h4>
            <p className="text-charcoal/60 text-sm mb-4">Subscribe for offers and wellness tips.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border border-charcoal/20 px-4 py-3 rounded-l-full w-full outline-none focus:border-charcoal/50 transition-colors text-charcoal placeholder:text-charcoal/40 text-[11px] uppercase tracking-widest"
              />
              <button className="bg-charcoal text-white px-6 py-3 rounded-r-full font-bold text-[10px] uppercase tracking-widest hover:bg-accent hover:text-charcoal transition-colors border border-charcoal border-l-0">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-charcoal/10 flex flex-col md:flex-row items-center justify-between gap-4 text-charcoal/60 text-[10px] uppercase tracking-widest font-semibold">
          <p>© 2026 Vie Beauty Salon. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-charcoal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-charcoal transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/96599012207" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </footer>
  );
}

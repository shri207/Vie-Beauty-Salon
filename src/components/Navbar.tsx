import { motion } from "motion/react";
import { Menu, X, Phone, CalendarDays } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Packages", href: "#packages" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-cream/90 backdrop-blur-md h-20 flex items-center border-b border-charcoal/10" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between w-full">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-serif tracking-tighter uppercase font-bold italic text-charcoal">VIE</span>
          <div className="w-px h-6 bg-charcoal/20 mx-2 hidden sm:block"></div>
          <span className="text-[10px] uppercase tracking-widest font-semibold text-charcoal/60 hidden sm:block">Beauty Salon</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-widest font-semibold hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://wa.me/96599012207"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-[11px] uppercase tracking-widest font-semibold">+965 9901 2207</span>
          </a>
          <a
            href="#appointment"
            className="bg-charcoal text-white px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-accent hover:text-charcoal transition-colors flex items-center gap-2"
          >
            <span>Book Appointment</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-cream border-t border-charcoal/10 p-6 md:hidden flex flex-col gap-4 shadow-lg"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-serif"
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-charcoal/10 my-2" />
          <a
            href="#appointment"
            onClick={() => setIsOpen(false)}
            className="bg-charcoal text-white px-5 py-3 rounded-xl text-center font-medium"
          >
            Book Appointment
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "motion/react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Hello, I would like to book an appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Gender: ${formData.gender}
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}
Message: ${formData.message}

Please confirm my appointment.`;

    window.open(`https://wa.me/96599012207?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="appointment" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed opacity-5" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-cream rounded-[40px] p-8 md:p-12 shadow-sm border border-charcoal/10"
        >
          <div className="text-center mb-10">
            <h2 className="text-5xl font-serif font-bold mb-4">Book an Appointment</h2>
            <p className="text-sm text-charcoal/70">Reserve your time for relaxation and beauty.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input required type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full bg-white border border-charcoal/20 px-6 py-4 rounded-full outline-none focus:border-charcoal/50 transition-colors text-[11px] uppercase tracking-widest placeholder:text-charcoal/40" />
              <input required type="tel" name="phone" placeholder="Mobile Number" onChange={handleChange} className="w-full bg-white border border-charcoal/20 px-6 py-4 rounded-full outline-none focus:border-charcoal/50 transition-colors text-[11px] uppercase tracking-widest placeholder:text-charcoal/40" />
              <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className="w-full bg-white border border-charcoal/20 px-6 py-4 rounded-full outline-none focus:border-charcoal/50 transition-colors text-[11px] uppercase tracking-widest placeholder:text-charcoal/40" />
              <select required name="gender" onChange={handleChange} className="w-full bg-white border border-charcoal/20 px-6 py-4 rounded-full outline-none focus:border-charcoal/50 transition-colors appearance-none text-[11px] uppercase tracking-widest text-charcoal/60">
                <option value="">Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
              <select required name="service" onChange={handleChange} className="w-full bg-white border border-charcoal/20 px-6 py-4 rounded-full outline-none focus:border-charcoal/50 transition-colors appearance-none text-[11px] uppercase tracking-widest text-charcoal/60">
                <option value="">Select Service</option>
                <option value="Hair Treatment">Hair Treatment</option>
                <option value="Massage">Massage</option>
                <option value="Nail Care">Nail Care</option>
                <option value="Facial">Facial</option>
                <option value="Package">Wellness Package</option>
              </select>
              <input required type="date" name="date" onChange={handleChange} className="w-full bg-white border border-charcoal/20 px-6 py-4 rounded-full outline-none focus:border-charcoal/50 transition-colors text-[11px] uppercase tracking-widest text-charcoal/60" />
              <input required type="time" name="time" onChange={handleChange} className="w-full bg-white border border-charcoal/20 px-6 py-4 rounded-full outline-none focus:border-charcoal/50 transition-colors md:col-span-2 text-[11px] uppercase tracking-widest text-charcoal/60" />
            </div>
            
            <textarea name="message" placeholder="Additional Notes or Message" rows={4} onChange={handleChange} className="w-full bg-white border border-charcoal/20 px-6 py-4 rounded-3xl outline-none focus:border-charcoal/50 transition-colors resize-none text-[11px] uppercase tracking-widest placeholder:text-charcoal/40" />
            
            <button type="submit" className="w-full bg-charcoal text-white py-4 rounded-full hover:bg-accent hover:text-charcoal transition-colors text-[11px] uppercase tracking-widest font-bold border border-charcoal mt-6">
              Confirm via WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

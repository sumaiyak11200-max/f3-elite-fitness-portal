import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I'm ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/919729721600?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 gradient-dark" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading uppercase tracking-widest text-sm mb-3">Get In Touch</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground">
            Contact <span className="neon-text">Us</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info + Map */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-foreground">Location</h3>
                  <p className="text-sm text-muted-foreground">First Floor, SBI Bank, Old DC Road, Ashok Nagar, Sonipat, Haryana 131001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-foreground">Phone</h3>
                  <a href="tel:09729721600" className="text-sm text-primary hover:underline">097297 21600</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-foreground">Hours</h3>
                  <p className="text-sm text-muted-foreground">Mon - Sat: 6:00 AM – 10:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: 7:00 AM – 12:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden neon-border aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.1!2d77.02!3d28.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDAwJzAwLjAiTiA3N8KwMDEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="F3 Gym Location"
              />
            </div>

            {/* Quick actions */}
            <div className="flex gap-4">
              <motion.a
                href="tel:09729721600"
                whileHover={{ scale: 1.03 }}
                className="flex-1 glass neon-border rounded-xl py-4 flex items-center justify-center gap-2 text-foreground font-heading uppercase tracking-wider text-sm"
              >
                <Phone className="w-5 h-5 text-primary" /> Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/919729721600"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="flex-1 gradient-primary rounded-xl py-4 flex items-center justify-center gap-2 text-primary-foreground font-heading uppercase tracking-wider text-sm neon-glow"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </motion.a>
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-8 neon-border"
          >
            <h3 className="font-heading text-2xl font-bold uppercase text-foreground mb-6">Send a Message</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Phone</label>
                <input
                  type="tel"
                  required
                  maxLength={15}
                  value={formData.phone}
                  onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Message</label>
                <textarea
                  required
                  maxLength={500}
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="I'm interested in joining..."
                />
              </div>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 gradient-primary text-primary-foreground font-heading uppercase tracking-wider py-4 rounded-lg neon-glow flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" /> Send via WhatsApp
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

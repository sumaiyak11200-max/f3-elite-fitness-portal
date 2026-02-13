import { motion } from "framer-motion";
import { Star, Phone, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="F3 Freaky For Fitness premium gym interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm font-body text-foreground/80">4.7 Rating · Trusted by 60+ Members</span>
          </motion.div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight mb-6">
            <span className="text-foreground">Freaky For</span>
            <br />
            <span className="neon-text">Fitness</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body font-light">
            Sonipat's most premium fitness destination. Transform your body, elevate your mind, unleash your power.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#membership"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-primary text-primary-foreground font-heading text-lg uppercase tracking-wider px-10 py-4 rounded-lg neon-glow transition-all"
            >
              Start Your Transformation
            </motion.a>
            <motion.a
              href="tel:09729721600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass neon-border font-heading text-lg uppercase tracking-wider px-10 py-4 rounded-lg text-foreground flex items-center gap-2 transition-all"
            >
              <Phone className="w-5 h-5 text-primary" />
              Call Now
            </motion.a>
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex items-center justify-center gap-2 text-muted-foreground text-sm"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span>First Floor, SBI Bank, Old DC Road, Ashok Nagar, Sonipat</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

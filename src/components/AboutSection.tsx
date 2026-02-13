import { motion } from "framer-motion";
import { Shield, Users, Dumbbell, Sparkles } from "lucide-react";
import gymInterior from "@/assets/gym-interior-1.jpg";

const features = [
  { icon: Users, title: "Expert Trainers", desc: "Professional & friendly certified trainers" },
  { icon: Shield, title: "Safe For Women", desc: "Secure and comfortable environment for all" },
  { icon: Dumbbell, title: "Modern Equipment", desc: "State-of-the-art machines and free weights" },
  { icon: Sparkles, title: "Premium Interiors", desc: "Clean, energetic workout atmosphere" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden neon-border">
              <img src={gymInterior} alt="F3 Gym premium interior" className="w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-strong rounded-xl p-5 neon-border">
              <p className="font-heading text-3xl font-bold neon-text">4.7★</p>
              <p className="text-sm text-muted-foreground">Google Rating</p>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-heading uppercase tracking-widest text-sm mb-3"
            >
              About F3
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6 text-foreground"
            >
              Where Strength<br />
              <span className="neon-text">Meets Style</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mb-10 leading-relaxed"
            >
              F3 Freaky For Fitness is Sonipat's premier fitness destination, offering a world-class workout experience with modern equipment, professional trainers, and an atmosphere that pushes you to be your best every single day.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="glass rounded-xl p-5 group hover:neon-border transition-all duration-300"
                >
                  <f.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

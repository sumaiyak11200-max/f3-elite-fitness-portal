import { motion } from "framer-motion";
import { Award, Clock, Target } from "lucide-react";

const trainers = [
  { name: "Rahul Sharma", role: "Head Trainer", specialization: "Strength & Conditioning", experience: "8+ years", certifications: "ACE, NSCA" },
  { name: "Priya Singh", role: "Women's Fitness Coach", specialization: "Weight Loss & Toning", experience: "5+ years", certifications: "ISSA, CPR" },
  { name: "Vikram Yadav", role: "CrossFit Specialist", specialization: "Functional Training", experience: "6+ years", certifications: "CrossFit L2, NASM" },
];

const TrainersSection = () => {
  return (
    <section id="trainers" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading uppercase tracking-widest text-sm mb-3">Our Team</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground">
            Expert <span className="neon-text">Trainers</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl p-8 group hover:neon-border transition-all duration-300"
            >
              {/* Avatar placeholder */}
              <div className="w-24 h-24 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center text-primary-foreground font-heading text-3xl font-bold">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-foreground text-center">{t.name}</h3>
              <p className="text-primary text-sm text-center mb-6 font-heading uppercase tracking-wider">{t.role}</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Target className="w-4 h-4 text-primary" />
                  {t.specialization}
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  {t.experience} experience
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Award className="w-4 h-4 text-primary" />
                  {t.certifications}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;

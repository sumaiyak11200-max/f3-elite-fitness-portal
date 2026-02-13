import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Neha Gupta", text: "As a woman, I feel completely safe here. The environment is very clean and trainers are super professional. Best gym in Sonipat!", rating: 5 },
  { name: "Arjun Malik", text: "The equipment is top-notch and the trainers really push you to achieve your goals. Completely transformed my body in 6 months.", rating: 5 },
  { name: "Simran Kaur", text: "I was nervous about joining a gym but F3 made me feel at home. The women's section is amazing. Workout here is actually fun!", rating: 5 },
  { name: "Rohit Verma", text: "Best gym experience in Haryana. Modern machines, great atmosphere, and the trainers are like your fitness family.", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 gradient-dark" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading uppercase tracking-widest text-sm mb-3">Reviews</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground">
            What Members <span className="neon-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 hover:neon-border transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-secondary-foreground mb-6 leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">Verified Member</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

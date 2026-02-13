import { motion } from "framer-motion";
import gymInt2 from "@/assets/gym-interior-2.jpg";
import gymInt3 from "@/assets/gym-interior-3.jpg";
import heroImg from "@/assets/hero-gym.jpg";
import gymInt1 from "@/assets/gym-interior-1.jpg";

const equipment = [
  { name: "Strength Machines", desc: "Cable crossovers, smith machines, leg press, chest press & more", image: gymInt1 },
  { name: "Cardio Zone", desc: "Treadmills, ellipticals, spin bikes, rowing machines", image: gymInt2 },
  { name: "Free Weights", desc: "Dumbbells 2.5–50kg, Olympic bars, EZ bars, kettlebells", image: gymInt3 },
  { name: "Functional Zone", desc: "Battle ropes, TRX, plyo boxes, resistance bands", image: heroImg },
];

const EquipmentSection = () => {
  return (
    <section id="equipment" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading uppercase tracking-widest text-sm mb-3">Our Arsenal</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground">
            World-Class <span className="neon-text">Equipment</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {equipment.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[16/10] cursor-pointer"
            >
              <img src={e.image} alt={e.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl font-bold uppercase text-foreground mb-1">{e.name}</h3>
                <p className="text-sm text-muted-foreground">{e.desc}</p>
              </div>
              <div className="absolute inset-0 neon-border opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;

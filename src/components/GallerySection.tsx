import { motion } from "framer-motion";
import gymInt1 from "@/assets/gym-interior-1.jpg";
import gymInt2 from "@/assets/gym-interior-2.jpg";
import gymInt3 from "@/assets/gym-interior-3.jpg";
import heroImg from "@/assets/hero-gym.jpg";

const images = [gymInt1, gymInt2, gymInt3, heroImg];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading uppercase tracking-widest text-sm mb-3">Gallery</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground">
            Inside <span className="neon-text">F3</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img}
                alt={`F3 Gym gallery ${i + 1}`}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 neon-border rounded-xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

const BMISection = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) setBmi(parseFloat((w / (h * h)).toFixed(1)));
  };

  const getCategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Underweight", color: "text-primary" };
    if (bmi < 25) return { label: "Normal", color: "text-green-400" };
    if (bmi < 30) return { label: "Overweight", color: "text-yellow-400" };
    return { label: "Obese", color: "text-destructive" };
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 gradient-dark" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto glass-strong rounded-2xl p-8 neon-border"
        >
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-8 h-8 text-primary" />
            <h2 className="font-heading text-3xl font-bold uppercase text-foreground">BMI Calculator</h2>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="170"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="70"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={calculateBMI}
            className="w-full gradient-primary text-primary-foreground font-heading uppercase tracking-wider py-3 rounded-lg neon-glow"
          >
            Calculate BMI
          </motion.button>

          {bmi !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center glass rounded-xl p-6"
            >
              <p className="text-muted-foreground text-sm mb-1">Your BMI</p>
              <p className="font-heading text-5xl font-bold neon-text">{bmi}</p>
              <p className={`font-heading text-lg uppercase mt-2 ${getCategory(bmi).color}`}>
                {getCategory(bmi).label}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BMISection;

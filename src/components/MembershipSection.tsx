import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    price: "1,500",
    period: "/month",
    features: ["Full gym access", "Locker facility", "Basic guidance", "Cardio + strength zones"],
    popular: false,
  },
  {
    name: "Quarterly",
    price: "4,000",
    period: "/3 months",
    features: ["Full gym access", "Locker facility", "Diet consultation", "Cardio + strength zones", "Personal progress tracking"],
    popular: true,
  },
  {
    name: "Annual",
    price: "12,000",
    period: "/year",
    features: ["Full gym access", "Locker facility", "Diet consultation", "Personal training sessions", "Priority support", "Supplement discounts"],
    popular: false,
  },
  {
    name: "Personal Training",
    price: "3,500",
    period: "/month",
    features: ["1-on-1 trainer", "Custom workout plan", "Diet plan included", "Weekly body analysis", "Flexible timing"],
    popular: false,
  },
];

const MembershipSection = () => {
  return (
    <section id="membership" className="py-24 relative">
      <div className="absolute inset-0 gradient-dark" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading uppercase tracking-widest text-sm mb-3">Pricing</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground">
            Membership <span className="neon-text">Plans</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.popular
                  ? "glass-strong neon-border scale-105"
                  : "glass"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground text-xs font-heading uppercase tracking-wider px-4 py-1 rounded-full flex items-center gap-1">
                  <Zap className="w-3 h-3" /> Most Popular
                </div>
              )}
              <h3 className="font-heading text-xl font-bold uppercase text-foreground mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="font-heading text-4xl font-bold neon-text">₹{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <motion.a
                href="tel:09729721600"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`text-center font-heading uppercase tracking-wider py-3 rounded-lg transition-all ${
                  plan.popular
                    ? "gradient-primary text-primary-foreground neon-glow"
                    : "glass neon-border text-foreground hover:bg-primary/10"
                }`}
              >
                Join Now
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;

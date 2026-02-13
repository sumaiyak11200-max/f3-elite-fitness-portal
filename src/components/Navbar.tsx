import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Dumbbell } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Plans", href: "#membership" },
  { label: "Trainers", href: "#trainers" },
  { label: "Equipment", href: "#equipment" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong py-3" : "py-5"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Dumbbell className="w-7 h-7 text-primary" />
          <span className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            F3 <span className="neon-text">Fitness</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-heading text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#membership"
            className="gradient-primary text-primary-foreground font-heading text-sm uppercase tracking-wider px-6 py-2.5 rounded-lg neon-glow"
          >
            Join Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-lg uppercase tracking-wider text-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#membership"
                onClick={() => setMobileOpen(false)}
                className="gradient-primary text-primary-foreground font-heading uppercase tracking-wider px-6 py-3 rounded-lg text-center neon-glow"
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

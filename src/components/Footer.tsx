import { Dumbbell, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="w-6 h-6 text-primary" />
              <span className="font-heading text-lg font-bold uppercase text-foreground">
                F3 <span className="neon-text">Fitness</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sonipat's premium fitness destination. Transform your body, elevate your mind.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Plans", "Trainers", "Equipment", "Gallery", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                First Floor, SBI Bank, Old DC Road, Ashok Nagar, Sonipat
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:09729721600" className="hover:text-primary transition-colors">097297 21600</a>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-border transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">© 2025 F3 Freaky For Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

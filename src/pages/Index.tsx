import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MembershipSection from "@/components/MembershipSection";
import TrainersSection from "@/components/TrainersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EquipmentSection from "@/components/EquipmentSection";
import BMISection from "@/components/BMISection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MembershipSection />
      <TrainersSection />
      <TestimonialsSection />
      <EquipmentSection />
      <BMISection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;

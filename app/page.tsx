import HeroSection from "@/app/ui/landing/hero-section";
import Hero1 from "@/app/ui/landing/hero1";
import Certification from "@/app/ui/landing/certification";
import Achievements from "@/app/ui/landing/achievements";
import ContactForm from "@/app/ui/general/contact_form";
import Footer from "@/app/ui/general/footer";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Hero1/>
      <Certification/>
      <Achievements/>
      <ContactForm/>
      <Footer/>
    </div>

  );
}

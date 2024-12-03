import HeroSection from "@/app/ui/landing/hero-section";
import Hero1 from "@/app/ui/landing/hero1";
import Certification from "@/app/ui/landing/certification";
import Achievements from "@/app/ui/landing/achievements";
import ContactForm from "@/app/ui/general/contact_form";
import Footer from "@/app/ui/general/footer";
import {fetchCertification, fetchHero, fetchHero1, fetchNavigation, white_logo} from "@/app/lib/data";


export default async function Home() {

  const navigation = await fetchNavigation();
  const hero = await fetchHero();
  const hero1 = await fetchHero1();
  const certification = await fetchCertification();


  return (
    <div>
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        white_logo={white_logo}
        navigation={navigation}
        video={hero.video}
      />
      <Hero1
        title={hero1.title}
        text={hero1.text}
        image={hero1.image}

      />
      <Certification
        title={certification.title}
        text={certification.text}
        subtitle={certification.subtitle}
        features={certification.features}
        image={certification.image}
      />
      <Achievements/>
      <ContactForm/>
      <Footer/>
    </div>

  );
}

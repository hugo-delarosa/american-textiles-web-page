import HeroSection from "@/app/ui/landing/hero-section";
import Hero1 from "@/app/ui/landing/hero1";
import Certification from "@/app/ui/landing/certification";
import Achievements from "@/app/ui/landing/achievements";
import ContactForm from "@/app/ui/general/contact_form";
import Footer from "@/app/ui/general/footer";
import {fetchLanding, fetchNavigation, white_logo} from "@/app/lib/data";


export default async function Home() {

  const navigation = await fetchNavigation();
  const landing = await fetchLanding();

  return (
    <div>
      <HeroSection
        title={landing.title}
        subtitle={landing.subtitle}
        white_logo={white_logo}
        navigation={navigation}
        video={landing.video}
      />
      <Hero1
        title={landing.hero.title}
        text={landing.hero.text}
        image={landing.hero.image}

      />
      <Certification
        title={landing.certification.title}
        text={landing.certification.text}
        subtitle={landing.certification.subtitle}
        features={landing.certification.features}
        image={landing.certification.image}
      />
      <Achievements/>
      <ContactForm/>
      <Footer/>
    </div>

  );
}

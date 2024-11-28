import Header from "@/app/ui/general/header";
import AboutSection from "@/app/ui/about/about-section";
import Mission from "@/app/ui/about/mission";
import Footer from "@/app/ui/general/footer";
import ImageSection from "@/app/ui/about/image_section";
import Values from "@/app/ui/about/values";
import {navigation, logo, about_section, mission, vision, about_image_section} from "@/app/lib/data";


export default function About() {
  return (
    <div>
      <Header
        navigation={navigation}
        logo={logo}
      />
      <AboutSection
        title={about_section.title}
        paragraphs={about_section.paragraphs}
        images={about_section.images}
      />
      <Mission
        mission={mission}
        vision={vision}
      />
      <ImageSection
        image={about_image_section.image}
      />
      <Values/>
      <Footer/>
    </div>

  );
}

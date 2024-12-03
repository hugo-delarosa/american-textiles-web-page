import Header from "@/app/ui/general/header";
import AboutSection from "@/app/ui/about/about-section";
import Mission from "@/app/ui/about/mission";
import Footer from "@/app/ui/general/footer";
import ImageSection from "@/app/ui/about/image_section";
import Values from "@/app/ui/about/values";
import {logo, about_image_section, fetchNavigation, fetchAboutSection, fetchVision, fetchMission} from "@/app/lib/data";


export default async function About() {

  const navigation = await fetchNavigation();
  const about_section = await fetchAboutSection();
  const mission = await fetchMission();
  const vision = await fetchVision();

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

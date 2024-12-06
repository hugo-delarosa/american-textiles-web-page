import Header from "@/app/ui/general/header";
import AboutSection from "@/app/ui/about/about-section";
import Mission from "@/app/ui/about/mission";
import Footer from "@/app/ui/general/footer";
import ImageSection from "@/app/ui/about/image_section";
import Values from "@/app/ui/about/values";
import {logo, fetchNavigation, fetchAboutSection} from "@/app/lib/data";


export default async function About() {

  const [navigation, about] = await Promise.all([
    fetchNavigation(),
    fetchAboutSection()
  ]);

  return (
    <div>
      <Header
        navigation={navigation}
        logo={logo}
      />
      <AboutSection
        title={about.title}
        paragraphs={about.paragraphs}
        images={about.images}
      />
      <Mission
        mission={about.mission}
        vision={about.vision}
      />
      <ImageSection
        image={about.imageSection}
      />
      <Values/>
      <Footer/>
    </div>

  );
}

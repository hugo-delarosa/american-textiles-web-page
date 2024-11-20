import Header from "@/app/ui/general/header";
import AboutSection from "@/app/ui/about/about-section";
import Mission from "@/app/ui/about/mission";
import Footer from "@/app/ui/general/footer";
import ImageSection from "@/app/ui/about/image_section";
import Values from "@/app/ui/about/values";



export default function Home() {
  return (
    <div>
      <Header/>
      <AboutSection/>
      <Mission/>
      <ImageSection/>
      <Values/>
      <Footer/>
    </div>

  );
}

import Hero from "@/app/ui/catalog/Hero";
import CTA from "@/app/ui/catalog/CTA";
import Feature from "@/app/ui/catalog/Feature";
import Footer from "@/app/ui/general/footer";
import {catalog} from "@/app/lib/data";

export default function Catalog() {
  return (
    <div>
      <Hero
        collections={catalog.categories}
        title={catalog.title}
        view_category= {catalog.view_category}
      />
      <div className='my-10'>
        {catalog.categories.map((category) => (
          <Feature key={category.name} {...category}/>
        ))}
      </div>

      <CTA/>
      <Footer/>
    </div>
  );
}
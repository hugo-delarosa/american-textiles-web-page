import Hero from "@/app/ui/catalog/Hero";
import CTA from "@/app/ui/catalog/CTA";
import Feature from "@/app/ui/catalog/Feature";
import Footer from "@/app/ui/general/footer";
import { fetchCatalogPage} from "@/app/lib/data";

export default async function Catalog() {

  const catalog = await fetchCatalogPage();

  return (
    <div>
      <Hero
        catalog={catalog}
      />
      <div className='my-10'>
        {catalog.categories.map(function (category, index) {
            if (index % 2 === 0) return <Feature key={index} category={category} view_category={catalog.view_category}/>;
            return (<div key={index} ><Feature view_category={catalog.view_category} category={category}/> <CTA/></div>);
          }
        )}
      </div>
      <Footer/>
    </div>
  );
}
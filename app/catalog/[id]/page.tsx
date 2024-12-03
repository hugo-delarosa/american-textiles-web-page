import {fetchCatalog} from "@/app/lib/products";
import Filters from "@/app/ui/catalog/category/Filters";
import {fetchCategoryName} from "@/app/lib/data";


export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [catalog, category_name] = await Promise.all([
    fetchCatalog(id),
    fetchCategoryName(id),
  ]);
  const products = catalog.products;
  const filters = catalog.filters;


  return (
    <Filters filters={filters} products={products} category_name={category_name}/>
  )
}
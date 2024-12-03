import {fetchCatalog} from "@/app/lib/products";
import {CategoryCollection} from "@/app/lib/definitions";
import Filters from "@/app/ui/catalog/category/Filters";
import {fetchCategoryName} from "@/app/lib/data";


export default async function Page(props: {
  params: {
    id: string;
  };
}) {
  const catalog: CategoryCollection = await fetchCatalog(props.params.id);
  const products = catalog.products;
  const filters = catalog.filters;
  const category_name = await fetchCategoryName(props.params.id);

  return (
    <Filters filters={filters} products={products} category_name={category_name}/>
  )
}
import {fetchCatalog} from "@/app/lib/products";
import Filters from "@/app/ui/catalog/category/Filters";
export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const [catalog] = await Promise.all([
    fetchCatalog(slug),
  ]);


  return (
    <Filters collection={catalog}/>
  )
}
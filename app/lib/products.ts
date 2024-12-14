import {getDictionary} from "@/app/lib/dictionaries";
import {language} from "@/app/lib/data";
import {Product, ProductCollection} from "@/app/lib/definitions";

export async function fetchCatalog(category: string): Promise<ProductCollection> {
  const dictionary = await getDictionary(await language());
  return dictionary.products_catalog.find((product) => product.id === category) ?? dictionary.products_catalog[0];
}

export async function fetchProduct(slug: string, id: number ): Promise<Product> {
  const catalog = await fetchCatalog(slug);
  console.log(typeof id);
  console.log(catalog.products.find((product) => product.id == id));
  return catalog.products.find((product) => product.id == id) ?? catalog.products[0];
}
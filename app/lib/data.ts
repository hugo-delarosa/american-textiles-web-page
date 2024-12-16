import 'server-only';

import {getDictionary} from "@/app/lib/dictionaries";
import {cookies} from "next/headers";
import {fetchCatalog} from "@/app/lib/products";
import {
  About, Catalog,
  General,
  Landing,
  Navigation, Product
} from "@/app/lib/definitions";

export const logo = {
  alt: 'Company Logo',
  height: 200,
  src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/logo_04.svg',
  width: 250
}
export const iso_logo = {
  alt: 'ISO Logo',
  height: 200,
  src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/isotype.svg',
  width: 250
}
export const white_logo = {
  alt: 'Company Logo',
  height: 200,
  src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/logo_white.svg',
  width: 250
}

export const language = async (): Promise <string> =>{
  const cookieStore = await cookies();
  return cookieStore.get('lang')?.value || 'es';
}

export async function fetchGeneralInformation(): Promise<General> {
  const dictionary = await getDictionary(await language());
  return dictionary.general;
}

export async function fetchNavigation(): Promise<Navigation> {
  const dictionary = await getDictionary(await language());
  return dictionary.navigation;
}

export async function fetchLanding(): Promise<Landing> {
  const dictionary = await getDictionary(await language());
  return dictionary.landing;
}

export async function fetchAboutSection(): Promise<About> {
  const dictionary = await getDictionary(await language());
  return dictionary.about;
}

export async function fetchCatalogPage(): Promise<Catalog> {
  const dictionary = await getDictionary(await language());
  const auto_category = await fetchCatalog('auto');
  const auto_products = auto_category.products.sort(function () {
    return (Math.random() - 0.5) * 2;
  }).slice(0,3);
  const sportswear_category = await fetchCatalog('sportswear');
  const sportswear_products = sportswear_category.products.sort(function () {
    return (Math.random() - 0.5) * 2;
  }).slice(0,6);
  const lingerie_category = await fetchCatalog('lingerie');
  const lingerie_products = lingerie_category.products.sort(function () {
    return (Math.random() - 0.5) * 2;
  });
  const technical_category = await fetchCatalog('technical');
  const technical_products = technical_category.products.sort(function () {
    return (Math.random() - 0.5) * 2;
  });

  const trending_products: Record<string, Product[]> = {
    auto: auto_products,
    sportswear: sportswear_products,
    lingerie: lingerie_products,
    technical: technical_products
  }
  dictionary.catalog.categories.map((category) => {
    category.trendingProducts = trending_products[category.id];
  });
  return dictionary.catalog;
}
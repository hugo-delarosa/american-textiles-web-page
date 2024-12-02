import 'server-only'

// Define the types for the es.json dictionary
interface General {
  email: string;
  phone: string;
  name: string;
  address: string;
}

interface Landing {
  title: string;
  subtitle: string;
}

interface LandingHero {
  title: string;
  text: string;
}

interface Navigation {
  about: string;
  catalog: string;
  contact: string;
}

interface CertificationFeature {
  name: string;
  description: string;
}

interface Certification {
  title: string;
  subtitle: string;
  text: string;
  feature1: CertificationFeature;
  feature2: CertificationFeature;
  feature3: CertificationFeature;
}

interface About {
  title: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
}

interface Mission {
  title: string;
  text: string;
}

interface Vision {
  title: string;
  text: string;
}

interface Value {
  name: string;
  description: string;
}

interface Values {
  title: string;
  text: string;
  value1: Value;
  value2: Value;
  value3: Value;
  value4: Value;
}

interface CatalogCategory {
  name: string;
}

interface Catalog {
  title: string;
  view_category: string;
  category1: CatalogCategory;
  category2: CatalogCategory;
  category3: CatalogCategory;
  category4: CatalogCategory;
}

interface Product {
  name: string;
  color: string;
  description?: string;
}

interface Products {
  auto: Record<string, Product>;
}

interface Dictionary {
  general: General;
  landing: Landing;
  landing_hero: LandingHero;
  navigation: Navigation;
  certification: Certification;
  about: About;
  mission: Mission;
  vision: Vision;
  values: Values;
  catalog: Catalog;
  products: Products;
}

export type { Dictionary };

// Create the dictionaries object with specific types
const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import('./en.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
};

// Create a function to get the dictionary for a given locale
export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const loadDictionary = dictionaries[locale];
  if (!loadDictionary) {
    throw new Error(`Dictionary for locale '${locale}' is not available.`);
  }
  return loadDictionary();
};
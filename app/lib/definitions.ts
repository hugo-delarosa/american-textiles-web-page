export type General = {
  email: string;
  phone: string;
  name: string;
  address: string;
  title: string;
  description: string;
}

export type Navigation = {
  name: string;
  href: string;
}[]

export type Landing = {
  title: string;
  subtitle: string;
  video: string;
  hero: {
    title: string;
    text: string;
    image: {
      alt: string;
      src: string;
    }
  }
  certification: Certification;
}

export type CertificationFeature = {
  name: string;
  description: string;
  icon: string;
}

export type Certification = {
  title: string;
  subtitle: string;
  text: string;
  features: CertificationFeature[];
  image: {
    alt: string;
    src: string;
  }
}

export type About = {
  title: string;
  paragraphs: string[];
  images: {
    alt: string;
    src: string;
  }[];
  mission: Mission;
  vision: Vision;
  values: Values;
  imageSection: {
    alt: string;
    src: string;
  }

}

export type Mission = {
  title: string;
  text: string;
}

export type Vision = {
  title: string;
  text: string;
}

export type Value = {
  name: string;
  description: string;
}

export type Values = {
  title: string;
  text: string;
  values: Value[];
}

export type CatalogCategory = {
  id: string;
  name: string;
  href: string;
  image: {
    alt: string;
    src: string;
  }
  trendingProducts?: Product[];
}

export type Catalog = {
  title: string;
  view_category: string;
  image: {
    src: string;
    alt: string;
  }
  categories: CatalogCategory[];
}

export type ProductCollection = {
  id: string;
  name: string;
  filters: Filter[];
  products: Product[]
}

export type Product = {
  id: number;
  name: string;
  color: string;
  href: string;
  image: {
    alt: string;
    src: string;
 },
  images:{
    alt: string;
    src: string;
    id: number;
  }[];
  description?: string;
  details?: {
    name: string;
    items: string[];
  }[];
  filter_criteria: string[];
}

export type Filter = {
  id: string;
  name: string;
  options: {
    value: string;
    label: string;
  }[];
}

export type Dictionary = {
  general: General;
  navigation: Navigation;
  landing: Landing;
  about: About;
  catalog: Catalog;
  products_catalog: ProductCollection[];
}

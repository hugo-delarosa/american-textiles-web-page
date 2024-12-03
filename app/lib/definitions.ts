
import * as React from "react";

export type General = {
  email: string;
  phone: string;
  name: string;
  address: string;
  title: string;
  description: string;
}

export type Landing = {
  title: string;
  subtitle: string;
  video: string;
}

export type LandingHero = {
  title: string;
  text: string;
  image: {
    alt: string;
    src: string;
  }
}

export type Navigation = {
  name: string;
  href: string;
}[]



export type CertificationFeature = {
  name: string;
  description: string;
  icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>;
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
  name: string;
  href: string;
  image: {
    alt: string;
    src: string;
  }
  trendingProducts: Product[];
}

export type Catalog = {
  title: string;
  view_category: string;
  categories: CatalogCategory[];
}

export type Product = {
  id: number;
  name: string;
  color: string;
  href: string;
  image: {
    alt: string;
    src: string;
 }
  description?: string;
  collection: string;
}

export type Products = {
  auto: Record<string, Product>;
}

export type CategoryCollection = {
  filters: Filter[];
  products: Product[];
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
  filters: {
    collection: {
      name: string;
      options: {
        headliner: string;
        seat: string;
        volster: string;
      }
    }
  }
}

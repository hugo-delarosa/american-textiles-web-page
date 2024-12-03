import 'server-only';

import {getDictionary} from "@/app/lib/dictionaries";
import {cookies} from "next/headers";
import {BeakerIcon, ClipboardDocumentCheckIcon, UserGroupIcon} from "@heroicons/react/16/solid";
import {fetchAutoCatalog} from "@/app/lib/products";
import {
  About, Catalog,
  Certification,
  General,
  Landing,
  LandingHero,
  Mission,
  Navigation, Values, Vision
} from "@/app/lib/definitions";

export const language = async (): Promise <string> =>{
  const cookieStore = await cookies();
  return cookieStore.get('lang')?.value || 'es';
}

export async function fetchGeneralInformation(): Promise<General> {
  const dictionary = await getDictionary(await language());
  return{
    title: dictionary.general.title,
    description: dictionary.general.description,
    name: dictionary.general.name,
    address: dictionary.general.address,
    email: dictionary.general.email,
    phone: dictionary.general.phone,
  };
}

export const logo = {
  alt: 'Company Logo',
  height: 200,
  src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/logo.svg',
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

export const about_image_section = {
  image: {
    alt: 'About Image Section',
    src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/about/image_6.jpg'
  }
}

export async function fetchNavigation(): Promise<Navigation> {
  const dictionary = await getDictionary(await language());
  const navigationHrefs = [
    '/about',
    '/catalog',
    '/contact'
  ];
  return dictionary.navigation.map((nav, index) => ({
    name: nav.name,
    href: navigationHrefs[index],
  }));

}

export async function fetchHero(): Promise<Landing> {
  const dictionary = await getDictionary(await language());
  return {
    title: dictionary.landing.title,
    subtitle: dictionary.landing.subtitle,
    video: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/IMG_6663.mp4'
  };
}

export async function fetchHero1(): Promise<LandingHero> {
  const dictionary = await getDictionary(await language());
  return {
    title: dictionary.landing_hero.title,
    text: dictionary.landing_hero.text,
    image: {
      alt: 'Hero Image',
      src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/landing/image_1.jpg',
    }
  };
}

export async function fetchCertification(): Promise<Certification> {
  const dictionary = await getDictionary(await language());
  const icons = [
    BeakerIcon,
    ClipboardDocumentCheckIcon,
    UserGroupIcon,
  ];

  return {
    title: dictionary.certification.title,
    subtitle: dictionary.certification.subtitle,
    text: dictionary.certification.text,
    features: dictionary.certification.features.map((feature, index) => ({
      name: feature.name,
      description: feature.description,
      icon: icons[index],
    })),
    image: {
      alt: 'Certification Image',
      src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/landing/image_2.png'
    }
  };
}

export async function fetchAboutSection(): Promise<About> {
  const dictionary = await getDictionary(await language());
  return {
    title: dictionary.about.title,
    paragraphs: dictionary.about.paragraphs,
    images: [
      {
        alt: 'About Image 1',
        src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/about/image_1.jpg',
      },
      {
        alt: 'About Image 2',
        src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/about/image_2.jpg',
      },
      {
        alt: 'About Image 3',
        src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/about/image_3.jpg',
      },
      {
        alt: 'About Image 4',
        src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/about/image_4.jpg',
      },
      {
        alt: 'About Image 5',
        src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/about/image_5.jpg',
      },
    ]
  };
}

export async function fetchMission(): Promise<Mission> {
  const dictionary = await getDictionary(await language());
  return {
    title: dictionary.mission.title,
    text: dictionary.mission.text,
  };
}

export async function fetchVision(): Promise<Vision> {
  const dictionary = await getDictionary(await language());
  return {
    title: dictionary.vision.title,
    text: dictionary.vision.text,
  };
}

export async function fetchValues(): Promise<Values> {
  const dictionary = await getDictionary(await language());
  return {
    title: dictionary.values.title,
    text: dictionary.values.text,
    values: dictionary.values.values
  }
}

export async function fetchCatalogPage(): Promise<Catalog> {
  const dictionary = await getDictionary(await language());
  const auto_category = await fetchAutoCatalog();
  const auto_products = auto_category.products.sort(function () {
    return (Math.random() - 0.5) * 2;
  });


  const categoryImages = [
    'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/image_2.jpg',
    'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/image_3.jpg',
    'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/image_4.jpg',
    'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/image_5.jpg'
  ];

  const categoryHrefs = [
    '/catalog/auto',
    '#',
    '#',
    '#'
  ];


  return {
    title: dictionary.catalog.title,
    view_category: dictionary.catalog.view_category,
    categories: dictionary.catalog.categories.map((category, index) => ({
      name: category.name,
      href: categoryHrefs[index],
      image: {
        src: categoryImages[index],
        alt: `${category.name} category`,
      },
      trendingProducts: auto_products.slice(0, 3)
    }))
  };
}

export async function fetchCategoryName(category: string): Promise<string> {
  const dictionary = await getDictionary(await language());
  switch (category) {
    case 'auto':
      return dictionary.catalog.categories[0].name;
    case 'sportswear':
      return dictionary.catalog.categories[1].name;
    case'lingerie':
      return dictionary.catalog.categories[2].name;
    case'tecnical':
      return dictionary.catalog.categories[3].name;
    default:
      return 'Auto';
  }
}

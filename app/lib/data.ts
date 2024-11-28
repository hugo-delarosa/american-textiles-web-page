import 'server-only'

import {getDictionary} from "@/app/lib/dictionaries/dictionaries";
import {cookies} from "next/headers";
import {BeakerIcon, ClipboardDocumentCheckIcon, UserGroupIcon} from "@heroicons/react/16/solid";
import {auto} from "@/app/lib/products";

const cookieStore = await cookies()

const lang =  cookieStore.get('lang')?.value;

const dictionary = await getDictionary(lang || 'es');


export const general = {
  title: dictionary.general.title,
  description: dictionary.general.description,
  email: "ventas@ameritex.com.mx",
  phone: "55 5555 5555",
}

export const logo = {
  alt: 'Company Logo',
  height: 200,
  src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/logo.svg',
  width: 250

}

export const white_logo = {
  alt: 'Company Logo',
  height: 200,
  src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/logo_white.svg',
  width: 250
}

export const navigation = [
  { name: dictionary.navigation.about, href: '/about' },
  { name: dictionary.navigation.catalog, href: '/catalog' },
  { name: dictionary.navigation.contact, href: '#' },
]

export const hero = {
  title: dictionary.landing.title,
  subtitle: dictionary.landing.subtitle,
  video: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/IMG_6663.mp4'
}

export const hero1 = {
  title: dictionary.landing_hero.title,
  text : dictionary.landing_hero.text,
  image: {
    alt: 'Hero Image',
    src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/landing/image_1.jpg',
  }
}

export const certification = {
  title: dictionary.certification.title,
  text: dictionary.certification.text,
  subtitle: dictionary.certification.subtitle,
  features: [
    { name: dictionary.certification.feature1.name, description: dictionary.certification.feature1.description, icon: BeakerIcon },
    { name: dictionary.certification.feature2.name, description: dictionary.certification.feature2.description, icon: UserGroupIcon },
    { name: dictionary.certification.feature3.name, description: dictionary.certification.feature3.description, icon:ClipboardDocumentCheckIcon },
  ],
  image: {
    alt: 'Certification Image',
    src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/landing/image_2.png',
  }
}

export const about_section = {
  title: dictionary.about.title,
  paragraphs: [
    dictionary.about.paragraph1,
    dictionary.about.paragraph2,
    dictionary.about.paragraph3,
  ],
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
}

export const mission = {
  title: dictionary.mission.title,
  text: dictionary.mission.text,
}

export const vision = {
  title: dictionary.vision.title,
  text: dictionary.vision.text,
}

export const about_image_section = {
  image: {
    alt: 'About Image Section',
    src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/about/image_6.jpg'
  }
}

export const values = {
  title: dictionary.values.title,
  text: dictionary.values.text,
  values: [
    { name: dictionary.values.value1.name, description: dictionary.values.value1.description },
    { name: dictionary.values.value2.name, description: dictionary.values.value2.description },
    { name: dictionary.values.value3.name, description: dictionary.values.value3.description },
  ]
}


const auto_products = auto(dictionary);

export const catalog = {
  title: dictionary.catalog.title,
  view_category: dictionary.catalog.view_category,
  image: {
    alt: 'Catalog Image',
    src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/image_1.jpg'
  },
  categories: [
    {
      name: dictionary.catalog.category1.name,
      href: '#',
      imageSrc: '/images/catalog/image_2.jpg',
      imageAlt: 'auto category',
      trendingProducts: [
        auto_products[0],
      ]
    },
    {
      name: dictionary.catalog.category2.name,
      href: '#',
      imageSrc: '/images/catalog/image_3.jpg',
      imageAlt: 'sport category',
      trendingProducts: [
        auto_products[1],
      ]
    },
    {
      name: dictionary.catalog.category3.name,
      href: '#',
      imageSrc: '/images/catalog/image_4.jpg',
      imageAlt: 'lingerie category',
      trendingProducts: [
        auto_products[2],
      ]
    },
    {
      name: dictionary.catalog.category4.name,
      href: '#',
      imageSrc: '/images/catalog/image_5.jpg',
      imageAlt: 'technical textiles category',
      trendingProducts: [
        auto_products[0],
      ]
    }
  ]
}
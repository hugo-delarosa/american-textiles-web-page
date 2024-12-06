import {getDictionary} from "@/app/lib/dictionaries";
import {language} from "@/app/lib/data";
import { ProductCollection} from "@/app/lib/definitions";

export async function fetchCatalog(category: string): Promise<ProductCollection> {
  const dictionary = await getDictionary(await language());
  return dictionary.products_catalog.find((product) => product.id === category) ?? dictionary.products_catalog[0];
}

// export  async function fetchAutoCatalog(): Promise<CategoryCollection> {
//   const dictionary = await getDictionary(await language());
//   return(
//     {
//       filters:[
//         {
//           id: "collection",
//           name: dictionary.filters.collection.name,
//           options: [
//             {value: "headliner", label: dictionary.filters.collection.options.headliner},
//             {value: "seat", label: dictionary.filters.collection.options.seat},
//             {value: "volster", label: dictionary.filters.collection.options.volster},
//           ]
//         }
//       ],
//       products:  [
//         {
//           id: 5,
//           name: dictionary.products.auto[5].name,
//           color: dictionary.products.auto[5].color,
//           href: '#',
//           image: {
//             alt: dictionary.products.auto[5].name + ' - ' + dictionary.products.auto[5].color,
//             src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/seat/orange/image_1.jpg',
//           },
//           collection: 'seat',
//         },
//         {
//           id: 6,
//           name: dictionary.products.auto[6].name,
//           color: dictionary.products.auto[6].color,
//           href: '#',
//           image: {
//             alt: dictionary.products.auto[6].name + ' - ' + dictionary.products.auto[6].color,
//             src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/seat/teal/image_1.jpg',
//           },
//           collection: 'seat',
//         },
//         {
//           id: 7,
//           name: dictionary.products.auto[7].name,
//           color: dictionary.products.auto[7].color,
//           href: '#',
//           image: {
//             alt: dictionary.products.auto[7].name + ' - ' + dictionary.products.auto[7].color,
//             src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/seat/viscose/image_1.jpg',
//           },
//           collection: 'seat',
//         },
//         {
//           id: 8,
//           name: dictionary.products.auto[8].name,
//           color: dictionary.products.auto[8].color,
//           href: '#',
//           image: {
//             alt: dictionary.products.auto[8].name + ' - ' + dictionary.products.auto[8].color,
//             src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/volster/gaelita/mole/image_1.jpg',
//           },
//           collection: 'volster',
//         },
//         {
//           id: 9,
//           name: dictionary.products.auto[9].name,
//           color: dictionary.products.auto[9].color,
//           href: '#',
//           image: {
//             alt: dictionary.products.auto[9].name + ' - ' + dictionary.products.auto[9].color,
//             src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/volster/galena/clay/image_1.jpg',
//           },
//           collection: 'volster',
//         },
//         {
//           id: 10,
//           name: dictionary.products.auto[10].name,
//           color: dictionary.products.auto[10].color,
//           href: '#',
//           image: {
//             alt: dictionary.products.auto[10].name + ' - ' + dictionary.products.auto[10].color,
//             src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/volster/onix/salvia/image_1.jpg',
//           },
//           collection: 'volster',
//         },
//         {
//           id: 11,
//           name: dictionary.products.auto[11].name,
//           color: dictionary.products.auto[11].color,
//           href: '#',
//           image: {
//             alt: dictionary.products.auto[11].name + ' - ' + dictionary.products.auto[11].color,
//             src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/volster/onix/tangerine/image_1.jpg',
//           },
//           collection: 'volster',
//         },
//         {
//           id: 12,
//           name: dictionary.products.auto[12].name,
//           color: dictionary.products.auto[12].color,
//           href: '#',
//           image: {
//             alt: dictionary.products.auto[12].name + ' - ' + dictionary.products.auto[12].color,
//             src: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/volster/onix/timelapse/image_1.jpg',
//           },
//           collection: 'volster',
//         },
//
//       ]
//     }
//   )
// }
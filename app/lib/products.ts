type Dictionary = Record<string, any>;

export  function auto(dictionary: Dictionary) {
  return(
    [
      {
        id: 1,
        name: dictionary.products.auto[1].name,
        color: dictionary.products.auto[1].color,
        href: '#',
        imageSrc: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/headliner/gray/image_1.jpg',
        imageAlt: dictionary.products.auto[1].name + ' - ' + dictionary.products.auto[1].color,
      },
      {
        id: 2,
        name: dictionary.products.auto[2].name,
        color: dictionary.products.auto[2].color,
        href: '#',
        imageSrc: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/headliner/laminate/image_1.jpg',
        imageAlt: dictionary.products.auto[2].name + ' - ' + dictionary.products.auto[2].color,
      },
      {
        id: 3,
        name: dictionary.products.auto[3].name,
        color: dictionary.products.auto[3].color,
        href: '#',
        imageSrc: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/seat/bamboo/image_1.jpg',
        imageAlt: dictionary.products.auto[3].name + ' - ' + dictionary.products.auto[3].color,
      },
      {
        id: 4,
        name: dictionary.products.auto[4].name,
        color: dictionary.products.auto[4].color,
        href: '#',
        imageSrc: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/seat/black/image_1.jpg',
        imageAlt: dictionary.products.auto[4].name + ' - ' + dictionary.products.auto[4].color,
      },
      {
        id: 5,
        name: dictionary.products.auto[5].name,
        color: dictionary.products.auto[5].color,
        href: '#',
        imageSrc: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/seat/orange/image_1.jpg',
        imageAlt: dictionary.products.auto[5].name + ' - ' + dictionary.products.auto[5].color,
      },
      {
        id: 6,
        name: dictionary.products.auto[6].name,
        color: dictionary.products.auto[6].color,
        href: '#',
        imageSrc: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/seat/teal/image_1.jpg',
        imageAlt: dictionary.products.auto[6].name + ' - ' + dictionary.products.auto[6].color,
      },
      {
        id: 7,
        name: dictionary.products.auto[7].name,
        color: dictionary.products.auto[7].color,
        href: '#',
        imageSrc: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/seat/viscose/image_1.jpg',
        imageAlt: dictionary.products.auto[7].name + ' - ' + dictionary.products.auto[7].color,
      },
      {
        id: 8,
        name: dictionary.products.auto[8].name,
        color: dictionary.products.auto[8].color,
        href: '#',
        imageSrc: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/volster/gaelita/mole/image_1.jpg',
        imageAlt: dictionary.products.auto[8].name + ' - ' + dictionary.products.auto[8].color,
      },
      {
        id: 9,
        name: dictionary.products.auto[9].name,
        color: dictionary.products.auto[9].color,
        href: '#',
        imageSrc: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/volster/galena/clay/image_1.jpg',
        imageAlt: dictionary.products.auto[9].name + ' - ' + dictionary.products.auto[9].color,
      },
      {
        id: 10,
        name: dictionary.products.auto[10].name,
        color: dictionary.products.auto[10].color,
        href: '#',
        imageSrc: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/volster/onix/salvia/image_1.jpg',
        imageAlt: dictionary.products.auto[10].name + ' - ' + dictionary.products.auto[10].color,
      },
      {
        id: 11,
        name: dictionary.products.auto[11].name,
        color: dictionary.products.auto[11].color,
        href: '#',
        imageSrc: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/volster/onix/tangerine/image_1.jpg',
        imageAlt: dictionary.products.auto[11].name + ' - ' + dictionary.products.auto[11].color,
      },
      {
        id: 12,
        name: dictionary.products.auto[12].name,
        color: dictionary.products.auto[12].color,
        href: '#',
        imageSrc: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/volster/onix/timelapse/image_1.jpg',
        imageAlt: dictionary.products.auto[12].name + ' - ' + dictionary.products.auto[12].color,
      },

    ]
  )
}

export function sportswear(dictionary: Dictionary) {
  return(
    [
      {
        id: 4,
        name: dictionary.products.sportswear[4].name,
        color: dictionary.products.sportswear[4].color,
        href: '#',
        imageSrc: '/images/catalog/sportswear/costa-rica/a/image_1.jpg',
        imageAlt: dictionary.products.sportswear[4].name + ' - ' + dictionary.products.sportswear[4].color,
      },
    ]
  )
}
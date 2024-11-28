type Dictionary = Record<string, any>;

export  function auto(dictionary: Dictionary) {
  return(
    [
      {
        id: 1,
        name: dictionary.products.auto[1].name,
        color: dictionary.products.auto[1].color,
        href: '#',
        imageSrc: '/images/catalog/auto/volster/onix/salvia/image_1.jpg',
        imageAlt: dictionary.products.auto[1].name + ' - ' + dictionary.products.auto[1].color,
      },
      {
        id: 2,
        name: dictionary.products.auto[2].name,
        color: dictionary.products.auto[2].color,
        href: '#',
        imageSrc: '/images/catalog/auto/headliner/gray/image_1.jpg',
        imageAlt: dictionary.products.auto[2].name + ' - ' + dictionary.products.auto[2].color,
      },
      {
        id: 3,
        name: dictionary.products.auto[3].name,
        color: dictionary.products.auto[3].color,
        href: '#',
        imageSrc: '/images/catalog/auto/seat/orange/image_1.jpg',
        imageAlt: dictionary.products.auto[3].name + ' - ' + dictionary.products.auto[3].color,
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
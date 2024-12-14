import {
  Disclosure,
  DisclosureButton, DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels
} from "@headlessui/react";
import { MinusIcon, PlusIcon} from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import {fetchProduct} from "@/app/lib/products";

const relatedProducts = [
  {
    id: 1,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: 'https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/auto/headliner/laminate/image_1.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  // More products...
]
export default async function Page(props: { params: Promise<{ slug: string, id: number }> }) {
  const { slug, id  } = await props.params;
  const product = await fetchProduct(slug, id);
    return (
      <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            <TabGroup className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <TabList className="grid grid-cols-4 gap-6">
                  {product.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-primary_blue/50 focus:ring-offset-4"
                    >
                      <span className="sr-only">{image.alt}</span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <Image width={300} height={300} alt="" src={image.src} className="size-full object-cover"/>
                      </span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-primary_blue"
                      />
                    </Tab>
                  ))}
                </TabList>
              </div>

              <TabPanels>
                {product.images.map((image) => (
                  <TabPanel key={image.id}>
                    <Image width={1920} height={1080} alt={image.alt} src={image.src} className="aspect-square w-full object-cover sm:rounded-lg"/>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <p>{product.description}</p>
              </div>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="divide-y divide-gray-200 border-t">
                  {product.details?.map((detail) => (
                    <Disclosure key={detail.name} as="div">
                      <h3>
                        <DisclosureButton
                          className="group relative flex w-full items-center justify-between py-6 text-left">
                          <span className="text-sm font-medium text-gray-900 group-data-[open]:text-indigo-600">
                            {detail.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon
                              aria-hidden="true"
                              className="block size-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                            />
                            <MinusIcon
                              aria-hidden="true"
                              className="hidden size-6 text-indigo-400 group-hover:text-indigo-500 group-data-[open]:block"
                            />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pb-6">
                        <ul
                          role="list"
                          className="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-gray-300"
                        >
                          {detail.items.map((item) => (
                            <li key={item} className="pl-2">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <section aria-labelledby="related-heading" className="mt-10 border-t border-gray-200 px-4 py-16 sm:px-0">
            <h2 id="related-heading" className="text-xl font-bold text-gray-900">
              Customers also bought
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                >
                  <Image
                    alt={product.imageSrc}
                    src={product.imageSrc}
                    width={450}
                    height={600}
                    className="aspect-[3/4] bg-gray-200 object-cover group-hover:opacity-75 sm:h-96"
                  />
                  <div className="flex flex-1 flex-col space-y-2 p-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      <Link href={`/catalog/product/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0"/>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500">{product.name}</p>
                    <div className="flex flex-1 flex-col justify-end">
                      <p className="text-sm italic text-gray-500">{product.color}</p>
                      {/*<p className="text-base font-medium text-gray-900">{product.price}</p>*/}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

    );
}
import Image from "next/image";
import Link from "next/link";

export default function Hero(props: {
  title: string;
  view_category: string;
  collections: { name: string; href: string; imageSrc: string; imageAlt: string }[]
}) {
  return (
    <div className="relative">
      {/* Background image and overlap */}
      <div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
        <div className="relative w-full flex-1 bg-gray-800">
          <div className="absolute inset-0 overflow-hidden">
            <Image src='/images/catalog/image_1.jpg' alt='Catalog Image' width={768} height={1024} className="size-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gray-900 opacity-50"/>
        </div>
        <div className="h-32 w-full bg-white md:h-40 lg:h-48"/>
      </div>

      <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
        {/* Background image and overlap */}
        <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
          <div className="relative w-full flex-1 bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <Image src='/images/catalog/image_1.jpg' alt='Catalog Image' width={768} height={1024} className="size-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50"/>
          </div>
          <div className="h-48 w-full bg-white"/>
        </div>
        <div className="relative py-32">
          <h1 className="text-4xl font-bold font-granville tracking-tight text-white sm:text-5xl md:text-6xl">{props.title}</h1>
        </div>
      </div>

      <section aria-labelledby="collection-heading" className="relative -mt-96 sm:mt-0">
        <h2 id="collection-heading" className="sr-only">
          Collections
        </h2>
        <div
          className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-4 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
          {props.collections.map((collection) => (
            <div
              key={collection.name}
              className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-[4/5] sm:h-auto"
            >
              <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-lg">
                <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                  <Image src={collection.imageSrc} alt={collection.imageAlt} className="size-full object-cover" width={200} height={500} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"/>
              </div>
              <div className="absolute inset-0 flex items-end rounded-lg p-6">
                <div>
                  <p aria-hidden="true" className="text-sm text-white">
                    {props.view_category}
                  </p>
                  <h3 className="mt-1 font-semibold text-white">
                    <Link href={collection.href}>
                      <span className="absolute inset-0"/>
                      {collection.name}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
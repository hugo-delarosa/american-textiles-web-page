import Image from "next/image";
import {CatalogCategory} from "@/app/lib/definitions";

export default function Feature({category}  : {category: CatalogCategory}) {
  return (
    <section aria-labelledby="trending-heading">
      <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-14 lg:px-8 ">
        <div className="md:flex md:items-center md:justify-between">
          <h2 id="favorites-heading" className="text-2xl font-bold font-granville tracking-tight text-gray-900 sm:text-4xl">
            {category.name}
          </h2>
          <a href="#" className="hidden text-sm font-medium text-primary_blue hover:text-secondary_blue md:block">
            Ver Categoría
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:gap-x-8">
          {category.trendingProducts?.map((product) => (
            <div key={product.id} className="group relative">
              <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-85 lg:h-72 xl:h-80">
                <Image src={product.image.src} alt={product.image.alt} className={"size-full object-cover"} width="500" height="500" />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <a href={`/catalog/product/${product.id}`}>
                  <span className="absolute inset-0"/>
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a href="#" className="font-medium text-primary_blue hover:text-secondary_blue">
            Ver Categoría
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
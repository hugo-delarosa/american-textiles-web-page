import Image from "next/image";
import {CatalogCategory} from "@/app/lib/definitions";
import Link from "next/link";

export default function Feature({category, view_category}: { category: CatalogCategory, view_category: string }) {
  return (
    <section aria-labelledby="trending-heading">
      <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-14 lg:px-8 ">
        <div className="md:flex md:items-center md:justify-between">
          <h2 id="favorites-heading" className="text-2xl font-bold font-granville tracking-tight text-gray-900 sm:text-4xl">
            {category.name}
          </h2>
          <Link href={category.href} className="hidden text-sm font-medium text-primary_blue hover:text-secondary_blue md:block">
            {view_category}
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-7 lg:gap-x-8">
          {category.trendingProducts?.map((product) => (
            <div key={product.id} className="group relative">
              <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-85 lg:h-72 xl:h-80">
                <Image src={product.image.src} alt={product.image.alt} className={"size-full object-cover"} width="500" height="500" />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <Link href={product.href}>
                  <span className="absolute inset-0"/>
                  {product.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <Link href={category.href} className="font-medium text-primary_blue hover:text-secondary_blue">
            {view_category}
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
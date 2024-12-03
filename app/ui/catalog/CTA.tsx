import Image from "next/image";

export default function CTA()
{
  return (
    <section aria-labelledby="cause-heading" className="my-7">
      <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            width={1920}
            height={1080}
            alt=""
            src="https://american-textiles.sfo3.cdn.digitaloceanspaces.com/catalog/CTA/_MG_3740.jpg"
            className="size-full object-cover"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900/50"/>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 id="cause-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Long-term thinking
          </h2>
          <p className="mt-3 text-xl text-white">
            We are committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows
            us to focus on quality and reduce our impact. We are doing our best to delay the inevitable heat-death of
            the universe.
          </p>
          <a
            href="#"
            className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
          >
            Read our story
          </a>
        </div>
      </div>
    </section>
  )
}
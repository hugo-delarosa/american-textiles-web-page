import Image from "next/image";
import {CertificationFeature} from "@/app/lib/definitions";

export default function Certification(props:{
    title: string,
    text: string,
    subtitle: string,
    image: {src: string, alt: string},
    features: CertificationFeature[]
}) {
    return (
      <div className="overflow-hidden bg-white pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                  <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                      <div className="lg:max-w-lg">
                          <h2 className="text-base/7 font-semibold text-secondary_blue">{props.subtitle}</h2>
                          <p className="mt-2 text-pretty text-4xl font-granville text-primary_blue font-semibold tracking-tight  sm:text-5xl">
                              {props.title}
                          </p>
                          <p className="mt-6 text-lg/8 text-gray-600">
                              {props.text}
                          </p>
                          <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                              {props.features.map((feature) => (
                                <div key={feature.name} className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-primary_blue" />
                                        {feature.name}
                                    </dt>{' '}
                                    <dd className="inline">{feature.description}</dd>
                                </div>
                              ))}
                          </dl>
                      </div>
                  </div>
                  <div className="flex items-start justify-end lg:order-first">
                      <Image src={props.image.src} alt={props.image.alt} width={768} height={1024} className="h-auto  shadow-xl ring-1 ring-gray-400/10 "></Image>
                  </div>
              </div>
          </div>
      </div>
    )
}

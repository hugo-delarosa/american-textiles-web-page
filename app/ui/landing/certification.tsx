import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from "next/image";
import {BeakerIcon, ClipboardDocumentCheckIcon, ClipboardDocumentIcon, UserGroupIcon} from "@heroicons/react/16/solid";

const features = [
    {
        name: 'Laboratorios equipados.',
        description:
          'Nuestros laboratorios están equipados para realizar una amplia variedad de pruebas desde el desarrollo de fórmulas de color y acabado hasta pruebas físicas, mecánicas, químicas y solidez del color. ',
        icon: BeakerIcon,
    },
    {
        name: 'Personal Capacitado.',
        description: 'Utilizando los métodos y equipos adecuados a cada prueba, bajo el seguimiento de nuestro personal altamente capacitado.  ',
        icon: UserGroupIcon,
    },
    {
        name: 'Procesos y Controles.',
        description: 'Seguimos paso a paso nuestros procedimientos y controles establecidos en cada proceso para asegurar la calidad de nuestros productos.  ',
        icon: ClipboardDocumentCheckIcon,
    },
]

export default function Certification() {
    return (
      <div className="overflow-hidden bg-white pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                  <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                      <div className="lg:max-w-lg">
                          <h2 className="text-base/7 font-semibold text-secondary_blue">Calidad a tu alcance</h2>
                          <p className="mt-2 text-pretty text-4xl font-granville text-primary_blue font-semibold tracking-tight  sm:text-5xl">
                              Empresa Orgullosamente Certificada
                          </p>
                          <p className="mt-6 text-lg/8 text-gray-600">
                              Nos enorgullece ser una empresa certificada en sistemas de calidad desde 1980, actualmente contamos con la
                              certificación IATF 16949 la cual nos permite ser proveedores de la industria automotriz. Cumplimos con
                              los más altos estándares de calidad y servicio en diversos sectores como ropa deportiva, lencería
                              y textiles técnicos.
                          </p>
                          <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                              {features.map((feature) => (
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
                      <Image src='/images/landing/image_2.png' alt='Certification' width={768} height={1024} className="h-auto  shadow-xl ring-1 ring-gray-400/10 "></Image>
                  </div>
              </div>
          </div>
      </div>
    )
}

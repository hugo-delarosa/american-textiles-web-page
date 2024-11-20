const timeline = [
  {
    name: 'Reconocimiento de Ford Motors Company S.A.',
    description:
      'Ford Motors Company S.A. otorga un diploma en reconocimiento a la calidad satisfactoria de las telas realizadas por American.',
    date: '1986',
    dateTime: '1986',
  },
  {
    name: 'Certificaciones  ISO y QS',
    description:
      'Perry Johnson Registrars, Inc. reconoce la calidad de American con las certificaciones ISO y QS, como parte de la división de Guilford Mills. ',
    date: '1999',
    dateTime: '1999',
  },
  {
    name: 'Premio al Mejor Proveedor',
    description:
      'Johnson Controls Automotive México S.A. de C.V. premia a American como el mejor proveedor, destacando su esfuerzo en la mejora continua durante ese año. ',
    date: '2001',
    dateTime: '2001',
  },
  {
    name: 'Reconocimiento de Lycra',
    description:
      'Lycra reconoce el apoyo de American Textil durante sus 50 años de trayectoria.',
    date: '2009',
    dateTime: '2009',
  },
  {
    name: 'Certificación IATF 16949',
    description:
      'American Specialized Textiles obtiene la certificación IATF, lo que le permite cumplir con las expectativas de calidad de nuestros clientes en el sector automotriz. ',
    date: '2017 - Actualidad',
    dateTime: '2017',
  },
]

export default function Achievements() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto  px-6 lg:px-36">
        <h1 className="text-pretty text-5xl font-granville text-primary_blue font-semibold tracking-tight sm:text-7xl pb-9">Logros</h1>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {timeline.map((item) => (
            <div key={item.name}>
              <time dateTime={item.dateTime} className="flex items-center text-sm/6 font-semibold text-primary_blue">
                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
              </time>
              <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">{item.name}</p>
              <p className="mt-1 text-base/7 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
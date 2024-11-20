const stats = [
  { label: 'Transactions every 24 hours', value: '44 million' },
  { label: 'Assets under holding', value: '$119 trillion' },
  { label: 'New users annually', value: '46,000' },
]
export default function Mission(){
  return (
    <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-pretty text-4xl font-semibold font-granville tracking-tight text-gray-900 sm:text-5xl">Misión </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl/8 text-gray-600">
              Brindar textiles que apoyan a industrias y marcan una diferencia en la vida cotidiana. Con precisión,
              tradición e
              innovación, nuestro objetivo es superar las expectativas de nuestros clientes mientras cuidamos del
              planeta.
            </p>
            <h2 className="text-pretty text-4xl font-semibold font-granville tracking-tight text-gray-900 sm:text-5xl mt-10">Visión </h2>
            <p className="text-xl/8 text-gray-600 mt-6">
              Ser líder a nivel global en textiles especializados, mejorando continuamente a través de nuevas tecnologías,
              prácticas sostenibles y calidad excepcional. Visualizamos un futuro donde nuestros productos contribuyan
              tanto a las personas como al planeta, construyendo relaciones significativas con clientes a nivel mundial.
            </p>
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="w-64 space-y-8 xl:w-80">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                  <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                  <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>

  );
}
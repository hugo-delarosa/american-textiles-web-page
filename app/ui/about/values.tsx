const values = [
  {
    name: 'Innovación y Tradición  ',
    description:
      'Con más de 80 años de experiencia textil, fusionamos nuestra historia con avances modernos para sequir evolucionando y crear nuevas soluciones para los mercados globales.  ',
  },
  {
    name: 'Excelencia ',
    description:
      'Nos comprometemos a dar lo mejor en todo lo que hacemos, desde textiles automotrices hasta telas deportivas. Con nuestra experiencia y tecnología, garantizamos que cada producto cumpla con los más altos estándares. ',
  },
  {
    name: 'Integridad y Responsabilidad ',
    description:
      'Nuestro objetivo es la honestidad y transparencia en nuestras acciones, tratando a todos con respeto y siendo empáticos con la comunidad y el medio ambiente. Actuar con responsabilidad es clave para construir confianza y relaciones duraderas. ',
  },
  {
    name: 'Empatía ',
    description:
      'Priorizamos construir relaciones sólidas al comprender genuinamente las necesidades de nuestros clientes. Nuestro obietivo es ofrecer productos personalizados de manera constante. ',
  },
]

export default function Values() {
  return (<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl font-granville">Nuestros Valores</h2>
    </div>
    <dl
      className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      {values.map((value) => (
        <div key={value.name}>
          <dt className="font-semibold text-gray-900">{value.name}</dt>
          <dd className="mt-1 text-gray-600">{value.description}</dd>
        </div>
      ))}
    </dl>
  </div>)

}
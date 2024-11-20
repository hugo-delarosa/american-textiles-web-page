export default function AboutSection() {
    return (
        <div className="mt-32 overflow-hidden sm:mt-40">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">American Specialized Textiles</h2>
                        <p className="mt-6 text-xl leading-8 text-gray-600">
                            Desde 1941 es una empresa mexicana fabricante de telas sintéticas.
                        </p>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            La cercanía al mercado de los Estados Unidos nos ha permitido enfocarnos a programas de respuesta rápida, en los que los clientes requieren tiempos muy cortos de entrega.

                            <br/><br/>Utilizamos hilos de nylon, poliéster, elastano, poliéster catiónico e hilos reciclados cuyas propiedades nos permiten obtener telas de moda, pero al mismo tiempo funcionales y con nuevos acabados.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <img
                                alt=""
                                src="/images/img1.jpg"
                                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                            />
                        </div>
                        <div
                            className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                            <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                <img
                                    alt=""
                                    src="/images/img2.jpg"
                                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                            <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                <img
                                    alt=""
                                    src="/images/img4.jpg"
                                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                            <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                <img
                                    alt=""
                                    src="/images/img5.jpg"
                                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
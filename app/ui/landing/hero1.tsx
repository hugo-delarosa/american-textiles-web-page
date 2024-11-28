import Image from "next/image";

export default function Hero1(props:{
    title: string,
    text: string,
    image: {src: string, alt: string}
}) {
    return( <div className="relative bg-gray-50">
        <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-gray-50 lg:block"
                >
                    <polygon points="0,0 90,0 50,100 0,100"/>
                </svg>

                <div className="relative px-6 py-32 sm:py-40  lg:py-56 lg:pr-0">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                        <h1 className="text-pretty text-2xl font-granville text-primary_blue font-semibold tracking-tight sm:text-6xl">
                            {props.title}
                        </h1>
                        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                            {props.text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image src={props.image.src} width='1024' height='768'  alt={props.image.alt} className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"/>
        </div>
    </div>)
}
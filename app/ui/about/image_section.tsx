import Image from "next/image";

export default function ImageSection(props: {
  image: {src: string, alt: string}
}){
  return (
    <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
      <Image src={props.image.src} alt={props.image.alt} width={1024} height={683} className="aspect-[5/2] w-full object-cover xl:rounded-3xl"></Image>
    </div>
  );
}
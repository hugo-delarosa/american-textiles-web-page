import Image from "next/image";

export default function ImageSection(){
  return (
    <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
      <Image src='/images/about/image_6.jpg' alt='image 6' width={1024} height={683} className="aspect-[5/2] w-full object-cover xl:rounded-3xl"></Image>
    </div>
  );
}
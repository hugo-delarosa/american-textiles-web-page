export default function Mission(props: {
  mission:{
    title: string,
    text: string
  }
  vision:{
    title: string,
    text: string
  }
}){
  return (
    <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-pretty text-4xl font-semibold font-granville tracking-tight text-gray-900 sm:text-5xl">{props.mission.title} </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl/8 text-gray-600">
              {props.mission.text}
            </p>
            <h2 className="text-pretty text-4xl font-semibold font-granville tracking-tight text-gray-900 sm:text-5xl mt-10">{props.vision.title} </h2>
            <p className="text-xl/8 text-gray-600 mt-6">
              {props.vision.text}
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}
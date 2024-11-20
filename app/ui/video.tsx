export  function Video({ fileName }: { fileName: string }) {
    return (
        <div className="absolute inset-0 h-full w-full object-cover">
            <div className="absolute inset-0 h-full w-full object-cover bg-gray-900 opacity-50 -z-10"></div>
            <video className="absolute inset-0 -z-20 h-full w-full object-cover" width={1024} height={768} autoPlay={true} loop={true} muted={true} playsInline={true}>
                <source src={fileName} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>

    )
}
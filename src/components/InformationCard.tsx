
export default function InformationCard({ title, date, content, img }: { title: string, date: string, content: string, img: ImageMetadata }) {
    return (
    <div className=" flex flex-col items-center gap-4 my-12 ">

    <img
  className="max-h-96 object-cover object-center "
  src={img.src}
  alt=""

/>
        <h1 className=" text-3xl">{title}</h1>
        <p className=" text-lg text-gray-500">{content}</p>
        
        
        <div className="w-full flex justify-end text-gray-500 ">
            <p>Fecha: {date}</p>

        </div>
    </div>
    );

}


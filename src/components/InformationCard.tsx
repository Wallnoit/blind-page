
export default function InformationCard({ title, date, content, link, video, url }: { title: string, date: string, content: string, link: string, video: boolean, url: string }) {
    return (
        <div className=" flex flex-col items-center gap-4 my-12 ">


            {
                video ?

                    <video
                        autoPlay
                        muted
                        loop
                        src={link}
                        className="max-h-[28rem] object-cover object-center bg-black " />

                    :

                    <img
                        className="max-h-96 object-cover object-center "
                        src={link}
                        alt=""

                    />



            }

            <a href={url}
                target="_blank"
                rel="noopener noreferrer"
            >

                <h1 className=" text-3xl text-gray-800">{title}</h1>
            </a>
            <p className=" text-lg text-gray-500">{content}</p>


            <div className="w-full flex justify-end text-gray-500 ">
                <p>Fecha: {date}</p>

            </div>
        </div>
    );

}


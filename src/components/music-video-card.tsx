import { FaSpotify, FaYoutube } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";



export default function MusicVideoCard({ title, artist, src, linkSpotify, linkYoutube, linkAppleMusic }: { title: string, artist: string, src: string, linkSpotify: string, linkYoutube: string, linkAppleMusic: string }) {

    return <>
        <div className=" flex-col items-start hidden md:flex  ">

            <iframe width="560" height="315" src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


            <a
                href={linkYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600">
                <h1 className="text-3xl font-bold text-gray-800 mt-2 ">{title}</h1>

            </a>

            <h2 className="text-xl font-semibold text-gray-600 mt-1 ">{artist}</h2>

            <div className="flex flex-row gap-5 items-center justify-end w-full pb-2 border-2 border-t-0 border-x-0 border-gray-200">
                <a
                    href="https://open.spotify.com/intl-es/artist/5gfMFr9fFFirQKjC67BWZq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-600"
                >
                    <FaSpotify size="1.5em" />
                </a>



                <a
                    href="https://music.apple.com/ec/artist/blind/1649334396"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-600"
                >
                    <SiApplemusic size="1.5em" />
                </a>
            </div>


        </div>

        <div className=" flex flex-col items-start md:hidden  ">

            <iframe width="280" height="157" src={src
            } title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <h1 className="text-2xl font-bold text-gray-800 mt-2 ">{title}</h1>

            <h2 className="text-lg font-semibold text-gray-600 mt-1 ">{artist}</h2>

            <div className="flex flex-row gap-5 items-center justify-end w-full pb-2 border-2 border-t-0 border-x-0 border-gray-200">
                <a
                    href="https://open.spotify.com/intl-es/artist/5gfMFr9fFFirQKjC67BWZq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-600"
                >
                    <FaSpotify size="1.2em" />
                </a>



                <a
                    href="https://music.apple.com/ec/album/dragonfly-ep/1765417540"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-600"
                >
                    <SiApplemusic size="1.2em" />
                </a>
            </div>


        </div>


    </>

}

import { useState, useEffect } from "react";
import InformationCard from "./InformationCard";
import { newsInformation } from "../data/news";
import { musicList } from "../data/musicList";
import MusicVideoCard from "./music-video-card";

export default function ScrollMusicSection() {

    const [videoMusic, setVideoMusic] = useState([])

    useEffect(() => {
        setVideoMusic(musicList)
    }
        , [])


    return <div className="relative xl:w-1/2  xl:h-screen bg-gray-50 content-center xl:overflow-y-scroll items-center xl:mt-32 ">

        <div className="flex flex-col items-center m-5 mb-24  gap-16 ">

            {

                videoMusic.map((music, i) => (


                    < MusicVideoCard key={i} title={music.title} artist={music.artist} src={music.src} linkAppleMusic={music.linkAppleMusic}
                        linkSpotify={music.linkSpotify} linkYoutube={music.linkYoutube}
                    />







                ))
            }





        </div>




    </div>

}
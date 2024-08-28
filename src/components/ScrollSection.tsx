
import { useState, useEffect } from "react";
import InformationCard from "./InformationCard";
import { newsInformation } from "../data/news";
export default function ScrollSection() {

    const [news, setNews] = useState([])

    useEffect(() => {
        setNews(newsInformation)
    }
        , [])


    return <div className="relative xl:w-1/2  xl:h-screen bg-gray-50 content-center xl:overflow-y-scroll items-center xl:mt-32  ">

        <div className="flex flex-col items-center m-5 mb-24  ">

            {
                news.map((news, i) => (
                    <InformationCard key={i} title={news.title} date={news.date} content={news.content} img={news.img} />
                ))
            }


        </div>











    </div>

}
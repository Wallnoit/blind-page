
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

                news.slice(2, news.length).map((news, i = 2) => (
                    <InformationCard key={i} title={news.title} date={news.date} content={news.content} link={news.link} video={news.video} url={news.url} />
                ))
            }


            <div className="flex md:flex-row flex-col items-center justify-center md:gap-16  w-full ">


                {
                    news.slice(0, 2).map((item, index) => (
                        <InformationCard
                            key={index}
                            title={item.title}
                            date={item.date}
                            content={item.content}
                            link={item.link}
                            video={item.video}
                            url={item.url}
                        />
                    ))
                }



            </div>







        </div>











    </div>

}
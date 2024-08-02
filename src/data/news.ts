import noticia1 from "../assets/noticia1.jpg"
import noticia2 from "../assets/noticia2.jpg"
import noticia3 from "../assets/noticia3.jpg"
import noticia4 from "../assets/noticia4.jpg"
import noticia5 from "../assets/noticia5.png"



type News = {
    title: string;
    date: string;
    content: string;
    img: ImageMetadata;
}

export const newsInformation: News[] = [
    {
        title: "Lorem ipsum dolor sit amet 1",
        date: "01/01/2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus.",
        img: noticia1

    },

    {
        title: "Lorem ipsum dolor sit amet 2",
        date: "01/01/2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus.",
        img: noticia2

    },

    {
        title: "Lorem ipsum dolor sit amet 3",
        date: "01/01/2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus.",
        img: noticia3

    },

    {
        title: "Lorem ipsum dolor sit amet 4",
        date: "01/01/2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus.",
        img: noticia4
    },

    {
        title: "Lorem ipsum dolor sit amet 5",
        date: "01/01/2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus.",
        img: noticia5

    },

   
]
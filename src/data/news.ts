import noticia1 from "../assets/noticia1.jpg"
import noticia2 from "../assets/noticia2.jpg"
import noticia3 from "../assets/noticia3.jpg"
import noticia4 from "../assets/noticia4.jpg"
import noticia5 from "../assets/noticia5.png"
import camiseta_1 from "../assets/camiseta_1.mp4"
import camiseta_2 from "../assets/camiseta_2.mp4"



type News = {
    title: string;
    date: string;
    content: string;
    link: string;
    video: boolean;
}

export const newsInformation: News[] = [

    {
        title: "Born to Rap Collection 2024",
        date: "01/01/2021",
        content: "Nuevo diseños disponibles",
        link: camiseta_1,
        video: true
    },

    {
        title: "Ego trip Collection 2024",
        date: "01/01/2021",
        content: "Nuevo diseños disponibles",
        link: camiseta_2,
        video: true
    },
    {
        title: "Lorem ipsum dolor sit amet 1",
        date: "01/01/2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus.",
        link: noticia1.src,
        video: false

    },

    {
        title: "Lorem ipsum dolor sit amet 2",
        date: "01/01/2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus.",
        link: noticia2.src,
        video: false

    },

    {
        title: "Lorem ipsum dolor sit amet 3",
        date: "01/01/2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus.",
        link: noticia3.src,
        video: false

    },

    {
        title: "Lorem ipsum dolor sit amet 4",
        date: "01/01/2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus.",
        link: noticia4.src,
        video: false
    },

    {
        title: "Lorem ipsum dolor sit amet 5",
        date: "01/01/2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus.",
        link: noticia5.src,
        video: false

    },


]
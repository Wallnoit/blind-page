
import camiseta_1 from "../assets/camiseta_1.mp4"
import camiseta_2 from "../assets/camiseta_2.mp4"
import blindNewAlbum from "../assets/blind-promo2.jpg"



type News = {
    title: string;
    date: string;
    content: string;
    link: string;
    video: boolean;
    url?: string;
}

export const newsInformation: News[] = [

    {
        title: "Born to Rap Collection 2024",
        date: "31/08/2024",
        content: "Nuevo diseños disponibles",
        link: camiseta_1,
        video: true,
        url: "https://api.whatsapp.com/send?phone=+593984691332&text=Hola,%20Quiero%20saber%20cuanto%20cuesta%20la%20camiseta%20Born%20to%20rap%20?%F0%9F%91%8C%F0%9F%98%8E"
    },

    {
        title: "Ego trip Collection 2024",
        date: "31/08/2024",
        content: "Nuevo diseños disponibles",
        link: camiseta_2,
        video: true,
        url: "https://api.whatsapp.com/send?phone=+593984691332&text=Hola,%20Quiero%20saber%20cuanto%20cuesta%20la%20camiseta%20Ultra%20Ego%20?%F0%9F%91%8C%F0%9F%98%8E"
    },
    {
        title: "New Album Dragonfly",
        date: "31/08/2024",
        content: "Este álbum se centra la evolución personal y artística del creador, inspirada en la transformación de una libélula. \n\nEl álbum cuenta con 6 canciones y está disponible en todas las plataformas digitales.",
        link: blindNewAlbum.src,
        video: false,
        url: ""

    },

]
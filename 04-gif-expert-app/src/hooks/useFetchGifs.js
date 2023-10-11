import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };
    /*Si se deja las llaves vacías, significa que la función de useEffect se va a ejecutar 
    solo la primera vez que se renderice el componente */
    useEffect( () => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}

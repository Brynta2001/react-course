
export const getImagen = async() => {

    try {

        const apiKey = 'A3qGVTKHu3FR3ZCiCY8gj0CERPZF1QUB';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        console.error(error)
        return 'No se encontró la imagen';
    }
    
    
    
}

 getImagen();




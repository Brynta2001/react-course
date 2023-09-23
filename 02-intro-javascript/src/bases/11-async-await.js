//Await debe utilizarse dentro de una función async	
const getImagen = async() => {
    try {
        const apiKey = 'A3qGVTKHu3FR3ZCiCY8gj0CERPZF1QUB';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        //Manejo del error
        console.error(error);
    }
}

getImagen();
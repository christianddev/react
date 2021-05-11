 export const getImage = async() => {
    try {
        const apiKey = 'esni5sGWXdIrldNyN0GvLFTa3AJr26sS';
        const request = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const resp = await request.json();
        const { url } = resp.data.images.original;
        
        return url;
        // const img = document.createElement('img');
        // img.src =url;
        // document.body.append(img);
        
    } catch (error) {
        console.log('error', error)
    }
}
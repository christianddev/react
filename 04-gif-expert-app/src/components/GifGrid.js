import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {


    const [images, setImages] = useState([])

    useEffect( () => {
        getGifs();
    }, []);

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=esni5sGWXdIrldNyN0GvLFTa3AJr26sS&q=lola&limit=10';
        const res = await fetch(url);
        const {data} = await res.json();
        const gif = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_large.url
            }
        })
        setImages((i) => (gif))
    }

    return (
        <>
            <h3>{category}</h3>
            {
                images.map((i) => (
                    <GifGridItem 
                        key={i.id} 
                        {...i}
                    />
                ))
            }
        </>
    )
}

export default GifGrid

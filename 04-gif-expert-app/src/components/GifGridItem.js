import React from 'react'

const GifGridItem = ({id, title, url}) => {
    console.log(id, title, url)
    return (
        <div>
            <img
                src={url}
                alt={title}
            />
        </div>
    )
}

export default GifGridItem

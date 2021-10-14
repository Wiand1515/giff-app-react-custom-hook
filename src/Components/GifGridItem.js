import React from 'react'

const GifGridItem = ({id,title,url}) => {
    
    return (
        <div className="card">
            <figure>
                <p>{title}</p>
                <img src={url} alt={`${title} imagen`} />
            </figure>
        </div>
    )
}

export default GifGridItem

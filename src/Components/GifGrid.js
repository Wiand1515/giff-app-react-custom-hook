import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';


const GifGrid = ({category}) => {
    
    const {data, loading} = useFetchGifs(category);
    

    return (
        <div>
            <h3>{category}</h3>            
                {
                    data.map( (element) => {
                        return <GifGridItem {...element} key={element.id}/>                            
                        
                    })
                }
            
        </div>
    )
}

export default GifGrid

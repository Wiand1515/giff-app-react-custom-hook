import { useEffect, useState } from "react";
import {getGifs} from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [data, setData] = useState({data: [], loading: true})

    useEffect( () => {

        getGifs( category )
        .then(imgs => {
            console.log(imgs)
            setData({
                data: imgs,
                loading: false
            })
        });
        

    }, [category]);

    return data; //{ data: [], loading: true}

};
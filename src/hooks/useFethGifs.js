import { useEffect, useState } from "react"
import  {getGif}  from "../helpers/GetGifs"


export const useFetchGifs = (category)=>{

    const [state, setstate] = useState({
        data:[],
        loading:true,

    })


         useEffect(()=>{
        getGif(category).then(img => {
            setTimeout(()=>{
                setstate({
                    data:img,
                    loading:false,
                })
            },3000)

        })
    },[category])

   

   


    return state
}
import React from 'react'
import { getGif } from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFethGifs';
import  GifGridItem  from './GifGridItem';


  

  export const GifGrid = ({ category}) => {
    const {data,loading}=useFetchGifs(category);
       
  return (
      <>
      <h3 className='titulo'> { category }</h3>
    {<div className='container'>

        {loading&&<p className='loading'>Loading....</p>}
    
        {
            data.map((img)=>(
            <GifGridItem key= {img.id} {...img} />
            ))
        }

    </div> }
    </>
  )
}

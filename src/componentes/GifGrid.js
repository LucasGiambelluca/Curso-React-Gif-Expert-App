import React from 'react'
import { getGif } from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFethGifs';
import  GifGridItem  from './GifGridItem';


  

  export const GifGrid = ({ category}) => {
    const {data,loading}=useFetchGifs(category);
       
  return (
      <>
      <h3 className='titulo animate__animated  animate__jello'> { category }</h3>
    {<div className='container'>

        {loading&&<p className='loading animate__animated animate__flash'>Loading....</p>}
    
        {
            data.map((img)=>(
            <GifGridItem  key= {img.id} {...img} />
            ))
        }

    </div> }
    </>
  )
}

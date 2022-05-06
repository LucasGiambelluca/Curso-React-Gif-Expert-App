import React,{useState,useEffect} from 'react'
import { getGif } from '../helpers/GetGifs';
import  GifGridItem  from './GifGridItem';

export const GifGrid = ({ category}) => {
    useEffect( ()=>{ getGif(category).then(setImages)},[]);
    const [images,setImages] = useState([category])

    
  return (
      <>
      <h3 className='titulo'> { category }</h3>
    <div className='container'>
    
        {
            images.map((img)=>(
            <GifGridItem key= {img.id} {...img} />
            ))
        }

    </div>
    </>
  )
}

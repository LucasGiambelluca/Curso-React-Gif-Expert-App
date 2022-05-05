import React,{useState,useEffect} from 'react'
import  GifGridItem  from './GifGridItem';

export const GifGrid = ({ category}) => {
    useEffect( ()=>{ getGif()},[]);
    const [images,setImages] = useState([])

    const getGif = async ()=>{
        const url = 'http://api.giphy.com/v1/gifs/search?key=FDLzeCzgpnxOmmS3l2X37X1JCSeXJY0L&q=rick and morty&limit=10'
        const response = await fetch(url)

        const {data} = await response.json();

        const gif = data.map(img=>{
            return{
                id:img.id,
                title:img.title,
                url:img.images.downsized_medium.url,
            }
        })
        setImages(gif)
    }
  return (
    <>
    <h3> { category }</h3>
        {
            images.map((img)=>(
            <GifGridItem key= {img.id} {...img} />
            ))
        }

    </>
  )
}

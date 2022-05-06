import React, { useState } from 'react';
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';



const GifExpertApp = ()=>{

    const [Category,setCategories]= useState(['Dragon Ball',])

 //   const HandleAdd = ()=>{
   //     return SetCategory([...Category,'One Piece','one piece'])
    
    //}
    return <>
        <h1 className='AppTitle'>Gif Expert App</h1> 
        <hr></hr>
        <AddCategory  setCategories={setCategories}/>
        <hr></hr>
        <ol>
            {
                Category.map(category => <GifGrid category = {category} key = {category} />)
            }
        </ol>   

    </>
}


export default GifExpertApp;
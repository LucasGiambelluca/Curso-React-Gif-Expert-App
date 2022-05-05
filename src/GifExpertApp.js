import React, { useState } from 'react';
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';



const GifExpertApp = ()=>{

    const [Category,setCategories]= useState(['Dragon Ball',])

 //   const HandleAdd = ()=>{
   //     return SetCategory([...Category,'One Piece','one piece'])
    
    //}
    return <>
        <h1>Gif Expert App</h1> 
        <AddCategory  setCategories={setCategories}/>
        <hr></hr>
        <div className='container'>
       

        <ol>
            {
                Category.map(category => <GifGrid category = {category} key = {category} />)
            }
        </ol>   
        </div>
       
    
    </>
}


export default GifExpertApp;
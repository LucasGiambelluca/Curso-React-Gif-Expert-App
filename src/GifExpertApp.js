import React, { useState } from 'react';
import { AddCategory } from './componentes/AddCategory';



const GifExpertApp = ()=>{

    const [Category,SetCategory]= useState(['Dragon Ball','Pokemon','Naruto'])

    const HandleAdd = ()=>{
        return SetCategory([...Category,'One Piece','one piece'])
    
    }
    return <>
        <h1>Gif Expert App</h1>
         <AddCategory SetCategory= {SetCategory}/>
        <hr></hr>
       

        <ol>
            {
                Category.map(category => <li key= {category}>{category}</li>)
            }
        </ol>
    
    </>
}


export default GifExpertApp;
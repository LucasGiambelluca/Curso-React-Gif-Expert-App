import React,{useState} from 'react'

export const AddCategory = (prop) => {
  const [value,setValue] = useState('hello world')

  const HandleTaegetValue = (e)=>{
    setValue(e.target.value)
  }

  const HandleSubmit = (e)=>{
    e.preventDefault();
   prop.setCategory(cat => [...cat,value])
  }

  return (

  <form onChange={HandleSubmit}>
      <input
      type='text'
      value={value}
      onChange= {HandleTaegetValue}
    />
  </form>
  
  )
}

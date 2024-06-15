import React from 'react'
import  { useParams } from 'react-router-dom'
function CategoriasID() {
   const{id}= useParams()
  return (
    <div>logrado {id}</div>
  )
}

export default CategoriasID
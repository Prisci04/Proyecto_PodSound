import React from 'react'
import Carousel from './Carousel'
import Nosotros from './Nosotros'
import Planes from './Planes'
import Contacto from './Contacto'

function MainLayout() {
  return (
    <>
        <Carousel />
        <Nosotros />
        <Planes />
        <Contacto />
    </>
  )
}

export default MainLayout
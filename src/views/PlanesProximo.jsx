import React from 'react'
import { Link } from 'react-router-dom'

function PlanesProximo() {
  return (
    <>
    <section class="background">
        <div class="content">
            <h1>Próximamente</h1>
            <p>En estos momentos estamos trabajando en nuestros planes.</p>
            <Link to='/' class="btn">Volver a inicio</Link>
        </div>
    </section>
    
    </>
  )
}

export default PlanesProximo
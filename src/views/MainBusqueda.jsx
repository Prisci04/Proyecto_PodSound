import React, { useEffect,useState } from 'react'
import PodcastCard from '../components/PodcastCard'
import { getCategorias } from '../api/categoria'
function MainBusqueda() {
    const [categoryPodcast,setCategoryPodcast] = useState([])
    useEffect(() => {
        getCategorias().then(response => {
            console.log(response.data)
            setCategoryPodcast(response.data.data)
        }).catch(error => {
            console.log(error)
        })
    
    }, [])
  return (
    <>
        

        <main className="main-content">
            <h1 className="main-title">Búsqueda de Podcast</h1>
            <hr className="divider"/>
            <h2 className="sub-title">Descubre más podcast</h2>
            
            <div className="podcast-grid">
                
                <PodcastCard  categoryPodcast={categoryPodcast}/>
            </div>
            <div className="texto">
            <a className="link__regreso2" href="index.html">Volver</a>
            </div>
        </main>
    </>
  )
}

export default MainBusqueda
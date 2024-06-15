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
        <header class="layout__header">
            <div class="header__content">
                <img src="/img/logo-img.png" alt="Logo" class="content__img" type="img/svg"/>
            </div>

            <input type="text" class="search-bar" placeholder="Buscar..."/>
            <div class="profile-icon">
                <ion-icon name="person-circle-outline"></ion-icon>
                <ion-icon name="menu-outline" class="menu-icon"></ion-icon>
            </div>
        </header>

        <main class="main-content">
            <h1 class="main-title">Búsqueda de Podcast</h1>
            <hr class="divider"/>
            <h2 class="sub-title">Descubre más podcast</h2>
            
            <div class="podcast-grid">
                
                <PodcastCard  categoryPodcast={categoryPodcast}/>
            </div>
            <div class="texto">
            <a class="link__regreso2" href="index.html">Volver</a>
            </div>
        </main>
    </>
  )
}

export default MainBusqueda
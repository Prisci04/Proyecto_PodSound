
import React from 'react'

function ListaReproduccion() {
  return (
    <>
    <main class="main-content">
    <h1 class="main-title">Lista de reproducción</h1>
    <hr class="divider"/>

  
    <header>
      <section class="playlist-section">
        <div class="playlist-wrapper">
            <div class="playlist-info">
                <img src="/img/2.png" alt="Nombre del álbum" class="album-image"/>
                <h2 class="playlist-title">Podcast Mascotas</h2>
            </div>
            <div class="playlist-content">
                <ul class="playlist-songs">
                    <li class="song">Podcast 1 <span class="favorite">❤</span></li>
                    <li class="song">Podcast 2 <span class="favorite">❤</span></li>
                    <li class="song">Podcast 3 <span class="favorite">❤</span></li>
                </ul>
            </div>
        </div>
    </section>
    <div class="texto">
      <a class="link__regreso2" href="index.html">Volver</a>
    </div>



    </header>  
    
  </main>
    
    
    </>
  )
}

export default ListaReproduccion
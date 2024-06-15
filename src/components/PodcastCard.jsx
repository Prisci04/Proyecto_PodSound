import { Link } from "react-router-dom"


function PodcastCard({categoryPodcast}) {
  
 
  return (
    <>
     {categoryPodcast.map(categoria => (
      <Link key={categoria._id} to={`/categoria/${categoria._id}`}>
        <div  class="podcast-card">
          <h2 class="podcast-title">{categoria.nombre}</h2>
          <img src={categoria.img} alt="Podcast 1"/>
        </div>
      </Link>
     ))}
     
    </>
  ) 
}

export default PodcastCard
import React, { useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { getCategorias } from '../api/categoria'
import { crearPodcast } from '../api/podcast.js'
import { set } from 'react-hook-form'
import Spinner from '../components/Spinner'
function Upload() {
    const [categorias, setCategorias] = useState([])

    const[podcast, setPodcast] = useState([])
    const [descripción, setDescripción] = useState('')
    const [nombre, setNombre] = useState('')
    const [selectedCategoria, setSelectedCategoria] = useState('')

    const [loading, setLoading] = useState(false)


    useEffect(() => {
        getCategorias().then(response => {
            setCategorias(response.data.data)
        })
    }, [])

const handleEnviar = (evt) => {
    evt.preventDefault()
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('description', descripción);
    formData.append('categoria', selectedCategoria);
    formData.append('file', podcast);
    setLoading(true)
    crearPodcast(formData)
     .then(response => {
        setLoading(false)   
        console.log(response)
    }).catch(error => {
        setLoading(false)
        console.log(error)
    })
    
}

  return (
    <main className="main-content">
        <h1 className="main-title">Creación de Podcast</h1>
        <hr className="divider"/>
        <section className="podcast-publication">
        {
        loading ? <Spinner /> : (
        
            <form 
                onSubmit={handleEnviar}
                className="podcast-form"
                enctype="multipart/form-data"
            >
                <div className="form-group">
                    <label htmlFor="podcast-image">Subir Podcast</label>
                    <input 
                        type="file" 
                        id="podcast-image" 
                        accept="audio/*"
                        onChange={(evt)=> {setPodcast(evt.target.files[0])}}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="podcast-name">Nombre del Podcast</label>
                    <input 
                        type="text" 
                        id="podcast-name"
                        placeholder="Ingresa el nombre del podcast"
                        onChange={(evt) => {setNombre(evt.target.value)}}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="podcast-topic">Categoria</label>
                    <select id="podcast-topic" onChange={(evt)=>{setSelectedCategoria(evt.target.value)}}>
                        <option value="">Selecciona una categoría</option>
                        {categorias.map(categoria => (
                            <option  key={categoria._id} value={categoria._id}>{categoria.nombre}</option>
                        
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="podcast-description">Descripción</label>
                    <textarea 
                    id="podcast-description" 
                    placeholder="Ingresa una descripción" 
                    rows="4"
                    onChange={(evt) => {setDescripción(evt.target.value)}}
                    ></textarea>
                </div>
                <div className="contain__button">
                    <button 
                        className="button-verde" 
                        type='submit'
                        >SUBIR</button>
                </div>
            </form>
        )
        }
            <div className="texto">
                <Link className="link__regreso2" to="/main-categoria">Volver</Link>
            </div>
        </section>
    </main>
  )
}

export default Upload
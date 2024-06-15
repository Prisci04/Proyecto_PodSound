import React, { useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { getCategorias } from '../api/categoria'
import { crearPodcast } from '../api/podcast'

function Upload() {
    const [categorias, setCategorias] = useState([])

    const[podcast, setPodcast] = useState('')
    const [descripción, setDescripción] = useState('')
    const [nombre, setNombre] = useState('')
    const [selectedCategoria, setSelectedCategoria] = useState('')

    useEffect(() => {
        getCategorias().then(response => {
            setCategorias(response.data.data)
        })
    }, [])
function convertBose64(evt) {
    console.log(evt)
    var reader = new FileReader();
    reader.readAsDataURL(evt.target.files[0]);
    reader.onload =  ()=> {
        console.log(reader.result);//base64encoded string
        setPodcast(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    }
}
const handleEnviar = (evt) => {
    evt.preventDefault()
    crearPodcast({
        nombre: nombre,
        descripcion: descripción,
        categoria: selectedCategoria,
        podcast: podcast
    }).then(response => {
        console.log(response)
    
    }).catch(error => {
        console.log(error)
    })
    
}

  return (
    <main className="main-content">
        <h1 className="main-title">Creación de Podcast</h1>
        <hr className="divider"/>
        <section className="podcast-publication">
            <form 
            onSubmit={handleEnviar}
            className="podcast-form"
            >
                <div className="form-group">
                    <label htmlFor="podcast-image">Subir Podcast</label>
                    <input 
                        type="file" 
                        id="podcast-image" 
                        accept="audio/*"
                        onChange={convertBose64}
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
            <div className="texto">
                <Link className="link__regreso2" to="/main-categoria">Volver</Link>
            </div>
        </section>
    </main>
  )
}

export default Upload
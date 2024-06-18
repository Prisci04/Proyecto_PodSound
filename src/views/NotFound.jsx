import {Link} from "react-router-dom"


const NotFound = () =>{


    return <>
    <section className="section-pagina-404">
        <div className="numero-error">
            <div className="contenedor-msj">
                <p>Ups</p>
                <h3>404</h3>
                
        
            </div>
        </div>
        <div className="contenido-error">
            <div className="section-contenedor">
                <h1>¡Lo siento! </h1>
                <p>La pagina que estas solicitando no se ha podido encontrar</p>

            </div>
            <div className="seccion-contenedor">
                <p>Pero puedes seguir navegando por nuestra pagina</p>
                <div className="botones-escape">
                    <Link className="boton-escape" to="/">Volver a inicio</Link>
                    

                </div>
            </div>
        </div>
    </section>

    </>
}


export default NotFound
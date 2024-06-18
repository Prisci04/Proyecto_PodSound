import FormRegistro from "../components/FormRegistro";
import Nosotros from "../components/Nosotros";
import Planes from "../components/Planes";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

function PaginaInicio() {
  return (
    <>
      
      <section className="layout__principal">
        <div className="principal__contain">
          {/* <!-- GRID 1 --> */}
          <div className="carousel__content">
            <div className="carousel__content-contain">
              <h3 className="carousel__subtitulo">A TU ALCANCE</h3>
              <h1 className="carousel__titulo">PODCAST TU MUNDO TU REGLA</h1>
              <div className="carousel__box">
                <p className="carousel__parrafo">
                  Somos una página web que ayudara a miles de usuarios a
                  experimentar en este rubro de los podcast abordando diferentes
                  temas{" "}
                </p>
              </div>
              <a href="" className="button-verde">
                Descubrelo
              </a>
            </div>
          </div>

          {/* <!-- GRID 2 --> */}
          <FormRegistro />
        </div>
      </section>

      <Nosotros/>

      {/* <!-- PLANES --> */}

      <Planes/>

      {/* <!-- CONTACTO --> */}
      <Contacto/>


      {/* FOOTER */}
      <Footer/>

      
    </>
  );
}

export default PaginaInicio;

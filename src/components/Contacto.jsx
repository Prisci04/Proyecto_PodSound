import React from 'react'

function Contacto() {
  return (
    <>
        
      <section className="layout__contacto contenedor">
        <div className="contacto__all-text">
          <h2 className="contacto__titulo">Contacto</h2>
          <p className="contacto__subtitulo">
            Si necesitas contactarte con nosotros puedes hacerlo por acá
          </p>
        </div>

        <div className="contacto__contain">
          <div className="contacto__article-info">
            <p className="info__parrafo">
              Utiliza las siguintes vías de contacto, o rellena el formulario
            </p>

            <div className="contacto__article-descripcion">
              <h5 className="info__titulo">Vía E-mail</h5>
              <p className="info__descripcion">hola@unsitiogenial.cl</p>
            </div>

            <div className="contacto__article-descripcion">
              <h5 className="info__titulo">En nuestras redes sociales</h5>
              <p className="info__descripcion">@unsitiogenial</p>
            </div>
          </div>

          <div className="contacto__article-form">
            <div className="contain__form">
              <form action="" className="form__contacto">
                <div className="input__form">
                  <input
                    className="imput__form-item"
                    type="text"
                    placeholder="Escribe tu nombre"
                  />
                </div>

                <div className="input__form">
                  <input
                    className="imput__form-item"
                    type="email"
                    placeholder="Escribe tu e-mail"
                  />
                </div>

                <div className="input__form">
                  <input
                    className="imput__form-item"
                    type="tel"
                    placeholder="Escribe tu teléfono (opcional)"
                  />
                </div>

                <div className="input__form-textarea">
                  <textarea
                    className="imput__form-item text-area"
                    rows="8"
                    cols="40"
                    placeholder="Escribe tu mensaje"
                  ></textarea>
                </div>

                <button className="button-verde button-contacto" type="submit">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacto
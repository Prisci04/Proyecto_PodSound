import FormRegistro from '../components/FormRegistro';
import Header from '../components/Header'

function PaginaInicio() {
    return (
        <>

<Header/>
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
          <FormRegistro/>
        </div>
      </section>

      <section className="layout__nosotros contenedor">
        <div className="nosotros-article__line"></div>
        <div className="nosotros__all-text">
          <h2 className="nosotros__title">Nosotros</h2>
          <p className="nosotros__subtitle">
            Descubre hoy el futuro de nuestros servicios y las nuevas
            tecnologías que potenciarán el crecimiento de tus podcasts.
          </p>
        </div>

        <div className="nosotros__grid-slider-1">
          <div className="nosotros-article__description">
            <h4 className="nosotros-article__title">Que podrias hacer?</h4>
            <p className="nosotros-article__text">
              Te ofrecemos una plataforma en la cual podrás hacer podcasts de
              diferentes temas variados para expresar tus ideas y contar
              experiencias ,donde la audiencia tendrá apartados para poner su
              listado de podcast y escuchar sus favoritos
            </p>
          </div>
          <div className="nosotros__content-img">
            <img
              className="nosotros__img"
              src="/img/modelo1.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="nosotros__grid-slider-2">
          <div className="nosotros__content-img">
            <img
              className="nosotros__img"
              src="/img/podcast.png"
              alt=""
            />
          </div>

          <div className="nosotros-article__description">
            <h4 className="nosotros-article__title">Nuestra vision</h4>
            <p className="nosotros-article__text">
              Te ofrecemos una plataforma en la cual podrás hacer podcasts de
              diferentes temas variados para expresar tus ideas y contar
              experiencias ,donde la audiencia tendrá apartados para poner su
              listado de podcast y escuchar sus favoritos
            </p>
          </div>
        </div>
      </section>

      {/* <!-- PLANES --> */}

      <section className="layout__planes contenedor">
        <div className="layout__texto-planes">
          <h2 className="planes__title">Planes</h2>
          <p className="planes__subtitle">
            Acá tendrás los diferentes planes disponibles para tener mejoras y
            contenido exclusivo para desarrollar mejor tus ideas{" "}
          </p>
        </div>
        <div className="planes__flex">
          <article className="planes">
            <h3 className="planes__plan-title">Básico</h3>
            <div>
              <ion-icon
                name="mic-circle-outline"
                className="img__planes"
              ></ion-icon>
            </div>
            <div className="planes__content">
              <p className="planes__precio">$5.000</p>
              <ul className="lista__planes">
                <li className="planes__descripcion">1 cuenta</li>
                <li className="planes__descripcion">Acceso a los datos</li>
                <li className="planes__descripcion">Crear contenido</li>
                <li className="planes__descripcion">Publicar fotos</li>
                <li className="planes__descripcion">Publicar videos</li>
              </ul>
            </div>

            <div className="contain__button">
              <button className="button-verde">SUSCRIBIRSE</button>
            </div>
          </article>
          <article className="planes">
            <h3 className="planes__plan-title">Avanzado</h3>
            <div>
              <ion-icon
                name="mic-circle-outline"
                className="img__planes"
              ></ion-icon>
            </div>
            <div className="planes__content">
              <p className="planes__precio">$10.000</p>
              <ul className="lista__planes">
                <li className="planes__descripcion">5 cuentas</li>
                <li className="planes__descripcion">Atencion personalizada</li>
                <li className="planes__descripcion">Feedback mensual</li>
                <li className="planes__descripcion">Destaca tus contenidos </li>
                <li className="planes__descripcion">Acceso ilimitado</li>
              </ul>
            </div>
            <div className="contain__button">
              <button className="button-verde">SUSCRIBIRSE</button>
            </div>
          </article>
          <article className="planes">
            <h3 className="planes__plan-title">Personalizado</h3>
            <div>
              <ion-icon
                name="mic-circle-outline"
                className="img__planes"
              ></ion-icon>
            </div>
            <div className="planes__content">
              <p className="planes__precio">$15.000</p>
              <ul className="lista__planes">
                <li className="planes__descripcion">
                  Todas las características de los planes anteriores además de
                  las características personalizadas que necesites.{" "}
                </li>
                <li className="planes__descripcion">
                  Se realizará un presupuesto ajustado a las necesidades de tu
                  negocio
                </li>
              </ul>
            </div>
            <div className="contain__button">
              <button className="button-verde">SUSCRIBIRSE</button>
            </div>
          </article>
        </div>
      </section>

      {/* <!-- CONTACTO --> */}

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



export default PaginaInicio;

import React from "react";

function Nosotros() {
  return (
    <>
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
            <img className="nosotros__img" src="/img/modelo1.jpg" alt="" />
          </div>
        </div>

        <div className="nosotros__grid-slider-2">
          <div className="nosotros__content-img">
            <img className="nosotros__img" src="/img/podcast.png" alt="" />
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
    </>
  );
}

export default Nosotros;

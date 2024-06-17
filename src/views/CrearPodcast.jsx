function CrearPodcast() {
  return (
    <>
      <main className="main-content">
        <h1 className="main-title">Creación de Podcast</h1>
        <hr className="divider" />
        <section className="podcast-publication">
          <div className="podcast-form">
            <div className="form-group">
              <label for="podcast-image">Subir Portada</label>
              <input type="file" id="podcast-image" accept="image/*" />
            </div>

            <div className="form-group">
              <label for="podcast-image">Subir Audio</label>
              <input type="file" id="podcast-image" accept="image/*" />
            </div>

            <div className="form-group">
              <label for="podcast-name">Nombre del Podcast</label>
              <input
                type="text"
                id="podcast-name"
                placeholder="Ingresa el nombre del podcast"
              />
            </div>
            <div className="form-group">
              <label for="podcast-topic">Tema</label>
              <input
                type="text"
                id="podcast-topic"
                placeholder="Ingresa el tema del podcast"
              />
            </div>
            <div className="form-group">
              <label for="podcast-description">Descripción</label>
              <textarea
                id="podcast-description"
                placeholder="Ingresa una descripción"
                rows="4"
              ></textarea>
            </div>
            <div className="contain__button">
              <button className="button-verde">Subir</button>
            </div>
            <div className="texto">
              <a className="link__regreso2" href="#">
                Volver
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default CrearPodcast;

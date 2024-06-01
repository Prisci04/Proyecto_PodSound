

function FormRegistro(){
    return (
        <>
        <div className="form__content">
            <div className="form__content-contain">
              <h2 className="titulo-registro">Registro</h2>
              <form action="" className="form">
                <div className="contenido__input">
                  <input
                    className="input__item"
                    type="text"
                    placeholder="Escribe tu usuario"
                  />
                </div>

                <div className="contenido__input">
                  <input
                    className="input__item"
                    type="password"
                    placeholder="Escribe tu contraseña"
                  />
                </div>
                <div className="contenido__input">
                  <input
                    className="input__item"
                    type="password"
                    placeholder="Repite tu contraseña"
                  />
                </div>

                <div className="contenido__input">
                  <input
                    className="input__item"
                    type="email"
                    placeholder="Escribe tu e-mail"
                  />
                </div>
                <button className="button-verde button-registro" type="submit">
                  Registrarse
                </button>
              </form>
              <a href="inicioSesion.html" className="inicio-sesion">
                INICIAR SESION
              </a>
            </div>
          </div>

        </>
    )
}

export default FormRegistro;

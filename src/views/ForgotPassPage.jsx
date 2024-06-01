import { Link } from 'react-router-dom'



function ForgotPassPage() {
    

  return (
    <>
      <div className="contain__recuperar-pass">
        <section className="section__form-recuperar">
          <div className="section__form-contain">
            <form action="" className="form__recuperarC">
              <h2 className="titulo-recuperar">¿Olvidaste tu contraseña?</h2>

              <div className="contenido__input">
                <input
                  className="input__item-recuperar"
                  type="text"
                  placeholder="Ingrese su usuario"
                />
              </div>
              <div className="contenido__input">
                <input
                  className="input__item-recuperar"
                  type="email"
                  placeholder="Ingrese su correo"
                />
              </div>
              <button className="button-verde" type="submit">
                ENVIAR
              </button>

              <div className="texto">
                <Link to= '/login' className="link__regreso">Volver</Link>
                {/* <a className="link__regreso" >
                  Volver
                </a> */}
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default ForgotPassPage;

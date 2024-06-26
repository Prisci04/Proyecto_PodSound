import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="contenedor">
          <div className="barra">
            <div className="contain__logo">
              <Link to="/" className="">
                <img
                  className="content__img img__logo"
                  src="/img/logo-img.png"
                  alt=""
                  type="img/svg"
                />
              </Link>
            </div>

            {/* <!-- NAVEGACION --> */}
            <nav className="navegacion">
              <a
                href="#"
                className="navegacion__enlace nav__item "
              >
                Inicio
              </a>
              <a href="#" className="navegacion__enlace">
                Nosotros
              </a>
              <a href="#" className="navegacion__enlace">
                Planes
              </a>
              <a href="#" className="navegacion__enlace">
                Contacto
              </a>
              <a href="#" className="navegacion__enlace icon__user"><ion-icon  name="person-circle-outline"></ion-icon></a>

            </nav>
          </div>
        </div>
      </header>
    </>
  );
}


export default Header;
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function Header() {

  const {isAuthenticated, user} = useAuth();
  console.log(user)



  return (
    <nav>
      {isAuthenticated ? (
        //Si SIII esta autenticado

        <>

<header className="layout__header">
        <div className="header__content">
          <Link to='/busqueda'> <img
            src="/img/logo-img.png"
            alt="Logo"
            className="content__img"
            type="img/svg"
          /></Link>
        </div>
        <input type="text" className="search-bar" placeholder="Buscar..." />
        <div className="profile-icon">
          <h4>¡Hola {user.username}!</h4>
          <Link to={`/perfil/`+user.id}><ion-icon name="person-circle-outline"></ion-icon></Link>
          <Link to="/menu"><ion-icon name="menu-outline" className="menu-icon"></ion-icon></Link>
        </div>
      </header>
        
        </>


      ) : (
        //Si NOOO esta autenticado
        <>
        <header className="header">
        <div className="contenedor">
          <div className="barra">
            <div className="contain__logo">
              <Link to='/'>
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
              <Link to='/'
                className="navegacion__enlace nav__item "
              >
                Inicio
              </Link>
              <a href="#" className="navegacion__enlace">
                Nosotros
              </a>
              <Link to='/planes' className="navegacion__enlace">
                Planes
              </Link>
              <a href="#" className="navegacion__enlace">
                Contacto
              </a>
              
            </nav>
          </div>
        </div>
      </header>
        </>

      )}
    </nav>
  );
}


export default Header;
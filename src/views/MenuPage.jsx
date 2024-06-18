import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function MenuPage() {
  const { logout} = useAuth()

  return (
    <>
      <main className="main-content">
        <h1 className="main-title">Menu</h1>
        <hr className="divider" />

        <div className="menu-grid">
          <div className="menu-card">
            <Link className="menu-title" to='/busqueda'>Principal</Link>
          </div>

          <div className="menu-card">
            <h2 className="menu-title">Lista de reproducción</h2>
          </div>

          <div className="menu-card">
            <Link className="menu-title" to='/podcast'>Subir Podcast</Link>
          </div>

          <div className="menu-card">
            <h2 className="menu-title">Mis podcast</h2>
          </div>

          <div className="menu-card">
            <Link className="menu-title" to='/' onClick={() => {
              logout()
            }}>Cerrar Sesión</Link>
          </div>

        </div>
        <br />
        <div className="texto">
          <a className="link__regreso2" href="inicioSesion.html">
            Volver
          </a>
        </div>
      </main>
    </>
  );
}

export default MenuPage;

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="layoutfooter">
        <div className="sectioncontain">
          <ul className="about-me">
            <li className="about-meitem">
              <a href="#" className="parrafo">
                Nosotros
              </a>
            </li>
            <li className="about-meitem">
              <a href="#" className="parrafo">
                Planes
              </a>
            </li>
            <li className="about-meitem">
              <a href="#" className="parrafo">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="sectioncontain">
          <p className="parrafo">SIGUENOS EN NUESTRAS REDES SOCIALES</p>
          <ul className="redes-sociales">
            <li className="red-socialitem">
              <a href="#">
                <ion-icon
                  name="logo-instagram"
                  className="red-socialicon"
                ></ion-icon>{" "}
              </a>
            </li>
            <li className="red-socialitem">
              <a href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li className="red-socialitem">
              <a href="#">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
            <li className="red-socialitem">
              <a href="#">
                <ion-icon name="logo-tiktok"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
        <div className="sectioncontain contactofooter">
          <p className="parrafo">Contactanos a travez de nuestro email</p>
          <a href="">
            <ion-icon name="mail-outline" className="emailicon"></ion-icon>
          </a>
        </div>
      </div>
      <div className="section__derechos">
        <p className="parrafo">Todos los derechos reservados &copy;</p>
      </div>
    </footer>
  );
}

export default Footer;

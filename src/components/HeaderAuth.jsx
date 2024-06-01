//Se llama header auth porque el usuario debe de estar registrado 
//y logueado para poder entrar a esta pagina



function HeaderAuth() {
  return (
    <>
      <header className="layout__header">
        <div className="header__content">
          <img
            src="/img/logo-img.png"
            alt="Logo"
            className="content__img"
            type="img/svg"
          />
        </div>
        <input type="text" className="search-bar" placeholder="Buscar..." />
        <div className="profile-icon">
          <ion-icon name="person-circle-outline"></ion-icon>
          <ion-icon name="menu-outline" className="menu-icon"></ion-icon>
        </div>
      </header>
    </>
  );
}

export default HeaderAuth;
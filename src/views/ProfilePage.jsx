import HeaderAuth from '../components/HeaderAuth';



function ProfilePage() {
  return (
    <>

    <HeaderAuth/>
    <h1>olaa</h1>
      <div className="body__edit-profile">
        <div className="main-content">
          <h1 className="main-title">Editar perfil</h1>
          <hr className="divider" />

          <div className="edit-profile">
            <div className="photo-upload">
              <img src="#" id="profile-photo" />
              <input type="file" id="photo-upload" accept="image/*" />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="username"
                placeholder="Editar nombre de usuario"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="username"
                placeholder="Editar contraseña "
              />
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="Editar email" />
            </div>
            <div className="contain__button">
              <button className="button-verde">GUARDAR CAMBIOS</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;

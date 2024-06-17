import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getUserRequest, updateUserRequest } from "../api/auth"; // Asegúrate de que esta ruta sea correcta



function ProfilePage() {

  const {register, handleSubmit, formState:{ errors }, setValue} = useForm();
  const {updateUser, user, errors: updateError} = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function loadUser() {
      if (id) {
        const user = await getUserRequest(id);
        setValue('username', user.username);
        setValue('email', user.email);
        setValue('password', user.password);

      }
    }
    loadUser();
  }, [id, setValue])


  const onSubmit = handleSubmit(async (data) => {
    if(id) {
      await updateUser(id, data);
      navigate(`/perfil/`+user.id)
    }
  })
  







  return (
    <>

    
    
      <div className="body__edit-profile">


        <div className="main-content">
          <h1 className="main-title">Editar perfil</h1>
          <hr className="divider" />

          {updateError.map((error, i) => (
          <div className="error-login" key={i}>
            {error}
          </div>
        ))}


          <form className="edit-profile" onSubmit={onSubmit}>
            <div className="photo-upload">
              <img src="#" id="profile-photo" />
              <input type="file" id="photo-upload" accept="image/*" />
            </div>


            <div className="form-group">
              <input
                type="text"
                name="username"
                placeholder="Editar nombre de usuario"
                {...register("username", { required: true })}
              />
              {errors.usename && (
                <p className="texto-error">usename es requerido</p>
              )}

            </div>


            <div className="form-group">
              <input
                type="text"
                name="password"
                placeholder="Editar contraseña "
                {...register("password", { required: true })}
              />
              {errors.password && (
                  <p className="texto-error">password es requerido</p>
              )}

            </div>
            <div className="form-group">
              <input type="email" 
              name="email"
              placeholder="Editar email" 
              {...register("email", { required: true })}
              />
              {errors.email && (
                  <p className="texto-error">email es requerido</p>
                )}

            </div>


            <div className="contain__button">
              <button className="button-verde">Guardar cambios</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;

import {useForm} from 'react-hook-form';
import { registerRequest } from '../api/auth';
import { useHistory } from 'react-router-dom'


function FormRegistro(){
  const { register,handleSubmit } = useForm();


    return (
        <>
  
        <div className="form__content">
            <div className="form__content-contain">
              <h2 className="titulo-registro">Registro</h2>

              <form className="form" onSubmit={handleSubmit(async(values) => {
                console.log(values);
                registerRequest(values);

                const res = await registerRequest(values)
                console.log(res)

              })}>
                <div className="contenido__input">
                  <input
                    className="input__item"
                    type="text"
                    placeholder="Escribe tu usuario"
                    {...register("username", { required: true })}
                  />
                </div>

                <div className="contenido__input">
                  <input
                    className="input__item"
                    type="email"
                    placeholder="Escribe tu e-mail"
                    {...register("email", { required: true })}
                  />
                </div>


                <div className="contenido__input">
                  <input
                    className="input__item"
                    type="password"
                    placeholder="Escribe tu contraseña"
                    {...register("password", { required: true })}
                  />
                </div>
                <div className="contenido__input">
                  <input
                    className="input__item"
                    type="password"
                    placeholder="Repite tu contraseña"
                    {...register("confirm-password", { required: true })}
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

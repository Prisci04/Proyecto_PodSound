import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Error from "../components/Error";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, isAuthenticated, errors: signInError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/busqueda");
  }, [isAuthenticated]);


  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <>
      <div className="contain__inicio-sesion">
        {signInError.map((error, i) => (
          <div className="error-login" key={i}>
            {error}
          </div>
        ))}

        <section className="section__form-inicio">
          <div className="section__form-contain">
            <h2 className="titulo-inicio">Inicio sesion</h2>
            <form className="form__inicio-sesion" onSubmit={onSubmit}>
              <div className="contenido__input-inicio">
                <input
                  className="input__item-inicio"
                  type="email"
                  placeholder="Ingrese su email"
                  {...register("email", { required: true })}
                />

                {errors.email && (
                  <p className="texto-error">Email es requerido</p>
                )}

                {/* {errors.userName && (
                  <Error>{errors.userName?.message?.toString()}</Error>
                )} */}
              </div>

              <div className="contenido__input-inicio">
                <input
                  className="input__item-inicio"
                  type="password"
                  placeholder="Ingrese su contraseña"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="texto-error">password es requerido</p>
                )}
              </div>

              <div className="contain__texto-recuperar-pass">
                <Link to="/recuperar-pass" className="texto-recuperar-pass">
                  ¿Has olvidado tu contraseña?
                </Link>
              </div>

              <button
                className="button-verde button-verde--margin"
                type="submit"
              >
                Iniciar sesion
              </button>

              <div className="texto">
                <Link to="/" className="link__regreso">
                  Volver
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default LoginPage;




function LoginPage() {


    
    return(
        <>
         <div className="contain__inicio-sesion"> 
        
        <section className="section__form-inicio">
            <div className="section__form-contain">
                <h2 className="titulo-inicio">Inicio sesion</h2>
                <form action="" className="form__inicio-sesion">            
                
                    <div className="contenido__input-inicio">
                        <input className="input__item-inicio" type="text" placeholder="Ingrese su usuario" />
                    </div>
                
                    <div className="contenido__input-inicio">
                        <input className="input__item-inicio" type="password" placeholder="Ingrese su contraseña" />
                    </div>

                    <div className="contain__texto-recuperar-pass">
                        <a href="rec-contra.html" className="texto-recuperar-pass">¿Has olvidado tu contraseña?</a>
                    </div>
                
                    <button className="button-verde button-verde--margin" type="submit">Iniciar sesion</button>

                    <div className="texto">
                        <a className="link__regreso" href="index.html">Volver</a>
                    </div>
                </form>
                
            
            </div>
            
        </section>
    </div>
        
        </>
    );
};




export default LoginPage;
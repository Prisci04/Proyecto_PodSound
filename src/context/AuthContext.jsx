
import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest, updateUserRequest } from "../api/auth";
import Cookie from 'js-cookie'


export const AuthContext = createContext();


//hook personalizado para acceder al contexto (compartir valores y
//funciones, en este caso los valores del usuario.) de la autentuacion.
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };





export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true)


    //REGISTROOOO
    const signup = async (user) => {
        try {
          const res = await registerRequest(user);
          console.log(res.data);
          setUser(res.data);
          setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response);
            setErrors(error.response)
        }
    };

//inicio de sesion
    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res)
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (error) {
          
            console.log(error.response.data)
            setErrors(error.response.data)
        }
      }  


    const logout = () => {
        Cookie.remove("token");
        setIsAuthenticated(false);
        setUser(null);
    }

//actualizar user
    const updateUser = async (id, user) => {
      try {
        const res = await updateUserRequest(id, user)
        setUser(res.data)

      } catch (error) {
        console.log(error)
        setErrors(error.response.data)        
      }
    }


      

    useEffect(() => {
        if (errors.length > 0){
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return() => clearTimeout(timer)
        }
      }, [errors])


    useEffect(() => {
        async function checkLogin() {
          const cookies = Cookie.get()
      
          //Si no hay token la auth es falsa, no carga la pagina y el user esta en null
        if(!cookies.token) {
          setIsAuthenticated(false);
          setLoading(false);
          return setUser(null);
          
        }  

        //si hay token, verificalo y envialo al backend con verifyTokenRequest,

      try {
        const res = await verifyTokenRequest(cookies.token)
        console.log(res)

        //si no responde ningun dato la auth es falsa y no carga nada
        if (!res.data) {
           setIsAuthenticated(false);
           setLoading(false);
           return;
        }

        //si SI te responde algo del backend, el auth es true, se muestra y se guarda
        //si hay error cae al catch
        setIsAuthenticated(true);
        setUser(res.data); 
        setLoading(false)
      } catch (error) {
        console.log(error)
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      };
    }

    checkLogin();
  }, [])




  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        logout,
        updateUser,
        loading,
        user,
        isAuthenticated,
        errors
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


    









import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./layouts/Layout.jsx"

import MainLayout from "./views/MainLayout"
import LoginPage from "./views/LoginPage.jsx"
import ForgotPassPage from "./views/ForgotPassPage.jsx"
function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<MainLayout />} />
                    <Route path="/inicio-Sesion" element={<LoginPage />}/>
                    <Route path="/recuperar-contraseña" element={<ForgotPassPage />} />
                </Route>
               
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
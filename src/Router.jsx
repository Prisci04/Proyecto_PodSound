import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./layouts/Layout.jsx"
import Carousel from "./views/Carousel.jsx"
import MainLayout from "./views/MainLayout"

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<MainLayout />} />
                    
                </Route>
               
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProfilePage from './views/ProfilePage';
import PaginaInicio from './views/PaginaInicio';
import LoginPage from './views/LoginPage';
import ForgotPassPage from './views/ForgotPassPage';

function App() {

  return (
    // AQUI VA EL HTML
  
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaInicio/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/recuperar-contra' element={<ForgotPassPage/>} />

      </Routes>
    </BrowserRouter>

     
      
    
    </>
  );
}

export default App;

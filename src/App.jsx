import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProfilePage from './views/ProfilePage';
import PaginaInicio from './views/PaginaInicio';

function App() {

  return (
    // AQUI VA EL HTML
  
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<PaginaInicio/>} />
        <Route path='/profile' element={<ProfilePage/>} />
      </Routes>
    </BrowserRouter>

     
      
    
    </>
  );
}

export default App;

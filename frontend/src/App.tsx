import { useEffect } from 'react';
import './styles/index.scss';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Game from './pages/Game';

function App() {

  return (
    <BrowserRouter>
      <RoutesModule />
    </BrowserRouter>
  )
}



const RoutesModule = ({}) => {
  let location = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
  return (
    <Routes>
      <Route index element={<Game />} />
      {/* <Route path="edit" element={<DataEdit />} /> */}
    </Routes>
    
  )
}

export default App;

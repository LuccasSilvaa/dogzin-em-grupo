import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/home/index';
import DogPage from '../pages/dog/index';

function Rotas(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dogpage' element={<DogPage />} />
      </Routes>
    </Router>
  )
}
export default Rotas;

import Signup from './components/Signup';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import Product from './components/Product';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Index/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

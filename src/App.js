import './App.css';
import Header from './components/Header/Header';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import GrandPa from './components/GrandPa/GrandPa'
import OrderReview from './components/OrderReview/OrderReview';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/orderreview' element={<OrderReview></OrderReview>}></Route>
      <Route path='/grandpa' element={<GrandPa></GrandPa>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;

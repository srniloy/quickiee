import './App.css';
import {BrowserRouter,Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import FoodItemsPage from './pages/FoodItemsPage';
import EventPage from './pages/EventPage';
import AboutPage from './pages/AboutPage';
import ReservationPage from './pages/ReservationPage';
import { Navbar } from './ComponantsOfPages/Navbar';
import ContactPage from './pages/ContactPage';


function App() {
  const all = document.querySelector('*');
  all.addEventListener('click',(e)=>e.preventDefault());
  return (
    <BrowserRouter>
        <div className='div-app'>
        <Navbar/>
        <Routes>
          <Route path='/*' exact element={<Home/>}/>
          <Route path='/food-items' element={<FoodItemsPage/>}/>
          <Route path='/events' element={<EventPage/>}/>
          <Route path='/about-us' element={<AboutPage/>}/>
          <Route path='/reservation' element={<ReservationPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;

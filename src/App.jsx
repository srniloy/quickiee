import './App.css';
import {BrowserRouter,Router, Routes, Route} from 'react-router-dom'
import About from './ComponantsOfPages/About';
import Events from './ComponantsOfPages/Events';
import { Home } from './pages/Home';
import FoodItemsPage from './pages/FoodItemsPage';
import EventPage from './pages/EventPage';
import AboutPage from './pages/AboutPage';
import ReservationPage from './pages/ReservationPage';
import { Navbar } from './ComponantsOfPages/Navbar';
import Footer from './ComponantsOfPages/Footer';


function App() {
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
        </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;

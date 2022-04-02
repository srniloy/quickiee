import React,{useState} from 'react'
import '../ComponantsOfPages/CSS/Navbar.css'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [IsOpen, setIsOpen] = useState(false);
    const menuToggleActions = ()=>{
        const navList = document.querySelector('.navbar .nav');
        // if(IsOpen){
        //     navList.style.left = `${0}%`;
        // }
        setIsOpen(!IsOpen);
    };

    const navListFocusing = (e)=>{
        const navLists = document.querySelectorAll('.nav li p');
        navLists.forEach((element)=>{
            element.classList.remove("nav-list-active");
        });
        e.target.classList.add("nav-list-active");
        console.log(e.target);
    }

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo-menu">
                    <div className="logo">
                        <h3>Quickiee Restaurant</h3>
                        <p>Not Only Tasty, Healthiness Is Also Matter</p>
                    </div>
                    <div className="menu-icon">
                        <i className={IsOpen ? "fa-solid fa-xmark":"fa-solid fa-bars"} onClick={menuToggleActions}></i>
                    </div>
                </div>
                
                <ul className='nav' style={IsOpen?{left: '-0%'}:{left: '-100%'}}>
                    <li><Link to='/' onClick={navListFocusing}><p className="nav-list-active">Home</p></Link></li>
                    <li><Link to='/food-items' onClick={navListFocusing}><p>Food Items</p></Link></li>
                    <li><Link to='/events' onClick={navListFocusing}><p>Events</p></Link></li>
                    <li><Link to='/about-us' onClick={navListFocusing}><p>About Us</p></Link></li>
                    <li><Link to='/reservation' onClick={navListFocusing}><p>Reservation</p></Link></li>
                    <li><Link to='/contact' onClick={navListFocusing}><p>Contact</p></Link></li>
                    <li><button>Create Account</button> & <button>Login</button></li>
                </ul>
            </div>
        </div>
    )



}

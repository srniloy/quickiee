import React from 'react'
import { SocialIcons } from './About'
import './CSS/footer.css'

export default function Footer() {
  return (
    <div className="footer-section">
        <div className="footer-container">
            <div className="footer-container-wrapper">
                <div className="footer-col1"> 
                    <h4>Quikee Restaurant</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur alias dolorum asperiores aperiam doloremque numquam iure molestiae velit, cupiditate, cum ipsa hic nihil magni eligendi blanditiis error inventore ea magnam?</p>
                    <SocialIcons/>
                </div>
                <div className="footer-col2">
                    <h4>Open Hours</h4>
                    <ul className="open-hours-ul">
                        <li><span>Saturday</span> <span>9:00 - 24:00</span></li>
                        <li><span>Sunday</span> <span>9:00 - 24:00</span></li>
                        <li><span>Monday</span> <span>9:00 - 24:00</span></li>
                        <li><span>Tuesday</span> <span>9:00 - 24:00</span></li>
                        <li><span>Wednesday</span> <span>Closed</span></li>
                        <li><span>Thursday</span> <span>9:00 - 24:00</span></li>
                        <li><span>Friday</span> <span>9:00 - 24:00</span></li>
                    </ul>
                </div>
                <div className="footer-col3">
                    <h4>Instagram</h4>
                    <div className="ins-photos">
                        <img src={require("../images/Food-items/drinks/drink-1.jpg")} />
                        <img src={require("../images/Food-items/drinks/drink-3.jpg")} />
                        <img src={require("../images/Food-items/lunch-1.jpg")} />
                        <img src={require("../images/Food-items/lunch-2.jpg")} />
                        <img src={require("../images/Food-items/lunch-3.jpg")} />
                        <img src={require("../images/Food-items/food6.jpg")} />
                    </div>
                </div>
                <div className="footer-col4">
                    <h4>Newsletter</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, mollitia.</p>
                    <input type="email" placeholder='Enter Email Address' />
                    <button>Subscribe</button>
                </div>
            </div>
            
        </div>
        <div className="copyright-box">
                <p>Copyright ©2022 All rights reserved | This website is made with HTML, CSS, JS, REACT by Niloy</p>
            </div>
    </div>
  )
}

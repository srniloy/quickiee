import React,{useState} from 'react'
import { Button } from './Button'
// import { Heading } from './MixComponet'
import './CSS/reservation.css'





export default function Reservation() {

    const [booking,setBooking] = useState("Table");
    const bookEventAction = (e)=>{
        setBooking("Event");
        const bookingEnableBtns = document.querySelectorAll('.reservation-type-btn button');
        bookingEnableBtns.forEach(element => {
            element.classList.remove('active-btn');
        });
        e.target.classList.add('active-btn');

    }


    const bookTableAction = (e)=>{
        setBooking("Table");

        const bookingEnableBtns = document.querySelectorAll('.reservation-type-btn button');
        bookingEnableBtns.forEach(element => {
            element.classList.remove('active-btn');
        });
        e.target.classList.add('active-btn');
    }


  return (
    <div className="reservation-section">
        <div className="reservation-section-container">
            <h2>Reservation</h2>
            <div className="reservation-type-btn">
                <Button btnText={"Book A Table"} active={"active-btn"} btnBgType={"btn-outline-clear"} btnSize={"btn-medium"} clickAction={bookTableAction}/>
                <Button btnText={"Book An Event"} btnBgType={"btn-outline-clear"} btnSize={"btn-medium"} clickAction={bookEventAction}/>
            </div>
        </div>
        <div className="reservation-form-container">
            <h2>{`Book Your ${booking}`}</h2>
            <form action="#" className="reservation-form">
                <div className="reservation-input-wrapper">
                <input type="text" className="reservation-input" placeholder="Name" />
                <input type="email" className="reservation-input" placeholder="Email" />
                <input type="text" className="reservation-input" placeholder="Phone Number" />
                <input type="date" id='reservation-date' className="reservation-input" placeholder="Date"/>
                <input type="time" id='reservation-time' className="reservation-input" placeholder="Time" />
                <input type="number" className="reservation-input" placeholder="Guest" />
                </div>
                <input type="submit" value={`Book Your ${booking} Now`} className='reservation-input-submit-btn' onClick={()=>document.querySelector('.reservation-form').reset()} />
            </form>
        </div>
    </div>
  )
}



import React from 'react'
import '../ComponantsOfPages/CSS/frontSlider.css'
import {useState} from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import {Button} from './Button';

export const FrontSlider = () => {
    const img1 = require('../images/slide-img2.jpg');
    const [slideImgs, setSlideImgs] = useState([
        require('../images/slide-img.jpg'),
        require('../images/slide-img1.jpg'),
        require('../images/slide-img2.jpg'),
        require('../images/slide-img3.jpg'),
        require('../images/slide-img4.jpg'),
        require('../images/slide-img5.jpg')
    ]);
    let slideInfo = [
        {
            title: "“Good Food Is The Foundation Of Genuine Happiness.”",
            desc: "one-des"
        },
        {
            title: "“Need food and a good place to eat? Welcome to our humble place where you can eat good food peacefully.”",
            desc: "two-desc"
        },
        {
            title: "“We welcome your appetite. Let our food satisfy your stomach.”",
            desc: "three-desc"
        },
        {
            title: "“Welcome to our place. You will find happiness and food here. ”",
            desc: "four-desc"
        },
        {
            title: "“There is only one right way to eat a steak – with greed in your heart and a smile on your face.”",
            desc: "five-desc"
        },
        {
            title: "“Welcome! May the best food find your appetite.”",
            desc: "six-desc"
        },
        
    ]
    


    return (
        <div>
            <div id='sliderContainer'>
                
                
                <div className="accountSwitcher">
                    <i className='fa fa-times' onClick={()=>{
                        const element = document.querySelector("#sliderContainer .accountSwitcher");
                        element.style.transform = "translateY(-50%) scale(0)";
                        setTimeout(() => {element.remove();}, 500);
                    }}></i>
                    <h5>Create your account to access more</h5>
                    <button>Create Account</button>
                    <h5>Already created one? <br></br> Then-</h5>
                    <button>Login</button>

                </div>
                <Slide easing="ease" slidesToScroll= {1} slidesToShow= {1} className="slide-box">
                    {slideImgs.map((each,index)=>{
                        return (
                        <div className="slides each-slide" key={index} style={{background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${each})`,backgroundSize: "cover",backgroundPosition: "center"}}>
                            <div className='each-slide-info'>
                                <h1>{slideInfo[index].title}</h1>
                                <div className="slides-btn">
                                <Button btnSize="btn-large" btnBgType="btn-outline" btnText="Book a Table"></Button>
                                <Button btnSize="btn-large" btnBgType="btn-outline" btnText="Order Online"></Button>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                    
                </Slide>
            </div>
        </div>
    )
}

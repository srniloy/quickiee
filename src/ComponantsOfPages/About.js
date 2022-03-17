import React from 'react'
import { Heading } from './MixComponet'
import './CSS/about.css'

export default function About() {
  return (
    <>
        <div className="about-section">
            <div className="about-section-container">
                <div className="about-restaurent">
                    <div className="about-res-img">
                        <img src={require("../images/resturent-inside.jpg")} alt="" />
                    </div>
                    <div className="about-detail">
                        <h2>Our secret of testy foods is <strong> Perfect Ingredients</strong></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quo labore sunt voluptatibus explicabo necessitatibus provident corrupti quae in. Rem distinctio ex expedita quisquam? Id saepe distinctio autem a possimus ipsum excepturi, aspernatur temporibus corporis earum obcaecati ipsam nisi similique delectus vel, quae quia et alias, expedita commodi. Quae porro illum animi autem corrupti eum placeat unde eligendi? Culpa id cumque amet, esse delectus, aliquam, nam repellat beatae tempora temporibus voluptates dolorum maiores eligendi. Totam eum ipsum amet ut. Nostrum.</p>
                    </div>
                </div>
                <div className="restaurants-services">
                    <h2>We are popular for</h2>
                    <div className="services-wrapper">
                        <ServiceCard serviceName="HEALTHY FOODS" iconPath={require("../images/icons/healthy-food.png")} />
                        <ServiceCard serviceName="Expert Chefs" iconPath={require("../images/icons/chef.png")} />
                        <ServiceCard serviceName="FASTEST DELIVERY" iconPath={require("../images/icons/food-delivery.png")} />
                        <ServiceCard serviceName="Parties" iconPath={require("../images/icons/parties.png")} />
                    </div>
                </div>
                <div className="restaurents-chef">
                    <h2>Our Professional Chef</h2>
                    <div className="chef-profiles-wrapper">
                        <ChefProfileCard imgPath={require("../images/chefs/chef-1.jpg")} name={"Kuddos Mia"} position={"CEO, Co Founder"}/>
                        <ChefProfileCard imgPath={require("../images/chefs/chef-4.jpg")} name={"Eddis Ali"} position={"Head Chef"}/>
                        <ChefProfileCard imgPath={require("../images/chefs/chef-3.jpg")} name={"Nargis Begum"} position={"Chef Cook"}/>
                        <ChefProfileCard imgPath={require("../images/chefs/chef-2.jpg")} name={"Baten Sikder"} position={"Chef Cook"}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}


export const ServiceCard = (props)=>{

    return(
        <div className="service-card-container">
            <div className="service-icon">
                <img src={props.iconPath} alt="" />
            </div>
            <h4>{props.serviceName}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae.</p>
        </div>
    )
}

export const ChefProfileCard = (props)=>{

    return(
        <div className="chef-profile-card-container">
            <div className="chef-profile-pic">
                <img src={props.imgPath} alt="" />
            </div>
            <h4>{props.name}</h4>
            <h5>{props.position}</h5>
            <p>Lorem ipsum, dolor sit amet consect adipisicing elit. Quidem, dolorum autem. Porro vitae repellendus odit.</p>
            <SocialIcons/>
        </div>
    )
}
export const SocialIcons = ()=>{
    return(
    <div className="social-media">
        <i className="fa-brands fa-facebook-square"></i>
        <i className="fa-brands fa-instagram-square"></i>
        <i className="fa-brands fa-linkedin-square"></i>
        <i className="fa-brands fa-twitter-square"></i>
    </div>
    )
}

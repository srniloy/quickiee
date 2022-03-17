import React,{useState} from 'react'
import '../ComponantsOfPages/CSS/event.css'
import { Button } from './Button'

export default function Event(props) {
  return (
    <div>
        <div className="event-container">
            <div className="col1">
                <img src={props.imgPath} alt="" />
            </div>
            <div className="col2">
                <h2>{props.titleText}</h2>
                <p>{props.titleDesc}</p>
                <ul>
                    <li><i className='fa-solid fa-check'></i> {props.advantages[0]}</li>
                    <li><i className='fa-solid fa-check'></i> {props.advantages[1]}</li>
                    <li><i className='fa-solid fa-check'></i> {props.advantages[2]}</li>
                </ul>
                <div className='col2-last-div'>
                    <div className="col2-last-div-col1">
                        <i className="fa-solid fa-dollar-sign"> {props.price}</i>
                    </div>
                    <div className="col2-last-div-col2">
                        <Button btnBgType={"btn-outline-dark"} btnText={"Book An Event"}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

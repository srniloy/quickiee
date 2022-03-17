import React from 'react'
import '../ComponantsOfPages/CSS/button.css'

const defBtnSize = ['btn-large','btn-medium','btn-small'];
const defBtnStyle = ['btn-outline','btn-solid','btn-outline-dark','btn-outline-clear'];
const defActivation = ['active-btn',''];


export const Button = (props) => {
    const checkBtnSize = defBtnSize.includes(props.btnSize)? props.btnSize:defBtnSize[0];
    const checkBtnStyle = defBtnStyle.includes(props.btnBgType)? props.btnBgType:defBtnStyle[0];
    const checkActivation = defActivation.includes(props.active)? props.active:defActivation[1];
    // const checkOwnIdentity = props.ownIdentityClass!=undefined? props.ownIdentityClass:"";


    // if(props.active!=undefined){
    //   console.log(props.active);
    // }
    // console.log(props.clickAction);
  return (
    <button className={`btn ${checkBtnSize} ${checkBtnStyle} ${checkActivation}`} onLoad={()=>{console.log("loaded");}} onClick={props.clickAction == undefined ? ()=>{} : props.clickAction}>{props.btnText}</button>
  )
}
// 
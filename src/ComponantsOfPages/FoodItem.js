import React,{useState} from 'react'
import './CSS/foodItem.css'

export default function FoodItem(props) {
    const [hearted, setHearted] = useState(false);
    const [totalHeart, setTotalHeart] = useState(props.loveReact);
    const countHeart = ()=>{
        setHearted(!hearted);
        if(!hearted){
            setTotalHeart(totalHeart+1);
        }else{setTotalHeart(totalHeart-1);}
    };

  return (
    <>
        <div className="food-item-container">
            <div className="item-picture"><img src={props.imgPath} alt="" /></div>
            <div className="item-title-love">
                <div className="item-title">
                    <h3>{props.foodName}</h3>
                    <div className="food-item-price-buy">
                        <p>{`$${props.price}`}</p>
                        <button>Order</button>
                    </div>
                </div>
                <div className="item-love">
                    <i className={hearted ? "fa-solid fa-heart" : "fa-regular fa-heart"} onClick={countHeart}></i>
                    <p>{totalHeart}</p>
                </div>
                
            </div>
            
        </div>
    </>
  )
}

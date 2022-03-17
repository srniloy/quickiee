import React,{useState} from 'react'
import FoodItem from './FoodItem'
import { Heading } from './MixComponet'
import './CSS/foodItems.css'

export default function FoodItems() {



  const [foodsInfo,setFoodsInfo] = useState(breakfastItemsInfo);
  const [foodTypeBtnIndicator,setfoodTypeBtnIndicator] = useState();


  


  const breakfastItem=(e)=>{
    document.querySelector('.all-items').style.opacity="0.6";
    setTimeout(()=>{
      setFoodsInfo(breakfastItemsInfo);
      document.querySelector('.all-items').style.opacity="1";
    },200);

  const foodTypeBtns = document.querySelectorAll('.food-type-indicators button');

    foodTypeBtns.forEach(element => {
      if(element.classList.contains("food-type-indicator-btn-active")){
        element.classList.remove("food-type-indicator-btn-active");
      }
    });
    e.target.classList.add("food-type-indicator-btn-active");
  }


  const lunchItem=(e)=>{
    document.querySelector('.all-items').style.opacity="0.6";
    setTimeout(()=>{
      setFoodsInfo(lunchItemsInfo);
      document.querySelector('.all-items').style.opacity="1";
    },200);
  const foodTypeBtns = document.querySelectorAll('.food-type-indicators button');

    foodTypeBtns.forEach(element => {
      if(element.classList.contains("food-type-indicator-btn-active")){
        element.classList.remove("food-type-indicator-btn-active");
      }
    });
    e.target.classList.add("food-type-indicator-btn-active");


  }
  const dinnerItem=(e)=>{
    document.querySelector('.all-items').style.opacity="0.6";
    setTimeout(()=>{
      setFoodsInfo(dinnerItemsInfo);
      document.querySelector('.all-items').style.opacity="1";
    },200);
  const foodTypeBtns = document.querySelectorAll('.food-type-indicators button');


    foodTypeBtns.forEach(element => {
      if(element.classList.contains("food-type-indicator-btn-active")){
        element.classList.remove("food-type-indicator-btn-active");
      }
    });
    e.target.classList.add("food-type-indicator-btn-active");



  }
  const drinkItem=(e)=>{
    document.querySelector('.all-items').style.opacity="0.6";
    setTimeout(()=>{
      setFoodsInfo(drinkItemsInfo);
      document.querySelector('.all-items').style.opacity="1";
    },200);

  const foodTypeBtns = document.querySelectorAll('.food-type-indicators button');

    foodTypeBtns.forEach(element => {
      if(element.classList.contains("food-type-indicator-btn-active")){
        element.classList.remove("food-type-indicator-btn-active");
      }
    });
    e.target.classList.add("food-type-indicator-btn-active");


  }




  return (
    <div>
        <div className="food-items-container">
          <Heading text="Our" colorText="Food Items"/>
          <div className="items-wrapper">
            <div className="food-type-indicators">
              <button className='type-indicator food-type-indicator-btn-active' onClick={breakfastItem}>Breakfast</button>
              <button className='type-indicator'onClick={lunchItem}>Lunch</button>
              <button className='type-indicator'onClick={dinnerItem}>Dinner</button>
              <button className='type-indicator'onClick={drinkItem}>Drinks</button>
            </div>
            <ul className="all-items">

            {foodsInfo.map((item,i)=>{
              return(<FoodItem 
                key={i}
                imgPath = {item.imgPath}
                foodName = {item.foodName} 
                price = {item.price}
                loveReact = {item.loveReact} 
              />)
            })}

            </ul>
          </div>
        </div>
    </div>
  )
}






let breakfastItemsInfo = [
  {
    imgPath: require('../images/Food-items/food7.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/breakfast-2.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/breakfast-3.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/food5.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/food6.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/breakfast-1.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  }
  
];

let lunchItemsInfo = [
  {
    imgPath: require('../images/Food-items/lunch-1.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/lunch-2.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/lunch-3.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/food2.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/food1.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/food6.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  }
  
];

let dinnerItemsInfo = [
  {
    imgPath: require('../images/Food-items/food7.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/food5.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/food6.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/breakfast-2.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/breakfast-3.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/breakfast-1.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  }
  
];


let drinkItemsInfo = [
  {
    imgPath: require('../images/Food-items/drinks/drink-1.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/drinks/drink-2.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/drinks/drink-3.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/drinks/drink-4.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/drinks/drink-5.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  },
  {
    imgPath: require('../images/Food-items/drinks/drink-6.jpg'),
    foodName: 'Chicken Burgar',
    price: 38,
    loveReact: 574
  }
  
];

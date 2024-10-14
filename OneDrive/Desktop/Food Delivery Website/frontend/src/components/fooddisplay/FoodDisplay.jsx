import { Storecontext } from '../../../../context/Storecontext'
import FoodItem from '../fooditem/FoodItem';
import './FoodDisplay.css'
import React, { useContext } from 'react'

const FoodDisplay = ({category}) => {
    const {food_list}=useContext(Storecontext);
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes new you</h2>
        <dev className="food-display-list">
          {
            food_list.map((item,index)=>{
               return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            })
          }
        </dev>
    </div>
  )
}

export default FoodDisplay
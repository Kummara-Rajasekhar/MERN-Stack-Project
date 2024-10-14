import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/Exploremenu/ExploreMenu'
import FoodDisplay from '../../components/fooddisplay/FoodDisplay'
const Home = () => {
  const [category, setcategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
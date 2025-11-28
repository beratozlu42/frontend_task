import React from 'react'
import styles from './index.module.css'
import { useNavigate } from 'react-router-dom'
import img from '../../assets/heroImg.jpg'

const index = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className={`${styles.heroText} grid grid-flow-row md:grid-flow-col gap-4 items-center h-[70vh] mx-3`}>
        <div>
          <span className="text-2xl text-[#470808] md:text-5xl font-bold w-[80%]">
            Choose whatever you want to buy.
            <p>Its all yours!</p>
          </span>
          <button 
            className="px-2 py-1 md:text-lg md:px-4 md:py-2 my-5 bg-red-400 text-white rounded hover:bg-red-300" 
            onClick={() => navigate("/products")}>
              Order Now!
          </button>        
        </div>
        <img src={img} alt="" className="w-[100%]" />
      </div>
    </div>
  )
}

export default index
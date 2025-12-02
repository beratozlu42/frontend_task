import styles from './index.module.css'
import { useNavigate } from 'react-router-dom'
import img from '../../assets/heroImg.jpg'

const index = () => {

  // This page currently unused.
  // I decided to remove the Home page from routing but keeping the file

  const navigate = useNavigate();

  return (
    <div className="container mt-20 md:mt-0">
      <div className={`${styles.heroText} grid grid-flow-row md:grid-flow-col gap-4 items-center h-[70vh] mx-3`}>
        <div className='z-[10] text-center md:text-left'>
          <span className="text-4xl text-[#470808] md:text-5xl font-bold w-[80%]">
            Choose whatever you want to buy.
            <p className='underline'>Its all yours!</p>
          </span>
          <button 
            className="px-2 py-1 md:text-lg md:px-4 md:py-2 my-5 bg-red-400 text-white rounded hover:bg-red-300" 
            onClick={() => navigate("/")}>
              Our Products
          </button>        
        </div>
        <img src={img} alt="img" className="w-[100%]" />
      </div>
    </div>
  )
}

export default index
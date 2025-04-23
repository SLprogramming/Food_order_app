import React, { useEffect, useState } from 'react'
import SliderButton from '../micro/SliderButton';

const Banner = () => {
 
  const [isLoaded, setIsLoaded] = useState(false);

  const backgroundImage = {
    backgroundImage: `url('/images/slider-glob.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top left',
  }
  const icons = [
    {id:1,src:'/images/fastfood.png',title:'Fastfood'},
    {id:2,src:'/images/fastfood.png',title:'Fastfood'},
    {id:3,src:'/images/fastfood.png',title:'Fastfood'},
    {id:4,src:'/images/fastfood.png',title:'Fastfood'},
  ]
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    },300)
  },[])
  return (
    
    <div style={backgroundImage} className='w-full md:w-[80%] mx-auto py-12'>
      <div className="flex  text-white w-full flex-col justify-between items-center md:flex-row gap-3 md:gap-0 ">

        <div className='w-full text-center md:text-left md:w-[40%]'>
            <h1 className='font-[800] text-6xl md:text-7xl '>Express</h1>
            <h1 className='font-[800] text-6xl md:text-7xl text-[var(--color-primary)] '>Home Delivery</h1>
            <p className='text-1xl font-[100] mt-2 text-[#d8d8d8] w-full px-7 md:px-0  md:w-3/4'>Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
            <SliderButton text='Read More' />          
        </div>
        <div className='w-full md:w-[60%] '> 
            {/* <img className={`w-full `} src="/images/slider-courier-mask.png" alt="" /> */}
            <img className={`${isLoaded?'translate-x-0 opacity-100':'translate-x-full opacity-0'} relative p-0 w-full transition-all duration-700 ease-in-out`} src="/images/slider-courier-mask.png" alt="" />
        </div>
      </div>
      <div className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}>

      {icons.map((icon) => {
        return(
          <div key={icon.id} className={`w-full relative px-5 py-5 transition-all duration-200 flex justify-between items-center  rounded-2xl bg-[#e7dcc8] hover:scale-105 hover:bg-white hover:shadow-2xl`}>
              <img src={icon?.src} className='w-28' alt="" />
              <h1 className='font-[800] text-2xl'>{icon?.title}</h1>
          </div>
        )
      })}
      </div>
    
    </div>
  )
  
}

export default Banner
import React, { useEffect, useState } from 'react'
import useStore from '../store/meal'



const PopularItems = () => {
  const { getAllMealCategories,filterByCategoriesAreaIngredient } = useStore()
  const [categories, setCategories] = useState([])
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const [mealToShow, setMealToShow] = useState([])
  const [isLoading,setIsLoading] = useState(false)



  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllMealCategories()
      setCategories(getRandomItems(res.filter(item=>item?.strCategory!='Goat'), 4))

    }
    fetchData()
  }, [])

  useEffect(() => {
    setSelectedCategoryId(categories[0]?.idCategory)
  }, [categories])

  useEffect(() => {
    const fetchData = async () => {
      // setMealToShow([])
      setIsLoading(true)
  
     const res = await filterByCategoriesAreaIngredient('c', categories?.find(item => item?.idCategory == selectedCategoryId)?.strCategory)
      console.log(res)

      if(res?.length){
        setIsLoading(false)
        setMealToShow(getRandomItems(res, 6))
      }
    }
    fetchData()
  }, [selectedCategoryId])


  const getRandomItems = (arr, count) => {
    if (count >= arr.length) return [...arr];
    return arr
      .slice() // clone to avoid mutating the original array
      .sort(() => 0.5 - Math.random())
      .slice(0, count);
  }


  return (


    <div className={`py-8  w-[80%] mx-auto transition-all duration-2000`}>
      <div className='text-center font-bold text-[var(--color-primary)]'>Quick pick</div>
      <h1 className='text-6xl font-[700] text-center text-[#202020]'>Popular Goods</h1>
      <ul className='flex w-full mx-auto justify-center items-center gap-[100px] flex-wrap mt-8 mb-8'>
        {categories?.length > 0 && categories.map((item, i) => {
          return (
            <li key={i} className={`cursor-pointer  hover:text-[var(--color-primary-dark)] text-[1.2rem] font-800 ${selectedCategoryId == item?.idCategory ? 'text-[var(--color-primary-dark)]' : 'text-[var(--color-secondary)] border-b-2 border-gray-500 border-dashed'}`} onClick={() => {
              setSelectedCategoryId(item?.idCategory)
            }}>{item?.strCategory}</li>
          )
        })}


      </ul>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${isLoading ? 'opacity-5' : 'opacity-100'} `}>
      

        {mealToShow?.length > 0 && mealToShow.map((item, i) => {
          return (
            <div key={i} className='flex flex-col justify-center items-center'>
              <div className='w-[300px] h-[300px] rounded-full overflow-hidden relative'>

              <img src={item?.strMealThumb} alt="" className='w-full h-full transition-all duration-200 hover:scale-[1.2]' />
              </div>
              <h1 className='text-[1.5rem] font-[700] text-[#202020]'>{item?.strMeal}</h1>
            </div>
          )
        })}
    
      </div>
    </div>

  )
}

export default PopularItems
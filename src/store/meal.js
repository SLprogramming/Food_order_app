import { create } from 'zustand'
import { getAxiosClient } from '../data/axios'

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  searchMealByName:async (name) => {
    const res = await getAxiosClient().get(`search.php?${name.length > 1 ? 's':'f'}=${name}`)
    const data = res.data.meals
    return data
  },
  getFullMealDetailById: async id => {
    const res = await getAxiosClient().get(`lookup.php?i=${id}`)
    
    return res?.data?.meals[0]
  },
  getRandomMeal: async () => {
    const res = await getAxiosClient().get('random.php')
    const data = res.data.meals
    return data
  },
  getAllMealCategories: async () => {
    const res = await getAxiosClient().get('categories.php')
    const data = res.data.categories
    return data
  },
  listAllCategoriesAreaIngredient: async (flag) => {
    const res = await getAxiosClient().get(`list.php?${flag}=list`)
    const data = res.data.meals
    return data
  },
  filterByCategoriesAreaIngredient: async (name, value) => {
    const res = await getAxiosClient().get(`filter.php?${name}=${value}`)
    const data = res.data.meals
    return data
  }
}))

export default useStore
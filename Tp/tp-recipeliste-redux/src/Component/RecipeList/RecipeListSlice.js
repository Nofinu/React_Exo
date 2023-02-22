import { createSlice } from "@reduxjs/toolkit";


const RecipeListSclice = createSlice({
  name:"RecipeList",
  initialState:{
    recipes:[],
    ingredients:[],
    isLogged:false
  },
  reducers:{
    setIsLoggedAction(state, actions){
      state.isLogged= actions.payload
    },
    setIngredientsAction(state,actions){
      state.ingredients = actions.payload
    }

  }
})

export const { setIsLoggedAction, setIngredientsAction} = RecipeListSclice.actions

export default RecipeListSclice.reducer
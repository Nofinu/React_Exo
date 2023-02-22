import { useSelector } from 'react-redux'
import './RecipeContainer.css'

export const RecipeContainerComponent=(props)=>{

  const isLogged = useSelector(state => state.recipeList.isLogged)
  const ingredients = useSelector(state => state.recipeList.ingredients)

  return(
      <div className="recipeContainer">
        <div className="headerRecipeContainer">
          <h2>Recipe List</h2>
          {isLogged &&<button>Add</button>}
        </div>
        <hr />
        <div>{ingredients.length !==0 && ingredients.map((ingredient,index) => <p key={index} >{ingredient}</p>)}</div>
      </div>
  )
} 
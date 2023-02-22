import './App.css';
import {useEffect, useRef, useState} from 'react'
import {createPortal} from "react-dom"
import { ModalComponent } from './Component/Shared/ModalComponent';
import {API_KEY} from "./API_KEY.js"
import { RecipeContainerComponent } from './Component/RecipeContainer/RecipeContainerComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setIngredientsAction, setIsLoggedAction } from './Component/RecipeList/RecipeListSlice';

function App() {

  const dispatch = useDispatch()
  const URL_DB="https://listerecette-redux-default-rtdb.europe-west1.firebasedatabase.app/"

  const isLogged = useSelector(state => state.recipeList.isLogged)

  const [isLoggin,setIsLoggin]=useState(false)
  const [modalLoginStatus,setModalLoginStatus]=useState(false)

  const passwordRef = useRef()
  const emailRef = useRef()


  // const initingredient= async()=>{
  //   try{
  //     const token = localStorage.getItem('token')
  //     const URL_DB="https://listerecette-redux-default-rtdb.europe-west1.firebasedatabase.app/"
  //     if(token){
  //       const reponse = await fetch(`${URL_DB}ingredients.json?auth=${token}`,{
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         body : JSON.stringify({"0":"eggs","1":"flour","2":"butter","3":"tomato","4":"corn","5":"sugar","6":"salt"})
  //       })

  //       const data = await reponse.json()
  //       console.log(data)

  //     }
  //   }
  //   catch(error){
  //     console.error(error.message);
  //   }
  // }

  const refreshIngredients= async()=>{
    try{
      const reponse = await fetch(`${URL_DB}ingredients.json`)
  
      if(!reponse.ok){
        throw new Error('Un probleme est survenu lors de la recuperation de la liste des ingredients')
      }
  
      const data = await reponse.json()
  
      let tmpIngredients=[]

      for(let key in data){
        data[key].forEach(element => {
          tmpIngredients.push(element)
        });
      }

      dispatch(setIngredientsAction(tmpIngredients))
    }
    catch(error){
      console.error(error.message);
    }
  }

const OonSubmitFormInputHandler= async (e)=>{

  e.preventDefault()
  let BASE_URL = ""
  if (isLoggin){
    BASE_URL=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
  }
  else{
    BASE_URL=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
  }
  try{
    const response = await fetch(BASE_URL,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        returnSecureToken : true
      })
    })

    if(!response.ok){
      throw new Error(`il a eu une erreure lors ${isLoggin? "du Log In" : "de l'enregistrement"}`)
    }

    const data = await response.json()

    localStorage.setItem('token',data.idToken)

    emailRef.current.value=""
    passwordRef.current.value=""

    dispatch(setIsLoggedAction(true))
    setModalLoginStatus(false)
  }
  catch(error){
    console.error(error.message);
  }
}





  const modalLoginHandler=(entry="")=>{
    if(entry === "login"){
      setIsLoggin(true)
    }
    else{
      setIsLoggin(false)
    }
    setModalLoginStatus(true)
  }

  const closeModal=()=>{
    setModalLoginStatus(false)
  }

  const LogOutHandler =()=>{
    dispatch(setIsLoggedAction(false))
    localStorage.setItem('token',"")
  }


  useEffect(()=>{
    refreshIngredients()
  },[])

  return (
    <>
      {
        modalLoginStatus && createPortal(<ModalComponent closeModal={closeModal}>
            <form className='FormInput' onSubmit={OonSubmitFormInputHandler}>
              <h2>{isLoggin? "Log In" : "Register"}</h2>
              <hr />
              <label htmlFor="inputEmail">Email :</label>
              <input type="text" id="inputEmail" ref={emailRef}/>
              <label htmlFor="inputPassword">Password :</label>
              <input type="password" id="inputPassword" ref={passwordRef} />
              <div>
                <button>{isLoggin? "Log In" : "Register"}</button>
              </div>
            </form>
            
          </ModalComponent>,document.getElementById('modal-root'))
          
      }
      <div className="App">
        <header className="App-header">
          <nav className='navbar'>
            <h1>eRecipe</h1>
            <div>
              {
                isLogged? <button onClick={LogOutHandler}>Log out</button>
                :
                <>
                  <button onClick={()=>modalLoginHandler("login")}>Log In</button>
                  <button onClick={modalLoginHandler}>Register</button>
                </>
              }
            </div>
          </nav>
        </header>
          <RecipeContainerComponent/>
          <button onClick={refreshIngredients}>click</button>
      </div>
    </>
  );
}

export default App;

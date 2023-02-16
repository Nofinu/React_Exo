import { useState } from "react"
import { ButtonContainer } from "./ButtonContainer"
import { DisplayContainer } from "./DisplayContainer"

export const MainComponent = () =>{

  const [compteur,setCompteur]=useState(0)

  const onClickPlusHandler = () =>{
    setCompteur(compteur+1)
  }

  const onClickMinusHandler = () =>{
    if(compteur>0){
      setCompteur(compteur-1)
    }
  }

  return(
    <div className="mainComponent">
      <h1>Fizz Buzz</h1>
      <hr />
      <div className="globalContainer">
      <DisplayContainer Value={compteur}/>
      <ButtonContainer minusBtnClasse={compteur===0? "disable":"btnActivate"} onClickPlusHandler={onClickPlusHandler} onClickMinusHandler={onClickMinusHandler}/>
    </div>
      </div>
  )
}
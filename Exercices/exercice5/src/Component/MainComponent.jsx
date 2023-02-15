import { useState,useEffect } from "react";
import { ButtonContainer } from "./ButtonContaner"
import { ComponentDisplay } from "./ComponentDisplay";

export const MainComponent = ()=>{

  const [statutPlay,setStatutPlay]=useState(false)
  const [statutReset,setStatutReset]=useState(false)
  const [listeCompteur,setListeCompteur]=useState([])
  const [compteur,setCompteur]=useState(1)

  useEffect(()=>{
    let monIntervale = setInterval (() => {
      if(statutPlay){
        setListeCompteur(lastState => [...lastState,compteur])
        setCompteur(lastState => lastState+1)
      }
    },1000);
    if(statutReset){
      setListeCompteur([])
      setCompteur(1)
      setStatutReset(false)
    }

    return ()=>{
      if(monIntervale){
        clearInterval(monIntervale)
        monIntervale=undefined
      }
    }
  },[statutPlay,compteur,statutReset])


  const changeStatutPause=()=>{
    setStatutPlay(false)
  }
  const changeStatutPlay=()=>{
    setStatutPlay(true)
  }

  const changeResetStatut=()=>{
    setStatutPlay(false)
    setStatutReset(true)
  }

  return(
    <div className="mainComponent">
      <h1>MainComponent</h1>
      <hr />
      <ButtonContainer changeStatutPause={changeStatutPause} changeStatutPlay={changeStatutPlay} changeResetStatut={changeResetStatut} />
      <div className="displayDiv">
        {
          listeCompteur.length > 0&& listeCompteur.map(element =>{
            if(element%2 === 0){
              return<ComponentDisplay typeOfDiv={"even"} key={element} number={element}/>
            }
            else{
              return<ComponentDisplay typeOfDiv={"odd"} key={element} number={element}/>
            }
          })
        }
      </div>
    </div>
  )
}
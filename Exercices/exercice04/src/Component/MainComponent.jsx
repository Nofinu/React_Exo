import { useState,useRef} from "react"
import { CounterComponent } from "./CounterComponent"

export const MainComponent =()=>{

  const [listeCounter,setListeCounter]=useState([])
  const [compteur,setCompteur]=useState(0)

  const inputValue = useRef()


  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(+inputValue.current.value)
    setListeCounter(previousState => [...previousState,{inputValue:+inputValue.current.value,currentValue:+inputValue.current.value,id:compteur}])
    setCompteur(previousCompteur => previousCompteur+1)
  }

  const suprCounter = (id)=>{
    let index = listeCounter.findIndex(element => element.id === id)
    setListeCounter(lastState => {
      lastState.splice(index,1)
      return [...lastState]
    })
  }

  return(
    <div className="MainComponant">
      <h1>MainComponant</h1>
      <hr />
      <form onSubmit={onSubmitForm}>
      <label htmlFor="input">Start value :</label>
      <input type="number" min="0" ref={inputValue}/>
      <button>Add a Counter</button>
      </form>
      <h2>Counters</h2>
      <hr />
      <div>
        {
          listeCounter.length === 0? <p>Please add a Counter</p>
          :
          listeCounter.map((elem) => <CounterComponent counter={elem} key={elem.id} suprCounter={suprCounter}></CounterComponent>)
        }
      </div>
    </div>
  )
}
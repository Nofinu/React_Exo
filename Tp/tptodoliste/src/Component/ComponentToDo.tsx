import { useEffect, useState } from "react"
import { TodoItem } from "../Classes/TodoItem"

interface Props{
  element : TodoItem
  changeIsDone:(id:number)=>void
  suprToDo:(id:number)=>void

}

export const ComponentToDo= (props :Props) =>{

    const [classText,setClassText]=useState("")

    const defCouleurTime =()=>{
      let DateNow = new Date().getTime()
      let dateToDo = new Date(+props.element.getDate[0],+props.element.getDate[1]-1,+props.element.getDate[2]).getTime()
      let remainingTime = dateToDo - DateNow
      remainingTime = remainingTime/(1000*60*60*24)
      if(remainingTime < -1){
        setClassText("red")
      }
      else if(remainingTime <6){
        setClassText("yellow")
      }
      else {
        setClassText("green")
      }
    }


    useEffect(()=>{
      defCouleurTime()
    },[defCouleurTime])


  return(
    <div className="itemToDo">
      <div className="headerItemToDo">
      <h3>{props.element.getTitle}</h3>
      <p className={classText}>{props.element.getDate.join("/")}</p>
      </div>
      <hr />
      <p>{props.element.getDescription}</p>
      <div className="headerItemToDo">
        <button onClick={()=>props.changeIsDone(props.element.getId)} className={props.element.getIsDone?"green": "yellow"}>{props.element.getIsDone? "Do": "To Do"}</button>
        <button onClick={()=>props.suprToDo(props.element.getId)} className="red">suprimmer</button>
      </div>
    </div>
  )
}
import { useEffect, useState } from "react"
import { TodoItem } from "../Classes/TodoItem"

interface Props{
  element : TodoItem
  changeIsDone:(id:number)=>void

}

export const ComponentToDo= (props :Props) =>{

    const date = new Date().toLocaleDateString().split("/")

    const [classText,setClassText]=useState("")

    const DateTodo = props.element.getDate

    const testDateYear=()=>{
      console.log("enter")
      if(date[2]>DateTodo[2]){
        setClassText("red")
        return 
      }
      else if (date[2]<DateTodo[2]){
        setClassText("green")
        return 
      }
      else
        testDateMonth()
    }

    const testDateMonth =()=>{
      if(date[1]<DateTodo[1]){
        setClassText("green")
        return 
      }
      else if(date[1]>DateTodo[1]){
        setClassText("red")
        return 
      }
      else
        testDateDay()
    }

    const testDateDay=()=>{
      if(date[0]>DateTodo[0]){
        setClassText("red")
        return 
      }
      else{
        if(Number(DateTodo[0])-Number(date[0]) < 7){
          setClassText("yellow")
          return 
        }
        else{
          setClassText("green")
          return 
        }
      }
    }

    useEffect(()=>{
      testDateYear()
    },[])


  return(
    <div className="itemToDo">
      <h3>{props.element.getTitle}</h3>
      <p className={classText}>{props.element.getDate.join("/")}</p>
      <hr />
      <p>{props.element.getDescription}</p>
      <button onClick={()=>props.changeIsDone(props.element.getId)} className={props.element.getIsDone?"green": "yellow"}>{props.element.getIsDone? "Do": "To Do"}</button>
    </div>
  )
}
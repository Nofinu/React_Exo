import {useState} from 'react'
import { TodoItem } from '../Classes/TodoItem'
import { ComponentToDo } from './ComponentToDo'
import { FormToDo } from './FormToDo'

export const MainComponent = () =>{

  const [listeToDo,setListeToDo]=useState<TodoItem[]>([])

  const reciveSubmitForm=(Todo:TodoItem):void=> {
    setListeToDo([...listeToDo,Todo])
  }

  const changeIsDone=(id:number):void=>{
    let Todo= listeToDo.find(elem => elem.getId === id)
    if(Todo){
      Todo.IsDone=!Todo.getIsDone
    }
    let tmpListeToDo = listeToDo.filter(elem => {
      if(elem === Todo)
        return
      else
        return elem
    })
    if(Todo){
      setListeToDo([...tmpListeToDo,Todo].sort((a,b)=> a.getId - b.getId))
    }
  }

  const suprToDo = (id:number):void =>{
    let Todo= listeToDo.find(elem => elem.getId === id)
    let tmpListeToDo = listeToDo.filter(elem => {
      if(elem === Todo)
        return
      else
        return elem
    })
    if(Todo){
      setListeToDo([...tmpListeToDo].sort((a,b)=> a.getId - b.getId))
    }
  }
  

  return(
    <div className="mainComponent">
      <FormToDo reciveSubmitForm={reciveSubmitForm}/>
      <div className='displayToDo'>
        {
        listeToDo.length !==0 &&  listeToDo.map((elem : TodoItem) => <ComponentToDo key={elem.getId} element={elem} changeIsDone={changeIsDone} suprToDo={suprToDo} />)
        }
      </div>
    </div>
  )
}
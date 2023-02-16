import {FormEvent,MutableRefObject,useRef} from 'react'
import { TodoItem } from '../Classes/TodoItem'

interface Props{
  reciveSubmitForm:(Todo : TodoItem) => void
}


export const FormToDo = (props:Props) =>{

  const title = useRef() as MutableRefObject<HTMLInputElement>
  const description = useRef() as MutableRefObject<HTMLTextAreaElement>
  const dueDate = useRef() as MutableRefObject<HTMLInputElement>

  const onSubmitHandler = (e : FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    const Todo = new TodoItem(title.current.value,description.current.value,dueDate.current.value.split("-").reverse())
    props.reciveSubmitForm(Todo)
  }

  return(
    <div className="formContainer">
      <h1>TodoForm</h1>
      <hr />
    <form onSubmit={onSubmitHandler} className="displayForm">
      <label htmlFor="inputTitle">Title :</label>
      <input type="text" id="inputTitle" required ref={title}/>
      <label htmlFor="inputDesciption">Description :</label>
      <textarea name="description" id="inputDesciption" required ref={description}></textarea>
      <label htmlFor="inputDueDate">DueDate :</label>
      <input type="date" id="inputDueDate" required ref={dueDate}/>
      <button>Envoyer</button>
    </form>
    </div>
  )
}
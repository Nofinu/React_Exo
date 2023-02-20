import classes from "./Modal.module.css"

export const Modal =(props)=>{

  const closeModalHandler =(e)=>{
    if(e.target === e.currentTarget){
      props.closeModal()
    }
  }
  
  
  return (
    <div className={classes.modal} onClick={closeModalHandler}>
      <div className={classes.modalContent}>
        {props.children}
      </div>
    </div>
  )
}
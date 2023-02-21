import {useRef} from 'react'

const FormInput =(props)=>{

  const nomFormInputRef =useRef()  
  const prenomFormInputRef =useRef()  
  const dateNaissanceFormInputRef =useRef()
  const ageFormInputRef =useRef()  
  const emailFormInputRef =useRef()  
  const telephoneFormInputRef =useRef()  
  const avatarFormInputRef =useRef()  


  const onSubmitHandlerInput=(e)=>{
    console.log("envois")
    e.preventDefault()

    const newContact ={
      nom:nomFormInputRef.current.value,
      prenom : prenomFormInputRef.current.value,
      dateNaissance : dateNaissanceFormInputRef.current.value,
      age : +ageFormInputRef.current.value,
      email : emailFormInputRef.current.value,
      telephone : telephoneFormInputRef.current.value,
      avatar : avatarFormInputRef.current.value
    }

    props.onSubmitModalInput(newContact)
    refresh()
  }


  const refresh=()=>{
    nomFormInputRef.current.value=""
    prenomFormInputRef.current.value=""
    dateNaissanceFormInputRef.current.value=""
    ageFormInputRef.current.value=""
    emailFormInputRef.current.value=""
    telephoneFormInputRef.current.value=""
    avatarFormInputRef.current.value=""
  }

  return(
    <form id='formInput' onSubmit={onSubmitHandlerInput}>
          <div className='headerModal'>
            <h2>Ajout d'un Contact</h2>
            <button onClick={()=>props.closeModal()} className="fa-sharp fa-solid fa-xmark" > </button>
          </div>
          <hr />
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" ref={nomFormInputRef} required/>
          <label htmlFor="prenom">Prenom :</label>
          <input type="text" id="prenom" ref={prenomFormInputRef} required/>
          <label htmlFor="dateNaissance">Date de naisance :</label>
          <input type="date" id="dateNaissance" ref={dateNaissanceFormInputRef} required />
          <label htmlFor="age">Age :</label>
          <input type="number" id="age" ref={ageFormInputRef} required/>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" ref={emailFormInputRef} required/>
          <label htmlFor="telephone">Téléphone :</label>
          <input type="text" id="telephone" ref={telephoneFormInputRef}  required/>
          <label htmlFor="avatar">Avatar :</label>
          <input type="text" id="avatar" ref={avatarFormInputRef}  required/>
          <div className='divSendModal'>
          <button className=' fa-solid fa-paper-plane'></button>
          </div>
        </form>
  )
}

export default FormInput
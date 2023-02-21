import {useRef} from 'react'

const FormModif =(props)=>{

  const nomFormInputRef =useRef()  
  const prenomFormInputRef =useRef()  
  const dateNaissanceFormInputRef =useRef()
  const ageFormInputRef =useRef()  
  const emailFormInputRef =useRef()  
  const telephoneFormInputRef =useRef()  
  const avatarFormInputRef =useRef()  

  const onSubmitHandlerModif=(e)=>{
    e.preventDefault()
    const contact={
      id:props.contactModif.id,
      nom:nomFormInputRef.current.value,
      prenom : prenomFormInputRef.current.value,
      dateNaissance : dateNaissanceFormInputRef.current.value,
      age : +ageFormInputRef.current.value,
      email : emailFormInputRef.current.value,
      telephone : telephoneFormInputRef.current.value,
      avatar : avatarFormInputRef.current.value
    }
    props.modifContact(props.contactModif.id,contact)
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
    <form id='formInput' onSubmit={onSubmitHandlerModif }>
          <div className='headerModal'>
          <h2>Modiffication d'un Contact</h2>
          <button onClick={()=>props.closeModal()} className="fa-sharp fa-solid fa-xmark" > </button>
          </div>
          <hr />
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" ref={nomFormInputRef} defaultValue={props.contactModif.nom} required/>
          <label htmlFor="prenom">Prenom :</label>
          <input type="text" id="prenom" ref={prenomFormInputRef} defaultValue={props.contactModif.prenom} required/>
          <label htmlFor="dateNaissance">Date de naisance :</label>
          <input type="date" id="dateNaissance" ref={dateNaissanceFormInputRef} defaultValue={props.contactModif.dateNaissance} required />
          <label htmlFor="age">Age :</label>
          <input type="number" id="age" ref={ageFormInputRef} defaultValue={props.contactModif.age} required/>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" ref={emailFormInputRef} defaultValue={props.contactModif.email} required/>
          <label htmlFor="telephone">Téléphone :</label>
          <input type="text" id="telephone" ref={telephoneFormInputRef} defaultValue={props.contactModif.telephone} required/>
          <label htmlFor="avatar">Avatar :</label>
          <input type="text" id="avatar" ref={avatarFormInputRef} defaultValue={props.contactModif.avatar} required/>
          <div className='divSendModal'>
            <button className=' fa-solid fa-paper-plane'></button>
          </div>
        </form>
  )
}

export default FormModif
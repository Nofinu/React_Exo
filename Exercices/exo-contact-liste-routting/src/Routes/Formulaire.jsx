import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useRef } from "react"
import { SetModifContactAction, SetNewContactAction, SetSuprContactAction } from "../Component/ContactSlice"


export const Formulaire=()=>{


  const dispatch = useDispatch()
  const { id } = useParams()
  const [SearchParams]=useSearchParams()
  const mode = SearchParams.get('mode')
  const contacts = useSelector(state => state.contactsListe.contacts)
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const navigate = useNavigate()

  let contactFound ={}

  if(id !== "Add"){
    contactFound =contacts.find(contact => contact.id === id)
    if(!contactFound){
      contactFound={}
    }
  }

  const onSubmitHandler=(e)=>{
    e.preventDefault()

    const Ncontact = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value
    }
    if(mode==="Add"){
      dispatch(SetNewContactAction(Ncontact))
    }
    if(mode === "Modif"){
      dispatch(SetModifContactAction({id:id,contact:Ncontact}))
    }
    if(mode === "Supr"){
      dispatch(SetSuprContactAction(id))
    }
    firstNameRef.current.value=""
    lastNameRef.current.value=""
    emailRef.current.value=""
    phoneRef.current.value=""

    navigate('/contacts')
  }


  return(
  <div className="container">
    <form onSubmit={onSubmitHandler}>
      <h2>{mode === "Add"?"Ajouter": mode === "Modif" ? "Modifier" : "Suprimer"}</h2>
      <label htmlFor="firstName">firstName :</label>
      <input type="text" id="firstName" ref={firstNameRef} defaultValue={mode !=="Add"?`${contactFound.firstName}`:""} disabled={mode === "Supr"?true:false}  />

      <label htmlFor="lastName">lastName :</label>
      <input type="text" id="lastName" ref={lastNameRef}  defaultValue={mode !=="Add"?`${contactFound.lastName}`:""} disabled={mode === "Supr"?true:false}  />

      <label htmlFor="email">email :</label>
      <input type="text" id="email" ref={emailRef}  defaultValue={mode !=="Add"?`${contactFound.email}`:""} disabled={mode === "Supr"?true:false}  />

      <label htmlFor="phone">phone :</label>
      <input type="text" id="phone" ref={phoneRef}  defaultValue={mode !=="Add"?`${contactFound.phone}`:""}disabled={mode === "Supr"?true:false} />
      <div className="btnContainer">
        <button className={mode === "Add"?"Add": mode === "Modif" ? "Modif" : "Supr"}>
          {mode === "Add"?"Ajouter": mode === "Modif" ? "Modifier" : "Suprimer"}
        </button>
      </div>
    </form>
  </div>
  )
}
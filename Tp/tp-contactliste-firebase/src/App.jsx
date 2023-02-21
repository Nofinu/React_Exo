import './Style/App.css';
import {createPortal} from "react-dom"
import {useEffect, useRef, useState} from "react"
import { Modal } from './Component/Shared/Modal';
import { API_KEY } from './ApiKey';
import { ContactListe } from './Component/ContactListe';
import './Style/Form.css'
import FormInput from './Component/FormInput';
import FormModif from './Component/FormModif';

const App=()=> {

  //url de la base de donnée
  const URL_DB="https://contactliste-firebaze-default-rtdb.europe-west1.firebasedatabase.app/"

  //creation des Hooks
  const [modalVisibleInput, setModalVisibleInput] = useState(false)
  const [isLogging, setIsLogging] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [contactListe,setContactListe] = useState([])
  const [modalVisibleForm, setModalVisibleForm] = useState(false)
  const [contactModif,setContactModif]=useState({})
  const [ismodif,setIsmodif]=useState(false)
  const [tokenG,setToken]=useState("")

  const emailRef = useRef()
  const passwordRef =useRef()



//fonction de Connection/enregistrement
  const submitFormHandler = async (event) => {
    event.preventDefault()
    let BASE_URL = ""

    if (isLogging) {
      BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

    } else {
      BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
    }
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true
        })
      })
        if(!response.ok) {
          throw new Error("Il y a eu une erreur !")
        } 
        const data = await response.json()
        
        localStorage.setItem('token', data.idToken)
        localStorage.setItem('refreshToken',data.refreshToken)
  
        emailRef.current.value = ""
        passwordRef.current.value = ""
  
        setIsLogged(true)
        setModalVisibleInput(false)
      } catch (error) {
        console.error(error.message);
      }
    }

    // gestion de l'envois envois des info contact
    const onSubmitModalInput= async (contact)=>{
        try{
          const token = localStorage.getItem('token')
          if(token){
            const reponse = await fetch(`${URL_DB}contact.json?auth=${token}`,{
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body : JSON.stringify(contact)
            })
            if(!reponse.ok){
              throw new Error ('oups il a eu une erreure')
            }
            const donnee = await reponse.json()
            setContactListe( [...contactListe,{id:donnee.name,...contact}].sort((a,b)=>a.nom-b.nom))
          }
          setModalVisibleForm(false)
        }
        catch (error){
          console.error(error.message)
        }
      }

    const modifContact= async (id,contactModifie)=>{
      console.log(id)
      const contactCible = contactListe.find(contact=>contact.id === id)
      console.log(contactCible)
      if(contactCible){
        console.log("modifcontact")
        const token=localStorage.getItem('token')
        if(token){
          try{
            
            const reponse = await fetch(`${URL_DB}contact/${id}.json?auth=${token}`,{
              method:"PATCH",
              headers:{
                "Content-Type":"application/json"
              },
              body: JSON.stringify(contactModifie)
            })

            if(!reponse.ok){
              throw new Error('oups il a eu une erreure')
            }
            setContactListe([...contactListe.filter(contact => contact!==contactCible),contactModifie].sort((a,b)=>a.nom-b.nom))
          }
          catch(error){
            console.error(error.message)
          }
        }
        setModalVisibleForm(false)
        setIsmodif(false)
        setContactModif({})
      }
    }

    const SuprContact= async (id)=>{
      // eslint-disable-next-line no-restricted-globals
      if(confirm("etes vous sur ?")){
        const contactCible = contactListe.find(contact=>contact.id === id)
        if(contactCible){
          try{
            const token = localStorage.getItem('token')
            if(token){
              const reponse = await fetch(`${URL_DB}contact/${id}.json?auth=${token}`,{
                method:"DELETE"
              })
              if(!reponse.ok){
                throw new Error('oups il a eu une erreure')
              }
              setContactListe([...contactListe.filter(contact=>contact !== contactCible)].sort((a,b)=>a.nom-b.nom))
            }
          }
          catch(error){
            console.error(error.message)
          }
        }
      }
    }

    const refreshContact= async ()=>{
      try{
        const reponse = await fetch(`${URL_DB}contact.json`)
        if(!reponse.ok){
          throw new Error ('oups il a eu une erreure')
        }
        const donnee = await reponse.json()
        let tmpContactListe=[]
        for(let key in donnee){
          tmpContactListe.push({id:key,...donnee[key]})
        }
        setContactListe(tmpContactListe.sort((a,b)=>a.nom-b.nom))
      }
      catch (error){
        console.error(error.message)
      }
    }

    const refreshToken= async ()=>{
      const refreshToken = localStorage.getItem('refreshToken')
      if(refreshToken){
        console.log(refreshToken)
        try{
          const URL = `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`
          const reponse = await fetch(URL,{
            method:"POST",
            headers:{
              "Content-Type":"application/x-www-form-urlencoded"
            },
            body:`grant_type=refresh_token&refresh_token=${refreshToken}`
          })
          if(!reponse.ok){
            throw new Error('oups il a eu une erreure')
          }

          const data = await reponse.json()
          localStorage.setItem('token',data.id_token)
          setToken(data.id_token)
          localStorage.setItem('refresh_token',data.refresh_token)
        }
        catch(error){
          console.error(error.message)
        }
      }
    }


// fonction de gestion du modal Login
  const closeModal =()=>{
    setModalVisibleInput(false)
    setModalVisibleForm(false)
  }

  const openModalLogin=(e)=>{
    setModalVisibleInput(true)
    if(e.target.innerText === "Connection"){
      setIsLogging(true)
    }
    else{
      setIsLogging(false)
    }
  }

  // fonction de gestion du modal AjoutContact

  const openModalForm=()=>{
    setModalVisibleForm(true)
  }
  const openModalFormModif=(id)=>{
    console.log(id)
    setModalVisibleForm(true)
    setIsmodif(true)
    setContactModif(contactListe.find(contact=>contact.id === id))
  }

  const deconection=()=>{
    localStorage.setItem('token', "")
    setIsLogged(false)
  }

  //useEffect
  useEffect(()=>{
    let montimer =undefined
    refreshContact()
    if(isLogged){
      montimer = setTimeout(()=>{
        refreshToken()
      },600000)
    }
    return()=>{
      if(montimer){
        clearTimeout(montimer)
        montimer=undefined
      }
    }
  },[tokenG,isLogged])


  return (
    <>
    {
      modalVisibleInput && createPortal(<Modal closeModal={closeModal}>
        <div id="headerModal">
          <h2>{isLogging? "Connection":"Enregistrement"}</h2>
          <button className="fa-sharp fa-solid fa-xmark" onClick={closeModal}></button>
        </div>
        <form id="formModalInput" onSubmit={submitFormHandler}>
          <label htmlFor="EmailInput">Email :</label>
          <input type="email"  id="EmailInput" ref={emailRef}/>
          <label htmlFor="PaswordInput">Mot de Passe :</label>
          <input type="password" id="PaswordInput" ref={passwordRef}/>
          <div id="divbtnModalLogin">
            <button>{isLogging? "Connection":"Enregistrement"}</button>
          </div>
        </form>
      </Modal>,document.getElementById("modal-root"))
    }
    {
      modalVisibleForm && createPortal(<Modal closeModal={closeModal}>
        {
          ismodif ? <FormModif closeModal={closeModal} modifContact={modifContact} contactModif={contactModif} />:<FormInput closeModal={closeModal} onSubmitModalInput={onSubmitModalInput}/>
        }
        
      </Modal>,document.getElementById("modal-root"))
    }
    <div className="App">
      <header className="App-header">
        <span>Liste de contacts</span>
        <div>
          {
            isLogged ? <button onClick={deconection}>Deconection</button> :<><button onClick={openModalLogin}>Connection</button><button onClick={openModalLogin}>Enregistrer</button></>
          }
          
          
        </div>
      </header>
      {
        isLogged && <ContactListe SuprContact={SuprContact} openModalForm={openModalForm} openModalFormModif={openModalFormModif} contactListe={contactListe}/>
      }
    </div>
    </>
  );
}

export default App;


// .sort((a,b)=>a.nom-b.nom)
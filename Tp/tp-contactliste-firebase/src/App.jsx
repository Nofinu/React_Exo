import './App.css';
import {createPortal} from "react-dom"
import {useRef, useState} from "react"
import { Modal } from './Component/Shared/Modal';
import { API_KEY } from './ApiKey';
import { ContactListe } from './Component/ContactListe';

const App=()=> {

  //creation des Hooks
  const [modalVisible, setModalVisible] = useState(false)
  const [isLogging, setIsLogging] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [contactListe,setContactListe] = useState([])

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
  
        emailRef.current.value = ""
        passwordRef.current.value = ""
  
        setIsLogged(true)
        setModalVisible(false)
      } catch (error) {
        console.error(error.message);
      }
    }


// fonction de gestion du modal
  const closeModal =()=>{
    setModalVisible(false)
  }

  const openModalLogin=(e)=>{
    setModalVisible(true)
    if(e.target.innerText === "Connection"){
      setIsLogging(true)
    }
    else{
      setIsLogging(false)
    }
  }



  return (
    <>
    {
      modalVisible && createPortal(<Modal closeModal={closeModal}>
        <div id="headerModal">
          <h2>{isLogging? "Connection":"Enregistrement"}</h2>
          <button onClick={closeModal}>&times;</button>
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
    <div className="App">
      <header className="App-header">
        <span>Liste de contacts</span>
        <div>
          <button onClick={openModalLogin}>Connection</button>
          <button onClick={openModalLogin}>Enregistrer</button>
        </div>
      </header>
      {
        isLogged && <ContactListe contactListe={contactListe}/>
      }
    </div>
    </>
  );
}

export default App;

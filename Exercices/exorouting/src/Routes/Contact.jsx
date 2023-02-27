import { useRef } from "react"

export const Contact=()=>{

  const emailRef=useRef()
  const messageRef=useRef()
  const subjectRef= useRef()

  const onSubmitHandler=(e)=>{
    e.preventDefault()
    console.log("Email: ",emailRef.current.value)
    console.log("sujet: ",subjectRef.current.value)
    console.log("message: ",messageRef.current.value)
  }

  return(
    <div className="container">
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="inputEmail">Email :</label>
        <input ref={emailRef} id="inputEmail" type="text" required />
        <label htmlFor="subject">Subject :</label>
        <select ref={subjectRef} name="subject" id="subject" required>
          <option value="">Select a subject</option>
          <option value="Contact">Contact</option>
          <option value="Issue">Issue</option>
          <option value="Bill">Bill</option>
          <option value="Others">Others</option>
        </select>
        <label htmlFor="message">Message :</label>
        <textarea ref={messageRef} name="message" id="message" cols="30" rows="10" required></textarea>
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  )
}


export const ContactItem =(props)=>{
  return(
    <div className="contactItem">
      <div className="headerContactItem">
        <div>{props.contact.firstName} {props.contact.lastName}</div>
        <div>
          <button>edit</button>
          <button>supr</button>
        </div>
      </div>
      <hr />
      <ul>
        <li><b>email :</b> {props.contact.email}</li>
        <li><b>phone number :</b> {props.contact.phone}</li>
      </ul>

    </div>
  )
}
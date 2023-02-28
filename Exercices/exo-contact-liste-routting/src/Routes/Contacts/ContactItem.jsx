import { Link } from "react-router-dom"

export const ContactItem =(props)=>{
  return(
    <div className="contactItem">
      <div className="headerContactItem">
        <div>{props.contact.firstName} {props.contact.lastName}</div>
        <div>
        <Link className="Link Modif" to={`/contacts/${props.contact.id}?mode=Modif`}>Edit</Link>
        <Link className="Link Supr"  to={`/contacts/${props.contact.id}?mode=Supr`}>Supr</Link>
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


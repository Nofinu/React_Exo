import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ContactItem } from "./ContactItem"


export const ContactPage=()=>{

  const contacts = useSelector(state => state.contactsListe.contacts)

  return(
    <div className="container">
      <div className="headerContactPage">
        <h2>Contact List</h2>
        <div>
          <Link to="/contacts/Add?mode=Add">Add</Link>
        </div>
      </div>
      <hr />
      {
      contacts && contacts.map(contact=><ContactItem key={contact.id} contact={contact}/>)
      }
    </div>
  )
}
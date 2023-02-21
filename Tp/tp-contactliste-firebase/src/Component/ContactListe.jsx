import { ConstactItem } from "./Contactitem"
import '../Style/Contact.css'


export const ContactListe=(props)=>{
  return(
    <div id="contactContainer">
      <div id="headerContactListe">
      <h1>Contacts</h1>
      <button onClick={props.openModalForm} className="fa-solid fa-user-plus" ></button>
      </div>
      <hr />
      {props.contactListe.length > 0&& props.contactListe.map(elem => <ConstactItem SuprContact={props.SuprContact} openModalFormModif={props.openModalFormModif} key={elem.id} contact={elem}/>)}
    </div>
  )
}
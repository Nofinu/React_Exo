
export const ConstactItem = (props)=>{
  return(
    <div className="divContact">
      <div className="containerContact"> 
        <img src={props.contact.avatar} alt="profilPic" />
        <div className="trait"></div>
        <ul>
          <li>{props.contact.nom}</li>
          <li>{props.contact.prenom}</li>
          <li>{props.contact.dateNaissance}</li>
          <li>{props.contact.age}</li>
          <li>{props.contact.email}</li>
          <li>{props.contact.telephone}</li>
        </ul>
      </div>
        <div>
          <button onClick={()=>props.openModalFormModif(props.contact.id)} className="fa-solid fa-pen-to-square"></button>
          <button onClick={()=>props.SuprContact(props.contact.id)} className="fa-solid fa-trash"></button>
        </div>
    </div>

  )
}


export function UserCard (props){

  const onclick = ()=>{
    props.changeStatus(props.contact.id-1)
  }
  return(
    <>
    <div className="container">
      <div className={props.contact.status?"blue":"red"}></div>
      <div className="infoContainer">
        <h4><b>{props.contact.firstName} {props.contact.lastName}</b></h4>
        <p><b>Telephone number : </b>{props.contact.phone}</p>
        <p><b>city : </b>{props.contact.address.city}</p>
        <p><b>Street : </b>{props.contact.address.street}</p>
        <p><b>postCode : </b>{props.contact.address.postCode}</p>
        <button className={props.contact.status?"redBtn":"blueBtn"} onClick={onclick}>{props.contact.status?"set idle":"set active"} </button>
      </div>
    </div>
    </>
  )
}
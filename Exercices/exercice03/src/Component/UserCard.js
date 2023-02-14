

export function UserCard (props){

  return(
    <>
    <table className={props.contact.status?"blue":"red"}>
      <tbody>
        <tr>
          <td>First name :{props.contact.firstName}</td><td>Last Name :{props.contact.lastName}</td><td>Telephone number : {props.contact.phone}</td>
        </tr>
        <tr><td>city : {props.contact.address.city}</td><td>Street : {props.contact.address.street}</td><td>postCode : {props.contact.address.postCode}</td></tr>
      </tbody>
    </table>
    </>
  )
}
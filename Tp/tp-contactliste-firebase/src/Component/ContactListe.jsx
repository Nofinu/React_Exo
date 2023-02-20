

export const ContactListe=(props)=>{

  return(
    <table>
      <tbody>
      {props.contactListe.length === 0? <tr><td><button>Ajouter un contact</button></td></tr>:"des contact"}
      </tbody>
    </table>
  )
}
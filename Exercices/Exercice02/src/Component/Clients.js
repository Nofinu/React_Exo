// import {Component} from "react"
import { Adresse } from "./Adresse.js"


// export class Clients extends Component{
//   constructor(props){
//     super(props)
//     this.state = {}
//   }

//   render(){
//     const {nom,prenom,telephone,statut,adresse} = this.props.client
//     return(
//     <table className="tableContact">
//       <tbody>
//         <tr className={statut? "" : "red"}><td>nom : </td><td>{nom}</td><td>prenom : </td><td>{prenom}</td><td>telephone :</td><td>{telephone}</td>{statut? <td>Actif</td> : <td>Inactif</td>}</tr>
//         <Adresse adresse={adresse} statut={statut}></Adresse>
//       </tbody>
//   </table>
//     )
//   }
// }

export function Clients (props){
  const {nom,prenom,telephone,statut,adresse} = props.client
  return(
  <table className="tableContact">
    <tbody>
      <tr className={statut? "" : "red"}><td>nom : </td><td>{nom}</td><td>prenom : </td><td>{prenom}</td><td>telephone :</td><td>{telephone}</td>{statut? <td>Actif</td> : <td>Inactif</td>}</tr>
      <Adresse adresse={adresse} statut={statut} changeStatut={props.changeStatut} cle={props.cle}></Adresse>
    </tbody>
</table>
  )
}
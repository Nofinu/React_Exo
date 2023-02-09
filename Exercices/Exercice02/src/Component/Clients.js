import {Component} from "react"
import { Adresse } from "./Adresse.js"


export class Clients extends Component{
  constructor(props){
    super()
    this.state = {}
  }

  render(){
    const {nom,prenom,telephone,statut,adresse} = this.props.client
    return(
    <table className="tableContact">
      <tbody>
        <tr className={statut? "" : "red"}><td>nom : </td><td>{nom}</td><td>prenom : </td><td>{prenom}</td><td>telephone :</td><td>{telephone}</td>{statut? "" : <td>Inactif</td>}</tr>
        <Adresse adresse={adresse} statut={statut}></Adresse>
      </tbody>
  </table>
    )
  }
}


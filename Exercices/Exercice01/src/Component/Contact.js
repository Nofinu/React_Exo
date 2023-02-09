import {Component} from "react"
import { Adresse } from "./Adresse.js"


export class Contact extends Component{
  constructor(props){
    super()
    this.state = {nom : props.nom, prenom : props.prenom, telephone : props.telephone, adresse :{rue : props.rue, ville : props.ville, codePostal : props.codePostal}}
  }

  render(){
    return(
    <table className="tableContact">
      <tbody>
        <tr><td>nom : </td><td>{this.state.nom}</td><td>prenom : </td><td>{this.state.prenom}</td><td>telephone :</td><td>{this.state.telephone}</td></tr>
        <Adresse adresse={this.state.adresse}></Adresse>
      </tbody>
  </table>
    )
  }
}


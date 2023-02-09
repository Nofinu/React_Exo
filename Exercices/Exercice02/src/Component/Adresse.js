import {Component} from "react"

export class Adresse extends Component{
  constructor({props}){
    super(props)
    // this.state = {rue : props.rue, ville : props.ville, codePostal : props.codePostal}
  }

  clickAdresse=()=>{
    this.props.changeStatut(this.props.cle)

  }

  render(){
    const {rue,ville,codePostal} = this.props.adresse;
    const statut = this.props.statut
    return(
        <>
        <tr className={statut? "" :"red"}><td>rue : </td><td>{rue}</td><td>ville :</td><td> {ville}</td><td>code postal :</td><td>{codePostal}</td><td><button onClick={this.clickAdresse}>Statut</button></td></tr> 
        </>
    )
  }
}

// export function Adresse (props){
//   const {rue,ville,codePostal} = props.adresse;
//   const statut = props.statut
//   return(
//     <>
//     <tr className={statut? "" :"red"}><td>rue : </td><td>{rue}</td><td>ville :</td><td> {ville}</td><td>code postal :</td><td>{codePostal}</td><td><button onClick={props.changeStatut()}>Statut</button></td></tr> 
//     </>
//   )
// }
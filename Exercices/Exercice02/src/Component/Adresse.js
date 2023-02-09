// import {Component} from "react"

// export class Adresse extends Component{
//   constructor({props}){
//     super(props)
//     // this.state = {rue : props.rue, ville : props.ville, codePostal : props.codePostal}
//   }

//   render(){
//     const {rue,ville,codePostal} = this.props.adresse;
//     return(

//     )
//   }
// }

export function Adresse (props){
  const {rue,ville,codePostal} = props.adresse;
  const couleur = props.couleur
  return(
    <>
    <tr className={couleur}><td>rue : </td><td>{rue}</td><td>ville :</td><td> {ville}</td><td>code postal :</td><td>{codePostal}</td></tr> 
    </>
  )
}
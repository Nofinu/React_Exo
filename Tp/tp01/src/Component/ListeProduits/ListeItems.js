import { Component } from "react";

export class ListeItems extends Component{
    constructor (props){
        super(props)
    }

    onclick=()=>{
        this.props.ajouterArticle(this.props.index)
    }
    
    render (){
        const {titre,description,prix} = this.props.item
        return(
            <div>
                <h1>{titre}</h1>
                <p>{description}</p>
                <h2>{prix}</h2>
                <button onClick={this.onclick}>Ajouter</button>
            </div>
        )
    }
}



// export function ListeItems (props){
//     onclick=()=>{
//         props.ajouterArticle(props.index)
//     }
//     const {titre,description,prix} = props.item
//     return(
//         <div>
//             <h1>{titre}</h1>
//             <p>{description}</p>
//             <h2>{prix}</h2>
//             <button onClick={onclick}>Ajouter</button>
//         </div>
//     )
// }
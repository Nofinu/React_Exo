import { Component } from "react";

export class DisplayPanier extends Component{
    constructor(props){
        super(props)
    }

    clickButton=()=>{
        this.props.openModal()
    }

    render(){
        const nbrArticle =this.props.nbrArticle
        const prix = this.props.totalprix
        return(
            <>
            <p>vous avez {nbrArticle} article dans votre panier</p>
            <p>Pour un total de {prix}€</p>
            <button onClick={this.clickButton}>Afficher le panier</button>
            </>
        )
    }
}
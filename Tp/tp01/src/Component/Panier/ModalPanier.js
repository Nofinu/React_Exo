import { Component } from "react";
import { DisplayPanier } from "./DisplayPanier";
import { PanierItems } from "./PanierItems";


export class ModalPanier extends Component{
    constructor(props){
        super(props)
    }

    modalClick=()=>{
        this.props.closeModal()
    }

    render(){
        const nbrArticle =this.props.nbrArticle
        const prix = this.props.totalprix
        return(
            <div className="modalContainer">
                <button className="modalBtn" onClick={this.modalClick}>&times;</button>
                <div>
                    {this.props.items.map((article,index)=><PanierItems key={index} article={article} index={index} supprimerAllArticle={this.props.supprimerAllArticle} supprimerUnArticle={this.props.supprimerUnArticle}></PanierItems>)}
                </div>
                <div className="panierModal">
                <p className="affichageText">vous avez {nbrArticle} article dans votre panier</p>
                <p className="affichageText">Pour un total de {prix}€</p>
                </div>
            </div>
        )
    }
}
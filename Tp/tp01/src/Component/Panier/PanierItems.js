import { Component } from "react";


export class PanierItems extends Component{
    constructor(props){
        super(props)
    }

    clickSuprOne=()=>{
        this.props.supprimerUnArticle(this.props.index)
    }

    clickSuprAll=()=>{
        this.props.supprimerAllArticle(this.props.index)
    }

    render(){
        const{titre,description,prix,quantite}=this.props.article
        return(
            <div className={quantite? "":"off"}>
                <h1>{titre}</h1>
                <p>{description}</p>
                <p>prix : {prix*quantite}</p>
                <p>Quantité : {quantite}</p>
                <button onClick={this.clickSuprOne}>Suprimer un article</button>
                <button onClick={this.clickSuprAll}>Tout supprimer</button>
            </div>
        )
    }
    }
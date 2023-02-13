import { Component } from "react";
import { ListeItems } from "./ListeProduits/ListeItems";
import { DisplayPanier } from "./Panier/DisplayPanier";
import { ModalPanier } from "./Panier/ModalPanier";

export class GlobalContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            totalPrix : 0,
            items : [{
                id: "0000001",
                titre : "Article1",
                description : "La descirption de l'article n°1",
                prix : 35,
                //quantite:0
            },{
                id: "0000002",
                titre : "Article2",
                description : "La descirption de l'article n°2",
                prix : 18,
                //quantite:0
            },{
                id: "0000003",
                titre : "Article3",
                description : "La descirption de l'article n°3",
                prix : 55,
                //quantite:0
            },
        ],
        panier:[],
        statutModal : false
        }
    }

    refreshTotalPrix=()=>{
        let tmpStateprix = {...this.state}
        tmpStateprix.totalPrix = 0
        tmpStateprix.panier.forEach(article =>{
            tmpStateprix.totalPrix+= article.quantite*article.prix
        })
        this.setState({...tmpStateprix})
    }

    ajouterArticle=(id)=>{
        let tmpState = {...this.state}
        let test = false
        tmpState.panier.forEach(article =>{
            if(id ===article.id){
                article.quantite++
                test = true
            }
        })
        if(!test){
            tmpState.items.forEach(item =>{
                if(id === item.id){
                    tmpState.panier.push({...item,quantite : 1})
                }
            })  
        }
        this.setState({...tmpState})
        this.refreshTotalPrix()
        
    }

    supprimerUnArticle=(id)=>{
        let tmpState = {...this.state}
        tmpState.panier.forEach(article =>{
            if(id === article.id){
                article.quantite--
                if(article.quantite === 0){
                    tmpState.panier.splice(tmpState.panier.indexOf(article),1)
                }
            }
        })
        this.setState({...tmpState})

        this.refreshTotalPrix()
    }

    supprimerAllArticle=(id)=>{
        let tmpState = {...this.state}
        tmpState.panier.forEach(article =>{
            if(id === article.id){
                tmpState.panier.splice(tmpState.panier.indexOf(article),1)
            }
        })
        this.setState({...tmpState})

        this.refreshTotalPrix()
    }

    gestionModal=()=>{
        // let tmpState = {...this.state}
        // tmpState.statutModal = !tmpState.statutModal
        // this.setState({...tmpState})
        this.setState((state)=>({statutModal : !state.statutModal}))
    }

    // closeModal=()=>{
    //     let tmpState = {...this.state}
    //     tmpState.statutModal = false
    //     this.setState({...tmpState})
    // }


    render(){  
        let nbrArticle =0
        this.state.panier.forEach(article=>{
            nbrArticle+= article.quantite
        })
        return (
            <div className="globalContainer">
                <div className="listeContainer">
                    {this.state.items.map((item,index)=><ListeItems key={index} item={item} ajouterArticle={this.ajouterArticle}></ListeItems>)}
                </div>
                <div className="panierContainer">
                    <DisplayPanier nbrArticle={nbrArticle} totalprix={this.state.totalPrix} gestionModal={this.gestionModal}></DisplayPanier>
                </div>
                <div className={this.state.statutModal?"on":"off"}>
                    <ModalPanier panier={this.state.panier} gestionModal={this.gestionModal} supprimerUnArticle={this.supprimerUnArticle} supprimerAllArticle={this.supprimerAllArticle} nbrArticle={nbrArticle} totalprix={this.state.totalPrix}></ModalPanier>
                </div>
            </div>
            )
    }
}
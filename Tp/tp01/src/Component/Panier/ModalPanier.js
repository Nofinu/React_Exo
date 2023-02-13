import { PanierItems } from "./PanierItems";

export function ModalPanier (props){
    const modalClick=()=>{
        props.gestionModal()
    }

        const nbrArticle =props.nbrArticle
        const prix = props.totalprix
        return(
            <div className="modalContainer">
                <button className="modalBtn" onClick={modalClick}>&times;</button>
                <div>
                    {props.items.map((article,index)=><PanierItems key={index} article={article} supprimerAllArticle={props.supprimerAllArticle} supprimerUnArticle={props.supprimerUnArticle}></PanierItems>)}
                </div>
                <div className="panierModal">
                <p className="affichageText">vous avez {nbrArticle} article dans votre panier</p>
                <p className="affichageText">Pour un total de {prix}€</p>
                </div>
            </div>
        )
}


import classes from "./displaypanier.module.css"

export function DisplayPanier (props){
    const clickButton=()=>{
        props.gestionModal()
    }


        const nbrArticle =props.nbrArticle
        const prix = props.totalprix
        const tag = "fa-sharp fa-solid fa-cart-shopping " + classes.btnAffichagePanier
        return(
            <>
            <p>vous avez {nbrArticle} article(s) dans votre panier</p>
            <p>Pour un total de {prix}€</p>
            <button className={tag} onClick={clickButton}></button>
            </>
        )
    }


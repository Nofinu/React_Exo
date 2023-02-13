
export function DisplayPanier (props){
    const clickButton=()=>{
        props.gestionModal()
    }


        const nbrArticle =props.nbrArticle
        const prix = props.totalprix
        return(
            <>
            <p>vous avez {nbrArticle} article(s) dans votre panier</p>
            <p>Pour un total de {prix}€</p>
            <button className="btnAffichagePanier" onClick={clickButton}>Afficher le panier</button>
            </>
        )
    }


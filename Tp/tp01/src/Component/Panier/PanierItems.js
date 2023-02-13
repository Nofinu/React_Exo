
export function PanierItems (props){
    const clickSuprOne=()=>{
        props.supprimerUnArticle(props.article.id)
    }

    const clickSuprAll=()=>{
        props.supprimerAllArticle(props.article.id)
    }
    const{titre,description,prix,quantite}=props.article
    return(
        <div className={quantite? "":"off"}>
            <h1>{titre}</h1>
            <p>{description}</p>
            <p>prix : {prix*quantite}</p>
            <p>Quantité : {quantite}</p>
            <button onClick={clickSuprOne}>Suprimer un article</button>
            <button onClick={clickSuprAll}>Tout supprimer</button>
        </div>
    )
}
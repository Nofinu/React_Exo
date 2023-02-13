
export function ListeItems (props){
    const onclick=()=>{
        props.ajouterArticle(props.item.id)
    }
    const {titre,description,prix} = props.item
    return(
        <div>
            <h1>{titre}</h1>
            <p>{description}</p>
            <h2>{prix}€</h2>
            <button onClick={onclick}>Ajouter</button>
        </div>
    )
}
import classes from "./listeitems.module.css"


export function ListeItems (props){
    const onClickBtn=()=>{
        props.ajouterArticle(props.item.id)
    }
    const onClickDiv=()=>{
        props.gestionModalItemOpen(props.item.id)
    }

    const {titre,description,prix} = props.item
    const cart = "fa-sharp fa-solid fa-cart-plus "+ classes.btnListeItem
    return(
        <div className={classes.divListeItem}>
            <table className={classes.tableListeItem}>
                <tbody onClick={onClickDiv}>
                    <tr>
                        <td >
                            <h2 className={classes.centerText}>{titre}</h2>
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.centerText}>
                            {description}
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.centerText}>
                            <h3>{prix}€</h3>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <button className={cart} onClick={onClickBtn}></button>
                        </td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}
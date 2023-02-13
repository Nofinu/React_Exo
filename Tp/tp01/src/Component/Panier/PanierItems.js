import classes from "./panieritems.module.css"

export function PanierItems (props){
    const clickSuprOne=()=>{
        props.supprimerUnArticle(props.article.id)
    }

    const clickSuprAll=()=>{
        props.supprimerAllArticle(props.article.id)
    }
    const{titre,description,prix,quantite}=props.article
    const tagTable = classes.tableItemPanier +` ${quantite? "":"off"}`
    const tagBtnSuprOne = classes.btnSuprOne +` fa-sharp fa-solid fa-minus`
    const tagBtnSuprAll = classes.btnSuprAll +` fa-sharp fa-solid fa-xmark`
    return(
        <table className={tagTable}>
            <tbody>
                <tr><td colSpan="2" className={classes.textTitle}>{titre}</td></tr>
                <tr><td colSpan="2">{description}</td></tr>
                <tr><td colSpan="2">prix : {prix*quantite}</td></tr>
                <tr><td colSpan="2">Quantité : {quantite}</td></tr>
            </tbody>
            <tfoot>
                <tr><td>
                        Supr One  <button className={tagBtnSuprOne} onClick={clickSuprOne}></button>
                    </td>
                    <td>
                        Supr All  <button className={tagBtnSuprAll} onClick={clickSuprAll}></button>
                    </td>
                </tr>
            </tfoot>
            
        </table>
    )
}
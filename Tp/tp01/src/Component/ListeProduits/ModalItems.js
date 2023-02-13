import { Component } from "react";
import classes from "./listeitems.module.css"


export class ModalItems extends Component{
  constructor(props){
    super(props)
    this.state = {valueInput:0}
  }

  onClickBtnClose = ()=>{
    this.props.gestionModalItemClose()
  }
  onClickBtnAddOne = ()=>{
    this.props.ajouterArticle(this.props.id)
  }
  onClickBtnAddMultiple = ()=>{
    this.props.ajouterArticle(this.props.id,this.state.valueInput)
  }
  onChangeInput = (e)=>{
    const tmpState = {...this.state}
    if(e.target.value>0){
      tmpState.valueInput = Number(e.target.value)
    }
    this.setState({...tmpState})
  }

  render(){
    const tmpTab =[]
    this.props.items.forEach(item => {
    if(item.id === this.props.id){
      const {description,prix,titre} = {...item}
      tmpTab.push(description)
      tmpTab.push(prix)
      tmpTab.push(titre)
    }
  });

  const [description,prix,titre]=[...tmpTab]
  const cart = "fa-sharp fa-solid fa-cart-plus "+ classes.btnListeItem
  const cartMultiple = "fa-sharp fa-solid fa-cart-flatbed-suitcase "+ classes.btnListeItem

    return(
      <div className="modalContainer">
        <button className="modalBtn" onClick={this.onClickBtnClose}>&times;</button>
        <table className="tableModalItems">
            <tbody>
                <tr><td colSpan="2" >{titre}</td></tr>
                <tr><td colSpan="2">{description}</td></tr>
                <tr><td colSpan="2">prix : {prix}</td></tr>
            </tbody>
            <tfoot>
                <tr><td>
                        <button className={cart} onClick={this.onClickBtnAddOne}>+1</button>
                    </td>
                    <td>
                        <input className={classes.inputModal} min="0" type={"number"} id="inputAddMultiple" onChange={this.onChangeInput}></input> <button className={cartMultiple} onClick={this.onClickBtnAddMultiple}></button>
                    </td>
                </tr>
            </tfoot>
            
        </table>
      </div>
    )
  }
}



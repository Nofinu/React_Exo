interface Props {
  onClickPlusHandler: ()=>void;
  onClickMinusHandler:()=>void;
  minusBtnClasse?:string;
}

export const ButtonContainer = (props:Props) =>{

  return(
    <div className="btnContainer">
      <button className={props.minusBtnClasse} onClick={props.onClickMinusHandler}>-</button>
      <button className="btnActivate" onClick={props.onClickPlusHandler}>+</button>
    </div>
  )
}


export const ButtonContainer =(props)=>{

  const onClickPlay=()=>{
    props.changeStatutPlay()
  }

  const onClickPause=()=>{
    props.changeStatutPause()
  }

  const onClickReset=()=>{
    props.changeResetStatut()
  }
  return(
    <div className="buttonContainer">
      <button className="fa-sharp fa-solid fa-play btnPlay" onClick={onClickPlay}></button>
      <button className="fa-sharp fa-solid fa-pause btnPause" onClick={onClickPause}></button>
      <button className="fa-sharp fa-solid fa-arrows-rotate btnReset" onClick={onClickReset}></button>
    </div>
  )
}

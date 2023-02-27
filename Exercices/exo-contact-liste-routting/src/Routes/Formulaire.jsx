import { useParams, useSearchParams } from "react-router-dom"


export const Formulaire=()=>{

  const { id } = useParams()
  const [SearchParams]=useSearchParams()
  const mode = SearchParams.get('mode')


  return(
  <div className="container">
    <form >
      <h2>{mode}</h2>
      <label htmlFor="firstName">firstName :</label>
      <input type="text" id="firstName" />

      <label htmlFor="lastName">lastName :</label>
      <input type="text" id="lastName" />

      <label htmlFor="email">email :</label>
      <input type="text" id="email" />

      <label htmlFor="phone">phone :</label>
      <input type="text" id="phone" />
    </form>
  </div>
  )
}
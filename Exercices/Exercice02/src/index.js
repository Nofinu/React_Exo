import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Clients } from './Component/Clients';
import './style/index.css';
import './style/component.css';
import reportWebVitals from './reportWebVitals';
import { Liste } from './Component/Liste';

// const listeClients = [{nom:"nom1",prenom:"prenom1",telephone:"telephone1",statut:true,adresse:{rue:"laRue",ville:"laVille",codePostal:"01234"}},{nom:"nom2",prenom:"prenom2",telephone:"telephone2",statut:false,adresse:{rue:"laRue",ville:"laVille",codePostal:"01234"}},{nom:"nom3",prenom:"prenom3",telephone:"telephone3",statut:true,adresse:{rue:"laRue",ville:"laVille",codePostal:"01234"}}]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Liste></Liste>
    /* {listeClients.map((client,index)=><Clients client={client} key={index}></Clients>)} */

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

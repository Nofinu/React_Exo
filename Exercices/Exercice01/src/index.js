import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Contact } from './Component/Contact.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Contact nom={"lhomme"} prenom={"leo"} telephone={"01020304"} rue={"rue du machin"} ville={"uneVille"} codePostal={"59000"}></Contact>
      <Contact nom={"nom1"} prenom={"prenom2"} telephone={"01020304"} rue={"rue du machin"} ville={"uneVille"} codePostal={"59000"}></Contact>
      <Contact nom={"nom2"} prenom={"prenom3"} telephone={"01020304"} rue={"rue du machin"} ville={"uneVille"} codePostal={"59000"}></Contact>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

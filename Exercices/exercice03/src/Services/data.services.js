import axios from 'axios'

const urlapi ="http://localhost:8080/clients";

export const getInfoContactApi = () =>{
  return axios.get(urlapi);
}

export const postContact = (contact)=>{
  return axios.post(urlapi,{...contact})
}
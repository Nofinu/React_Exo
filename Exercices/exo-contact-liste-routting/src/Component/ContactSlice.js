import { createSlice } from "@reduxjs/toolkit";
let compteur = 0

const geneId =()=>{
  var id = compteur+Math.random().toString(16).slice(2)
  compteur++
  return id
}


const ContactSlice = createSlice({
  name:"ContactListe",
  initialState:{
    contacts:[
      {
        id:"92456aec4494e8",
        firstName:"John",
        lastName:"Smith",
        email:"johnSmith@example.com",
        phone:"0123456789"
      },
      {
        id:"4276e343ad255",
        firstName:"paul",
        lastName:"Smith",
        email:"johnSmith@example.com",
        phone:"0123456789"
      },
      {
        id:"6a848ded060e3",
        firstName:"robet",
        lastName:"Smith",
        email:"johnSmith@example.com",
        phone:"0123456789"
      },
      {
        id:"c564cbe8e8acb",
        firstName:"tituan",
        lastName:"Smith",
        email:"johnSmith@example.com",
        phone:"0123456789"
      }
    ]
  },
  reducers:{
    SetNewContactAction(state,actions){
      state.contacts.push({...actions.payload,id:geneId()})
      state.contacts = [...state.contacts.sort((a,b)=>a.firstName.localeCompare(b.firstName))] 
    },
    SetSuprContactAction(state,actions){
      const contactFound =state.contacts.find(contact => contact.id === actions.payload)
      state.contacts = [...state.contacts.filter(contact => contact !== contactFound)].sort((a,b)=>a.firstName.localeCompare(b.firstName))
    },
    SetModifContactAction(state,actions){
      const contactFound = state.contacts.find(contact => contact.id === actions.payload.id)
      state.contacts = [...state.contacts.filter(contact => contact !== contactFound),{...actions.payload.contact,id:actions.payload.id}].sort((a,b)=>a.firstName.localeCompare(b.firstName))
    }
  }
})
export const {SetNewContactAction, SetSuprContactAction, SetModifContactAction} = ContactSlice.actions

export default ContactSlice.reducer
import { createSlice } from "@reduxjs/toolkit";



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
      },
      {
        id:"4276e343ad255",
        firstName:"paul",
        lastName:"Smith",
        email:"johnSmith@example.com",
        phone:"0123456789"
      },
    ]
  },
  reducers:{

  }

})

export default ContactSlice.reducer
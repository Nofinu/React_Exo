import { configureStore } from "@reduxjs/toolkit";
import ContactSlice from "./Component/ContactSlice";


const store = configureStore({
  reducer:{
    contactsListe:ContactSlice,
  }
})

export default store
import './App.css';
import { NavLink, Outlet } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [stateNav,setStateNAv]=useState("")

  return (
    <div className="App">
      <header className="App-header">
      <nav>
          <h2>eWebsite</h2>
          <NavLink className={stateNav === "" ? "navlinkon":"navlinkoff"} to="/" onClick={()=>setStateNAv("")}>Home</NavLink>
          <NavLink className={stateNav === "contacts" ? "navlinkon":"navlinkoff"} to="/contacts" onClick={()=>setStateNAv("contacts")}>Contacts </NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;

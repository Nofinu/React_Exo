import './App.css';
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [stateNav,setStateNAv]=useState("")

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <h2>eWebsite</h2>
          <NavLink className={stateNav === "" ? "navlinkon":"navlinkoff"} to="/" onClick={()=>setStateNAv("")}>Home</NavLink>
          <NavLink className={stateNav === "projects" ? "navlinkon":"navlinkoff"} to="/projects" onClick={()=>setStateNAv("projects")}>My projects </NavLink>
          <NavLink className={stateNav === "about" ? "navlinkon":"navlinkoff"} to="/about" onClick={()=>setStateNAv("about")}>About</NavLink>
          <NavLink className={stateNav === "contact" ? "navlinkon":"navlinkoff"} to="/contact" onClick={()=>setStateNAv("contact")}>Contact Me</NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import Theme from './Theme'
// import { darkMode, theme } from "../App";

export let theme =''

export function darkMode(mode){
      // document.body.classList.toggle("darkMode")
      if(mode === 'darkMode'){
        mode = ''
      }else{
        mode = 'darkMode'
      }
  }

function NavBar(){
    return(
        <div className="navBar">
            <h1>Kenneth Schaefer</h1>
            <nav>
                <Theme />
                <a href="/"> Home </a>
                <a href="/experience"> Experience </a>
                <a href="/projects"> Projects </a>
                <a href="/contact"> Contact </a>
            </nav>
        </div>
    )
}

export default NavBar;
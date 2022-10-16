import React from "react";
import Theme from './Theme';
import { Link, Outlet } from "react-router-dom";

export let theme ='';

export function darkMode(mode){
      if(mode === 'darkMode'){
        mode = '';
      }else{
        mode = 'darkMode';
      }
  }

function NavBar(){
    return(
      <>
        <div className="navBar">
            <div>
              <h1>Kenneth Schaefer</h1>
              <Theme />
            </div>
            <nav>
                <Link to='home'>Home</Link>
                <Link to='experience'> Experience </Link>
                <Link to="projects"> Projects </Link>
                <Link to="contact"> Contact </Link>
            </nav>
        </div>
        <Outlet />
      </>
    )
}

export default NavBar;
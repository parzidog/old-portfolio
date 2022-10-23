import React from "react";
import Theme from './Theme';
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export let theme ='';

export function darkMode(mode){
      if(mode === 'darkMode'){
        mode = '';
      }else{
        mode = 'darkMode';
      }
}

function NavBar() {
  
  let width = window.innerWidth;
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <>
      <div className="navBar">
        <div>
          <h1>Kenneth Schaefer</h1>
          <Theme />
        </div>
        <nav className="navigation">
          {isNavExpanded ? <></> :
            <button
              className="hamburger"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="#dd614a"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          }
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <ul>
              {isNavExpanded ? <button id='close-navbar' onClick={() => setIsNavExpanded(!isNavExpanded)}>X</button> : <></>}
              <li>
                <Link
                  to='home'
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='experience'
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                  }}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to='projects'
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                  }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to='contact'
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

export default NavBar;
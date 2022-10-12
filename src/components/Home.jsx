import React from "react";
import Typewriter from 'typewriter-effect';

function Home(){
    return(
        <div className="homePage">
            <div className="intro">
                <h1 className="type">Hi! I am Kenny, a programming enthusiast currently living in Wichita Falls, Texas.</h1>
                <img src="./headshot.jpg" alt="My face"/>
            </div>
            <div className="about">
                <h1><Typewriter
                        options={{
                            strings: ['ABOUT ME'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 2,
                        }}
                    /></h1>
                <h3>A high performing manager and software engineer with a passion for all things IT and over 15 years of experience impacting positive outcomes through team building and attention to details. I am confident in the ability to collaborate with cross-functional teams in order to solve complex, high-stakes problems. </h3>
            </div>
        </div>
    )
}

export default Home;
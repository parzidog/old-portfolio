import React from "react";


function Contact(){
    return(
        <div className="contact">
            <div className="img">
                <img src="headshot.jpg" alt="Headshot"/>
            </div>
            <div className="info">
                <div className="phone">
                    <h2 className="propertyName">Phone:</h2>
                    <h2 className="propertyValue">(317) 361-2543</h2>
                </div>
                <div className="email">
                    <h2 className="propertyName">Email:</h2>
                    <h2 className="propertyValue">
                        <a href="mailto: kenneth.schaefer.ii@icloud.com">
                            kenneth.schaefer.ii@icloud.com
                        </a>    
                    </h2>
                </div>
                <div className="github">
                    <h2 className="propertyName">Github:</h2>
                    <h2 className="propertyValue">
                        <a href="https://www.github.com/parzidog">
                            https://www.github.com/parzidog
                        </a>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Contact;
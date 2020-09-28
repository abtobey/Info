import React from "react";
import "./style.css";

function Contact(){

return(
    <main className="container">
            <div className="card">
              <div className="card-header">
                <h1 className="contact">Contact Information</h1>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><a href="https://www.linkedin.com/in/aarontobey/">LinkedIn</a></li>
                <li className="list-group-item"><a href="mailto: abtobey@gmail.com">Email</a></li>
                <li className="list-group-item"><a href="https://docs.google.com/document/d/1-i1x4ACfQZ3COTmVo-C629vXqdZXvA4jbV1NJbN8ESY/edit?usp=sharing">Resume</a></li>
                <li className="list-group-item"><a href="https://github.com/abtobey">Github</a></li>
              </ul>
            </div>
          </main>
)
}

export default Contact;
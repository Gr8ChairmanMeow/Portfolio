// Include React
import React, { Component } from 'react';

const Contact = (props) => (
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Contact Javier</h3>
            </div>
            <div className="panel-body contact">
              
              <p><strong>E-mail:</strong> Javier.A.Avitia@gmail.com</p>
              <p><strong>Phone:</strong>{/* <span style="color:grey">*/} Coming soon.{/*</span>*/}</p>

              <div className="icons">
                <a href="https://www.linkedin.com/in/javier-a-avitia/" target="_blank"><img src="public/assets/images/linkedin.png" alt="LinkedIn" height="50" width="50" /></a>

                <a href="https://stackoverflow.com/users/8177508/javier-avitia" target="_blank"><img src="public/assets/images/stackoverflow.png" alt="StackOverflow" height="50" width="50" /></a>

                <a href="https://github.com/JavierAvitia" target="_blank"><img src="public/assets/images/github.png" alt="GitHub" height="50" width="50" /></a>
              </div>

            </div>
          </div>
)

export default Contact;
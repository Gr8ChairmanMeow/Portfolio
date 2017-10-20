// Include React
import React, { Component } from 'react';

// Including the Link component from React Router to navigate within our application without full page reloads
import { Link } from 'react-router';

// class Main extends Component {
const Main = (props) => (

      <div className="container body">      
        <div className="row">

          <div id="menu" className="divBorder col-xs-12 col-md-5">
            <Link to="/About"><div className="divBorder bttnOne">~About</div></Link>
            <Link to="/Resume"><div className="divBorder bttnTwo">~Resume</div></Link>
            <Link to="/Child1"><div className="divBorder bttnThree">~Portfolio</div></Link>
            <Link to="/Child2"><div className="divBorder bttnFour">~Contact</div></Link>
            <img src="assets/images/losAngeles.gif" alt="LosAngeles"/>
          </div>

          <div id="filler" className="col-xs-12 col-md-2">
          </div>

          <div id="selection" className="divBorder col-xs-12 col-md-5">

            {props.children}
            {/*<img src="assets/images/losAngeles.gif" alt="LosAngeles"/>*/}

          </div>

        </div>

        <div className="footer navbar-fixed-bottom">&copy; Javier Avitia</div>

      </div>
)

// Export the component back for use in other files
// module.exports = Main;
export default Main;

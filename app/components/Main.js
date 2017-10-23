// Include React
import React, { Component } from 'react';

// Include MenuSmall button component
import MenuSmall from './children/MenuSmall';

// Including the Link component from React Router to navigate within our application without full page reloads
import { Link } from 'react-router';

// class Main extends Component {
export default class Main extends Component {

  constructor(props) {
      super(props);
      this.state = {
        active: false
      };
      this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick() {
    if(this.state.active){
      this.setState({ active: false });
    }
    else{
      this.setState({ active: true });
    }
  }

  render() {

    return (

      <div className="container body">     
        <div className="row">

          {this.state.active && 

            <div id="menuHidden" className="divBorder">
              <Link to="/About"><div className="divBorder bttnOne" onClick={this.handleItemClick}>~About</div></Link>
              <Link to="/Resume"><div className="divBorder bttnTwo" onClick={this.handleItemClick}>~Resume</div></Link>
              <Link to="/Projects"><div className="divBorder bttnThree" onClick={this.handleItemClick}>~Projects</div></Link>
              <Link to="/Contact"><div className="divBorder bttnFour" onClick={this.handleItemClick}>~Contact</div></Link>
              <img src="public/assets/images/LAnight.jpg" alt="LosAngeles"/>
            </div>

          } 

          <div id="menu" className="divBorder col-xs-12 col-md-5">
            <Link to="/About"><div className="divBorder bttnOne">~About</div></Link>
            <Link to="/Resume"><div className="divBorder bttnTwo">~Resume</div></Link>
            <Link to="/Projects"><div className="divBorder bttnThree">~Projects</div></Link>
            <Link to="/Contact"><div className="divBorder bttnFour">~Contact</div></Link>
            <img src="public/assets/images/losAngeles.gif" alt="LosAngeles"/>
          </div>

          <div id="filler" className="col-xs-12 col-md-2">
          </div>

          <div id="selection" className="divBorder col-xs-12 col-md-5">

            {this.props.children}
            {/*<img src="assets/images/losAngeles.gif" alt="LosAngeles"/>*/}

          </div>

        </div>

        <div className="footer navbar-fixed-bottom">&copy; Javier Avitia<MenuSmall handleItemClick={this.handleItemClick} /></div>

      </div>

    )
  }
}

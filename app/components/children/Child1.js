// Include React
import React, { Component } from 'react';
// Including the Link component from React Router to navigate within our application without full page reloads
import { Link } from 'react-router';

class Child1 extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Child #1</h3>
              <p>
                <Link to="/Child2"><button className="btn btn-danger btn-lg">Show Child #2</button></Link>
              </p>
            </div>
            <div className="panel-body">
              <p>I'm child 1!</p>
              <p>
                <Link to="/Child1/GrandChild1"><button className="btn btn-warning btn-sm">Show Grandchild #1</button></Link>
                <Link to="/Child1/GrandChild2"><button className="btn btn-success btn-sm">Show Grandchild #2</button></Link>
              </p>

              {/* This code will allow us to automatically dump the correct GrandChild component */}
              {this.props.children}
            </div>

          </div>
    );
  }
}

export default Child1;

// Include React
import React, { Component } from 'react';
// Including the Link component from React Router to navigate within our application without full page reloads
import { Link } from 'react-router';

class Projects extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Projects</h3>
            </div>
            <div className="panel-body">
              <p>
                <Link to="/Projects/Project1"><button className="btn btn-default btn-sm">Project #1</button></Link>
                <Link to="/Projects/Project2"><button className="btn btn-default btn-sm">Project #2</button></Link>
                <Link to="/Projects/Project3"><button className="btn btn-default btn-sm">Project #3</button></Link>
                <Link to="/Projects/Project4"><button className="btn btn-default btn-sm">Project #4</button></Link>
                <Link to="/Projects/Project5"><button className="btn btn-default btn-sm">Project #5</button></Link>
                <Link to="/Projects/Project6"><button className="btn btn-default btn-sm">Project #6</button></Link>
              </p>

              {/* This code will allow us to automatically dump the correct GrandChild component */}
              {this.props.children}
            </div>

          </div>
    );
  }
}

export default Projects;

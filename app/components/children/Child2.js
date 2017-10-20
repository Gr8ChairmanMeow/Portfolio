// Include React
import React, { Component } from 'react';
// Including the Link component from React Router to navigate within our application without full page reloads
import { Link } from 'react-router';

const Child2 = (props) => (
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h3 className="panel-title">Child #2</h3>
              <Link to="/Child1"><button className="btn btn-primary btn-lg">Show Child #1</button></Link>
            </div>
            <div className="panel-body">
              I'm child 2!
            </div>
          </div>
)

export default Child2;

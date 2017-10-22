// Include React
import React, { Component } from 'react';

const Project1 = (props) => (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">L.A. Metro Event Finder</h3>
        </div>
        <div className="panel-body">
	        <a href="http://eltonhsu.com/LA-Metro-Stations-Helper/" target="_blank">
				<img src="public/assets/images/metro.jpg" alt="MetroLA" className="p_img" />
	  		</a>
	  		<hr/>
        	<ul>
        		<li>Google Maps web app</li>
        		<li>jQuery/Javascript</li>
        		<li>HTML/CSS/Bootstrap</li>
        		<li>Multi-AJAX call (w/ promise)</li>
        	</ul>
        </div>
      </div>
)

export default Project1;

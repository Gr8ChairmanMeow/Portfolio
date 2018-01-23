// Include React
import React, { Component } from 'react';

const Project1 = (props) => (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Full-Stack Transit App</h3>
        </div>
        <div className="panel-body">
	        <a href="https://transitmigo.herokuapp.com/" target="_blank">
				<img src="public/assets/images/metro.jpg" alt="transitMigoJS" className="p_img" />
	  		</a>
	  		<hr/>
        	<ul>
                <li>Full-Stack Google Maps App</li>
                <li>Station-Specific API Queries</li>
                <li>User-Specific Saved Queries</li>
                <li>ReactJS Front-End</li>
                <li>ExpressJS Server</li>
                <li>NodeJS Back-End</li>
                <li>MySQL Database</li>
                <li>Sequelize ORM</li>
        		<li>AJAX calls to Database</li>
                <li>Guest login: guest | 123#Abc</li>
        	</ul>
        </div>
      </div>
)

export default Project1;

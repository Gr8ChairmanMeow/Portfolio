// Include React
import React, { Component } from 'react';

const Project3 = (props) => (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Full-Stack Javascript Task App</h3>
        </div>
        <div className="panel-body">
          <a href="https://fullstacktaskapp.herokuapp.com/" target="_blank">
        <img src="public/assets/images/full-stack-javascript-developer.jpg" alt="FullStackJS" className="p_img" />
        </a>
        <hr/>
          <ul>
            <li>Full-Stack Web App</li>
            <li>ReactJS Front-End</li>
            <li>ExpressJS Server</li>
            <li>NodeJS Back-End</li>
            <li>MySQL Database</li>
            <li>Sequelize ORM</li>
            <li>HTML/CSS/Bootstrap Styling</li>
            <li>jQuery/Javascript Functions</li>
            <li>AJAX calls to Database</li>
            <li>Guest login: guest | 123#Abc</li>
          </ul>
        </div>
      </div>
)

export default Project3;

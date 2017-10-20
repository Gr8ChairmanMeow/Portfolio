// Include React
import React, { Component } from 'react';

const Resume = (props) => (
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Resume 2017</h3>
            </div>
            <div className="panel-body">
              {/*<img src="assets/images/Resume.png" id="rsmImg" />*/}
              <embed src="public/assets/images/Resume.pdf" id="rsmPDF" type="application/pdf" height="375"/>
            </div>
          </div>
)

export default Resume;
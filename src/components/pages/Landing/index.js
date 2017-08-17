import React, {Component} from "react";
import {browserHistory} from "../../../utils/routes";

export default class Landing extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="home-page fixed-container">
        <video playsInline autoPlay muted loop src="/BankingDemo.mp4"/>
        <div className="imgs-container">
          <img className="circle-picture" src="/images/bbbleScreenshot.png" alt="#" style={{
            left: 0,
            top: 0
          }}/>
          <img className="circle-picture" src="/images/DukeScreenshot.png" alt="#" style={{
            right: 0,
            top: 0
          }}/>
          <img className="circle-picture center-block" src="/images/einsScreenshot.png" alt="#" style={{
            left: '50%',
            transform: 'translate(-50%, 0%)',
            bottom: 0
          }}/>
        </div>
        <div style={{
          margin: 50
        }}>
          <div className="text-area">
            <h1 className="text-center">Joe Wolfgram</h1>
            <p className="text-center">
              As a Software Developer who is continuously expanding my knowledge I am always tinkering or building something new. Over my time in development I have worked with many different programming tools such as Swift iOS, Objective-C iOS, Node.js, Express.js, Handlebars.js, MySQL, MongoDB, RethinkDB, Cassandra, jQuerry, JavaScript ES6 / ES7, React.js, Webpack, React Native, AWS EC2, Bash Scripting, SCSS, Gulp, and Nginx to create Full Stack Applications.
            </p>
            <hr/>
            <div className="center-btn row-btn-margin">
              <a target="_blank" href="https://github.com/jwolfgram">
                <button className="btn btn-info" type="button" role="button">
                  VISIT GITHUB
                </button>
              </a>
            </div>
            <div className="center-btn row-btn-margin">
              <a target="_blank" href="https://www.youtube.com/channel/UCEmweASFq5OsibtkWW1CsPQ">
                <button className="btn btn-info" type="button" role="button">
                  VISIT YOUTUBE CHANNEL
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

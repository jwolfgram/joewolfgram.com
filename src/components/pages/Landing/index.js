import React, { Component } from 'react';
import { browserHistory } from '../../../utils/routes';

export default class Landing extends Component {

    constructor(){
        super();
    }

    render() {
        return (
          <div className="absolute-center">
            <div>
              <img className="profile-picture" src="/images/me.jpeg" alt="#"/>
            </div>
            <div>
              <div className="ext-center">
                  <h1 className="text-center">Joe Wolfgram</h1>
                  <p className="text-center">As a Software Developer who is continuously looking for knowledge I am always tinkering or building something new. Over the past year I have worked with many different programming tools such as Swift iOS, Objective-C iOS, Node.js, Express.js, Handlebars.js, MySQL, MongoDB, RethinkDB, Cassandra, jQuerry, JavaScript ES6, React.js, Webpack, React Native, AWS EC2, Bash Scripting, SCSS, Gulp, Nginx just to name a few.</p>
                  <hr/>
              </div>
              <div className="center-btn row-btn-margin">
                <a target="_blank" href="https://github.com/jwolfgram">
                  <button className="btn btn-info" type="button" role="button">VISIT GITHUB</button>
                </a>
              </div>
              <div className="center-btn row-btn-margin">
                <a target="_blank" href="https://www.youtube.com/channel/UCEmweASFq5OsibtkWW1CsPQ">
                  <button className="btn btn-info"type="button" role="button">VISIT YOUTUBE CHANNEL</button>
                </a>
              </div>
            </div>
          </div>
        );
    }
}

import React, { Component } from 'react';
import { browserHistory } from '../../../utils/routes';

export default class Landing extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <div className="splash-container">
                <div className="absolute-center">
                  <div>
                    <img className="profile-picture" src="/images/me.jpeg" alt="#"/>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 text-center">
                        <h1>Joe Wolfgram</h1>
                        <p>A Software Engineer with enough confidence to know when he is wrong.</p>
                        <hr/>
                    </div>
                    <div className="row center-btn row-btn-margin">
                      <a target="_blank" href="https://github.com/jwolfgram">
                        <button className="btn btn-info" type="button" role="button">VISIT GITHUB</button>
                      </a>
                    </div>
                    <div className="row center-btn row-btn-margin">
                      <a target="_blank" href="https://www.youtube.com/channel/UCEmweASFq5OsibtkWW1CsPQ">
                        <button className="btn btn-info"type="button" role="button">VISIT YOUTUBE CHANNEL</button>
                      </a>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

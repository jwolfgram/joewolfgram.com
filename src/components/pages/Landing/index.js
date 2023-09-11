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
            <h1 className="text-center">Digibit Services</h1>
            <p className="text-center">
              Over 9 years of experiance in Software Engineering working with JavaScript and Golang. I build dynamic websites used to help solve problems in the bussiness space. 
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

import React, { Component } from "react";
import { browserHistory } from "../../../utils/routes";

export default class Landing extends Component {
  constructor() {
    super()
    this.state = {
      isHovered: []
    }
    this.images = [
      (className, i) => (<img className={`${className} ${this.state.isHovered[i] ? "circle-hover" : this.state.isLeavingHover === i ? "circle-hover-leave" : ""}`} onMouseEnter={() => {this.circleEnter(i)}} src="/images/react.png" alt="#" style={{
          left: 0,
          top: 0
        }} />),
      (className, i) => (<img className={`${className} ${this.state.isHovered[i] ? "circle-hover" : this.state.isLeavingHover === i ? "circle-hover-leave" : ""}`} onMouseEnter={() => {this.circleEnter(i)}} src="/images/yolologo.png" alt="#" style={{
        right: 0,
        top: 0
      }} />),
      (className, i) => (<img className={`${className} ${this.state.isHovered[i] ? "circle-hover" : this.state.isLeavingHover === i ? "circle-hover-leave" : ""}`} onMouseEnter={() => {this.circleEnter(i)}} src="/images/nodejs.png" alt="#" style={{
        left: 0,
        marginLeft: "40%",
        bottom: 0
      }} />),
      (className, i) => (<img className={`${className} ${this.state.isHovered[i] ? "circle-hover" : this.state.isLeavingHover === i ? "circle-hover-leave" : ""}`} onMouseEnter={() => {this.circleEnter(i)}}  src="/images/typescript.png" alt="#" style={{
        right: 0,
        marginRight: "80%",
        bottom: 0
      }} />),
      (className, i) => (<img className={`${className} ${this.state.isHovered[i] ? "circle-hover" : this.state.isLeavingHover === i ? "circle-hover-leave" : ""}`} onMouseEnter={() => {this.circleEnter(i)}} src="/images/go.png" alt="#" style={{
        left: 0,
        marginLeft: "80%",
        bottom: 0
      }} />),
      (className, i) => (<img className={`${className} ${this.state.isHovered[i] ? "circle-hover" : this.state.isLeavingHover === i ? "circle-hover-leave" : ""}`} onMouseEnter={() => {this.circleEnter(i)}} src="/images/python.png" alt="#" style={{
        right: 0,
        marginRight: "40%",
        bottom: 0
      }} />),
    ]

    setTimeout(() => {
      this.setState({isNotFirst: true})
    },3000)
  }

  circleEnter(num) {
    if (this.state.isHovered[num]) {
      return
    }
    this.state.isHovered[num] = true
    this.setState({isHovered: this.state.isHovered})
    setTimeout(() => {
      this.state.isHovered[num] = false
      this,this.setState({isHovered: this.state.isHovered})

    }, 3000)
  }

  renderImages() {
    let className = `circle-picture ${!this.state.isNotFirst ? "animate-in" : ""}`

    return this.images.map((img, i) => img(className, i))
  }

  render() {
    return (
      <div className="home-page fixed-container">
        <div className="imgs-container">
          
          
          
          {this.renderImages()}
          
          

        </div>
        <div style={{
          margin: 50
        }}>
          <div className="text-area">
            <h1 className="text-center">Digibits Services</h1>
            <p className="text-center">
            I build dynamic websites used to help solve problems in the bussiness space.
              With 9 years of experiance in Software Engineering working with JavaScript, Typescript, Node.js, Python and Golang.
              Some of the libraries I am framiliar with are Express.js, React.js, React Native, Fiber, YOLO8, and other machine learning libraries.
              
            </p>
            <hr />
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

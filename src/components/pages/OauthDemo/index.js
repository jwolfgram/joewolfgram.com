import React, { Component } from 'react';
import { browserHistory } from '../../../utils/routes';
import {Link} from 'react-router-dom';
import './index.css';


export default class OauthExample extends Component {

    constructor(){
        super();
    }

    login() {
      fetch('https://davidwalsh.name/submit-json', {
      	method: 'post',
      	body: JSON.stringify({
      		email: document.getElementById('email').value,
      		answer: document.getElementById('answer').value
      	})
      });
    }

    componentDidMount() {
      // let path = browserHistory.location.pathname;
      // console.log(window.location)
      // if (path == '/eins') {
      //   window.open('https://eins.joewolfgram.com', '_blank')
      // } else {
      //   if (path == '/success') {
      //     window.open('https://success.joewolfgram.com', '_blank')
      //   }
      // }
      // browserHistory.push('/')
      console.log(browserHistory);
      browserHistory.listen((url) => {
        console.log(url)
      });
    }

    render() {
        return (<div>
                  <a href="https://joewolfgram.com/auth/google">
                    <button id="google-login-btn">
                        <img src="/images/sign-in-with-google.png" height="50" alt="submit" />
                    </button>
                  </a>
                </div>);
    }
}

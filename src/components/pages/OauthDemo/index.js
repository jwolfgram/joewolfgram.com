import React, { Component } from 'react';
import { browserHistory } from '../../../utils/routes';
import {Link} from 'react-router-dom';
import './index.css';


export default class OauthExample extends Component {

    constructor(){
        super();
        this.state = {
          user: ""
        }
        this.login = this.login.bind(this);
    }

    componentDidMount() {
      this.login();
    }

    login() {
      fetch('https://joewolfgram.com/api/user').then(function(response) {
      	return response.json();
      }).then((json) => {
      	// Yay, `j` is a JavaScript object
        if (json) {
          console.log(json);
          this.setState({user: JSON.stringify(json)});
        } else {
          this.setState({user:'No User'});
        }
      });
    }

    render() {
        return (<div>
                    <div>{this.state.user}</div>
                  <a href="https://joewolfgram.com/api/auth/google">
                    <button id="google-login-btn">
                        <img src="/images/sign-in-with-google.png" height="50" alt="submit" />
                    </button>
                  </a>
                </div>);
    }
}

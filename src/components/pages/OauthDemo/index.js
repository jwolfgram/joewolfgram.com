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
        this.userInfo = this.userInfo.bind(this);
    }

    componentDidMount() {
      this.login();
    }

    login() {
      fetch('https://joewolfgram.com/api/user',{
        credentials: "same-origin"
      }).then(function(response) {
      	return response.json();
      }).then((json) => {
      	// Yay, `j` is a JavaScript object
        if (json) {
          this.setState({user: json});
        } else {
          this.setState({user:'No User'});
        }
      });
    }

    userInfo() {
      if (this.state.user) {
        return (
          <div>
            <h4>Name</h4>
            <p>{this.state.user.google.name}</p>
            <h4>Email</h4>
            <p>{this.state.user.google.email}</p>
          </div>
        )

      } else {
        return <p>Not Authenticated</p>
      }
    }

    render() {
        return (<div>
                    <div>{this.userInfo()}</div>
                  <a href="https://joewolfgram.com/api/auth/google">
                    <button id="google-login-btn">
                        <img src="/images/sign-in-with-google.png" height="50" alt="submit" />
                    </button>
                  </a>
                </div>);
    }
}

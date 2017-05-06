import React, { Component } from 'react';
import { browserHistory } from '../../../utils/routes';
import {Link} from 'react-router-dom';

export default class ProjectRedirect extends Component {

    constructor(){
        super();
    }

    componentDidMount() {
      let path = browserHistory.location.pathname;
      console.log(window.location)
      if (path == '/eins') {
        window.open('https://eins.joewolfgram.com', '_blank')
      } else {
        if (path == '/success') {
          window.open('https://success.joewolfgram.com', '_blank')
        }
      }
      browserHistory.push('/')
    }

    render() {
        return (<div>Redirecting...</div>);
    }
}

import React, {Component} from 'react';
import {browserHistory} from '../../../utils/routes';
import {Link} from 'react-router-dom';

export default class ProjectRedirect extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    let path = browserHistory.location.pathname;
    console.log(window.location)
    if (path == '/eins') {
      window.open('http://eins.digibitservices.com', '_blank')
    } else {
      if (path == '/success') {
        window.open('http://success.digibitservices.com', '_blank')
      }
    }
    browserHistory.push('/')
  }

  render() {
    return (
      <div>Redirecting...</div>
    );
  }
}

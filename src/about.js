/* @flow */
// About me

import React from 'react';
import logo from './img/logo-l.svg';

import './about.css';

type Props = {
  title: string,
  name: string,
  style: string,
  concept: string,
  toMe: string,
  mailtoSubject: string,
}

export default class About extends React.Component<Props> {

  render() {
    return (
      <div className="flex-column about-container" >
        <img className="about-logo self-center" src={logo} alt="logo" />
        <div className="about-title self-center" >{this.props.title}</div>
        <div className="about-name self-center" >{this.props.name}</div>
        <div className="about-style self-center" >风格·{this.props.style}</div>
        <div className="about-concept self-center text-center" >{this.props.concept}</div>
        <div className="about-tome self-center text-center" >{this.props.toMe}</div>
        <a className="about-contact self-center text-center" 
            href={`mailto:MinamiAnami@outlook.com?subject=${this.props.mailtoSubject}`} >
            联系我 MinamiAnami@outlook.com
        </a>
      </div>
    );
  }
}

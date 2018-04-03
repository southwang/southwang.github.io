/* @flow */

import React, { Component } from 'react';

import Sight from './sight';
import Contents from './contents';
import Shoes from './shoes';
import Config from './config'
import './App.css';


export default class App extends Component<{}> {
  render() {
    return (
      <div className="container">
        <Sight bannerImage={Config.bannerImage} />
        <Contents backgroundImage={Config.backgroundImage} />
        <Shoes />
      </div>
    );
  }
}

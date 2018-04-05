/* @flow */

import React, { Component } from 'react';

import Sight from './sight';
import Contents from './contents';
import Shoes from './shoes';
import Config from './config'
import './App.css';


type Props = {

}

type State = {
  sight: SightType,
  contents: ContentsType,
  shoes: ShoesType,
}

type SightType = {
  bannerImage: string,
  navRatio: number,
  bannerRatio: number,
  fontRatio: number,
  subAreaRatio: number,
}

type ContentsType = {
  backgroundImage: string,
}

type ShoesType = {

}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      sight: Config.sight,
      contents: Config.contents,
      shoes: {},
    }
  }


  render() {
    return (
      <div className="container">
        <Sight {...this.state.sight} />
        <Contents {...this.state.contents} />
        <Shoes />
      </div>
    );
  }
}

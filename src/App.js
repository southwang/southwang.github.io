/* @flow */

import React, { Component } from 'react';

import Sight from './sight';
import Contents from './contents';
import Shoes from './shoes';
import Config from './config'
import Article from './article';
import './App.css';


type SightType = {
  bannerImage: string,
}

type ContentsType = {
  backgroundImage: string,
}

type ShoesType = {
  mailtoSubject: string,
}

type Props = {

}

type State = {
  sight: SightType,
  contents: ContentsType,
  shoes: ShoesType,
  drawCoung: number,
  psCount: number,
  article: Array<{
    [string] : string,
  }>,
}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      sight: Config.sight,
      contents: Config.contents,
      shoes: Config.shoes,
      article: Article,
      drawCoung: 0,
      psCount: 0,
    }
  }


  render() {
    return (
      <div className="container">
        <Sight {...this.state.sight} />
        <Contents {...this.state.contents}
          article={this.state.article} />
        <Shoes {...this.state.shoes}
          drawCount={this.state.drawCoung}
          psCount={this.state.psCount} />
      </div>
    );
  }
}

/* @flow */

import React, { Component } from 'react';

import Sight from './sight';
import Contents from './contents';
import Shoes from './shoes';
import Config from './config'
import Article from './article';
import About from './about';
import title from './img/title.jpg';
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

type AboutType = {
  title: string,
  name: string,
  style: string,
  concept: string,
  toMe: string,
}

type Props = {

}

type articleType ={
  [string] : string | number,
}

type State = {
  sight: SightType,
  contents: ContentsType,
  shoes: ShoesType,
  about: AboutType,
  title: string, // title 图片

  showAbout: boolean, // about me 显示 flag

  drawCoung: number, // 手绘作品数量
  psCount: number, // 电脑作品数量

  article: Array<articleType>, // 所有作品
  drawArticle: Array<articleType>, // 手绘作品列表
  psArticle: Array<articleType>, // 电脑作品列表

  drawCat: string, // 手绘目录名
  psCat: string, // 电脑作品目录名
}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // 将所有图片文章加上 id
    const a = Article.map((a, i) => {
      a.id = i;
      return a;
    });
    // 定义目录名称
    const [cat1, cat2] = ['铅笔手绘', 'PS练习系列'];

    // 筛选各目录下的项目
    const drawArticle = a.filter(a => {
      if (a.category === cat1) return a;
    });
    const psArticle = a.filter(a => {
      if (a.category === cat2) return a;
    });

    this.state = {
      sight: Config.sight,
      contents: Config.contents,
      shoes: Config.shoes,
      about: Config.about,
      title: title,
      article: a,
      drawArticle: drawArticle,
      drawCat: cat1,
      psArticle: psArticle,
      psCat: cat2,
      drawCoung: drawArticle.length,
      psCount: psArticle.length,
      showAbout: false,
    }
  }

  handleAboutClick() {
    this.setState((pre) => ({
      showAbout: !pre.showAbout,
    }));
  }

  handleMaskClick() {
    this.handleAboutClick();
  }

  render() {
    return (
      <div className={
        "container transition " + (this.state.showAbout ? 'offset' : '')
      } >
      
        <Sight {...this.state.sight} 
          handleAboutClick={this.handleAboutClick.bind(this)}
          title={this.state.title} />

        <Contents {...this.state.contents}
          article={this.state.article}
          drawArticle={this.state.drawArticle}
          psArticle={this.state.psArticle}
          drawCat={this.state.drawCat}
          psCat={this.state.psCat} />

        <Shoes {...this.state.shoes}
          drawCount={this.state.drawCoung}
          psCount={this.state.psCount} />

        <div className={
          "about-body transition flex-normal flex-hv-center "
          + (this.state.showAbout ? 'show' : 'hide')
          }
          onClick={this.handleAboutClick.bind(this)} >
          
          <About {...this.state.about}
            mailtoSubject={this.state.shoes.mailtoSubject} />

        </div>

        <div className="mask"
          style={{
            width: this.state.showAbout ? '100%' : '0',
            opacity: this.state.showAbout ? '1' : '0'
          }}
          onClick={this.handleMaskClick.bind(this)} />

      </div>
    );
  }
}

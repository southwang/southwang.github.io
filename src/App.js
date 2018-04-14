/* @flow */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sight from './sight';
import Contents from './contents';
import Shoes from './shoes';
import Config from './config'
import Article from './article';
import Project from './project';
import About from './about';
import './App.css';


type SightType = {
  bannerImage: Array<string>,
  title: Array<string>,
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

type articleType = {
  [string]: string | number,
}

type projectType = articleType;

type State = {
  sight: SightType,
  contents: ContentsType,
  shoes: ShoesType,
  about: AboutType,

  showAbout: boolean, // about me 显示 flag

  drawCoung: number, // 手绘作品数量
  psCount: number, // 电脑作品数量

  article: Array<articleType>, // 所有作品
  drawArticle: Array<articleType>, // 手绘作品列表
  psArticle: Array<articleType>, // 电脑作品列表

  project: Array<projectType>, // 项目设计作品

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
      return a.category === cat1;
    });
    const psArticle = a.filter(a => {
      return a.category === cat2;
    });

    // 给项目设计加唯一 id
    const p = Project.map((p, i) => {
      p.id = i;
      return p;
    });

    this.state = {
      sight: Config.sight,
      contents: Config.contents,
      shoes: Config.shoes,
      about: Config.about,
      article: a,
      drawArticle: drawArticle,
      drawCat: cat1,
      psArticle: psArticle,
      project: p,
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

    const ContentsWrapper = () => (
      <Contents {...this.state.contents}
      project={this.state.project}
      article={this.state.article}
      drawArticle={this.state.drawArticle}
      psArticle={this.state.psArticle}
      drawCat={this.state.drawCat}
      psCat={this.state.psCat} />
    );

    return (
      <div className={
        "container transition " + (this.state.showAbout ? 'offset' : '')
      } >

        <Sight {...this.state.sight}
          handleAboutClick={this.handleAboutClick.bind(this)} />

        <Route exact path="/" component={ContentsWrapper} />

        <Shoes {...this.state.shoes}
          drawCount={this.state.drawCoung}
          psCount={this.state.psCount} />

        <div className={
          "about-body transition flex-normal flex-hv-center "
          + (this.state.showAbout ? 'show' : 'hide')
          } onClick={this.handleAboutClick.bind(this)} >
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

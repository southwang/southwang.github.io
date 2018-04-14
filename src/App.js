/* @flow */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { find } from 'lodash';

import Sight from './sight';
import Contents from './contents';
import Shoes from './shoes';
import Config from './config'
import Article from './article';
import Project from './project';
import About from './about';
import ProjectPages from './projectPages';
import './App.css';


type SightType = {
  bannerImage: Array<string>,
  title: Array<string>,
}

type ContentsType = {
  backgroundImage: string,
  projectFooterImage: string,
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
    const [cat1, cat2] = ['铅笔手绘', '设计作品'];

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

    // base url 
    // github pages 上根目录为 build
    const baseURL = (
      window.location.host === 'southwang.github.io'
        ? Config.baseURL : '/'
    );

    const {
      sight, contents, shoes, about, article, drawArticle, drawCat,
      psArticle, project, psCat, drawCoung, psCount, showAbout
    } = this.state;

    return (
      <div className={
        "container transition " + (showAbout ? 'offset' : '')
      } >

        <Sight {...sight}
          handleAboutClick={this.handleAboutClick.bind(this)}
          baseURL={baseURL} />

        <Route exact path={baseURL} render={() => (
          <Contents {...contents}
            project={project}
            article={article}
            drawArticle={drawArticle}
            psArticle={psArticle}
            drawCat={drawCat}
            psCat={psCat}
            baseURL={baseURL} />
        )} />

        <Route path={`${baseURL}:project`} render={({ match }) => {
          const p = find(project, ["name", match.params.project]);
          return (
          <ProjectPages project={p ? p : { name: "404" }} 
            baseURL={baseURL}
            projectFooterImage={contents.projectFooterImage} />
        )
        }} />

        <Shoes {...shoes}
          drawCount={drawCoung}
          psCount={psCount} />

        <div className={
          "about-body transition flex-normal flex-hv-center "
          + (showAbout ? 'show' : 'hide')
        } onClick={this.handleAboutClick.bind(this)} >
          <About {...about}
            mailtoSubject={shoes.mailtoSubject} />
        </div>
        <div className="mask"
          style={{
            width: showAbout ? '100%' : '0',
            opacity: showAbout ? '1' : '0'
          }}
          onClick={this.handleMaskClick.bind(this)} />

      </div>
    );
  }
}

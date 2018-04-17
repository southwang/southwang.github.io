/* @flow */
// 页面主体

import React from 'react';
import { range } from 'lodash';
import { Link } from 'react-router-dom';
import { Spring, config, animated } from 'react-spring';
import ScrollToTop from './scrollToTop';

import './contents.css';

type articleType = {
  [string]: string | number,
}

type projectType = articleType;

type Props = {
  backgroundImage: string,
  article: Array<articleType>,
  drawArticle: Array<articleType>,
  psArticle: Array<articleType>,
  project: Array<projectType>,
  drawCat: string,
  psCat: string,
  baseURL: string,
}

type State = {
  show: boolean,
  showItem: articleType,
  drawShowCount: number,
  psShowCount: number,
}

/**
 * 生成文章列表
 * @param {*} props 
 */
function Articles(props: {
  items: Array<articleType>,
  handleArticleClick: (id: number | string) => void,
  handleLoadMore: (category: string) => void,
  subTitle: string,
  showCount: number,
}) {
  return (
    <div className="flex-column article-container transition" >
      <div className="sub-title" >{props.subTitle}</div>
      <div className="flex-normal flex-wrap article-list" >
        {
          range(props.showCount).map(a => (
            <div key={props.items[a].id}
              className="article transition back-white light-shadow"
              onClick={() => props.handleArticleClick(props.items[a].id)} >
              <div className="img-container" >
                <div className="img transition" style={{
                  backgroundImage: `url(${props.items[a].url})`
                }} ><div className="img-mask transition" /></div>
              </div>
              <div className="article-title" >{props.items[a].title}</div>
              <div className="article-intro" >{props.items[a].intro}</div>
            </div>
          ))
        }
      </div>
      {
        props.showCount >= props.items.length
          ? <div className="load-more font-gray" >没有更多了(¦3[▓▓]	</div>
          : (
            <div className="load-more avaliable transition"
              onClick={() => props.handleLoadMore(props.subTitle)} >
              点击加载更多(:3[___]=
          </div>
          )
      }

    </div>
  );
}

/**
 * 生成项目设计项目
 * @param {*} props 
 */
function Projects(props: {
  project: Array<projectType>,
}) {
  return (
    <div className="flex-column project" >
      <div className="section" >{'项目设计'}</div>
      {
        props.project.map(p => (
          <Link to={p.name} key={p.id} >
            <div className="project-item back-white light-shadow flex-normal" >
              <div className="project-img-container" >
                <div className="project-img transition"
                  style={{
                    backgroundImage: `url(${p.cover})`,
                  }} ><div className="img-mask transition" /></div>
              </div>
              <div className="project-intro" >
                <div className="project-title" >{p.title}</div>
                <div className="project-description" >{p.description}</div>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  );
}

/**
 * 生成内容
 */
export default class Contents extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      show: false,
      showItem: this.props.article[0],
      drawShowCount: 8 > props.drawArticle.length
        ? props.drawArticle.length : 8, // 默认显示8个项目
      psShowCount: 8 > props.psArticle.length
        ? props.psArticle.length : 8, // 默认显示8个项目
    }
  }

  /**
   * 点击文章放大图片显示
   * @param {*} id 
   */
  handleArticleClick(id: number | string) {
    id = Number(id);
    if (!isNaN(id)) {
      this.setState({
        show: true,
        showItem: this.props.article[id],
      });
    }
  }

  /**
   * 点击图片显示背景遮罩
   */
  handleMaskClick() {
    this.setState({ show: false });
  }

  /**
   * 加载更多
   * @param {*} category 目录
   */
  handleLoadMore(category: string) {
    if (category === this.props.drawCat) {
      const count = this.state.drawShowCount + 8 > this.props.drawArticle.length
        ? this.props.drawArticle.length
        : this.state.drawShowCount + 8;
      this.setState({ drawShowCount: count })
    } else if (category === this.props.psCat) {
      const count = this.state.psShowCount + 8 > this.props.psArticle.length
        ? this.props.psArticle.length
        : this.state.psShowCount + 8;
      this.setState({ psShowCount: count })
    }
  }

  render() {

    const {
      project, baseURL, psArticle, psCat, drawArticle, drawCat
    } = this.props;
    const {
      psShowCount, drawShowCount, show, showItem
    } = this.state;

    const ArticlesWrapper = (props) => (
      <Articles items={props.items}
        handleArticleClick={this.handleArticleClick.bind(this)}
        handleLoadMore={this.handleLoadMore.bind(this)}
        showCount={props.showCount}
        subTitle={props.subTitle} />
    );

    const mobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);

    return (
      <Spring from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={config.gentle} >
        {
          styles => (
            <div className={`background-color flex-column contents ${mobile ? '' : 'desk'}`}
              style={{ ...styles }} >
              <ScrollToTop />
              {/* 项目设计展示 */}
              <Projects project={project} baseURL={baseURL} />
              {/* 作品展示 */}
              <div className="flex-column single" >
                <div className="section" >{'作品展示'}</div>
                <ArticlesWrapper items={psArticle}
                  showCount={psShowCount}
                  subTitle={psCat} />
                <ArticlesWrapper items={drawArticle}
                  showCount={drawShowCount}
                  subTitle={drawCat} />
              </div>
              {/* 点击放大 */}
              {show ? (
                <Spring from={{ opacity: 0 }}
                  to={{ opacity: 1 }} native
                  config={{ tension: 5, friction: 10 }}>
                  {styles => (
                    <animated.div className={
                      'show-pic full flex-column flex-v-center t3d'
                    } onClick={this.handleMaskClick.bind(this)}
                      style={{ ...styles }} >
                      {/* 图片显示 */}
                      <div className="pic-container flex-normal flex-v-center" >
                        <img className="pic shadow font-white"
                          alt={showItem.title}
                          src={showItem.url}
                          style={{
                            maxHeight: document.documentElement
                              ? `${document.documentElement.clientHeight - 75}px`
                              : "100%",
                          }} ></img>
                      </div>
                      {/* 详细显示 */}
                      <div className="desc font-white" >
                        <div>{showItem.title}</div>
                        <div>{showItem.description}</div>
                      </div>
                    </animated.div>
                  )
                  }
                </Spring>
              ) : null
              }
            </div>

          )
        }
      </Spring>
    );
  }
}


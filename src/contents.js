/* @flow */
// 页面主体

import React from 'react';
import { range } from 'lodash';

import './contents.css';

type articleType = {
  [string]: string | number,
}

type Props = {
  backgroundImage: string,
  article: Array<articleType>,
  drawArticle: Array<articleType>,
  psArticle: Array<articleType>,
  drawCat: string,
  psCat: string,
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
            <div key={props.items[a].id} className="article transition" 
              onClick={() => props.handleArticleClick(props.items[a].id)} >
              <div className="img transition" style={{
                backgroundImage: `url(${props.items[a].url})`
              }} ></div>
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
          <div className="load-more avaliable"
            onClick={() => props.handleLoadMore(props.subTitle)} >
            加载更多(:3[___]=
          </div>
        )
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
    return (
      <div className="background-color flex-column contents" >
        <div className="flex-column project" >
          <div className="section" >{'项目设计(施工中)'}</div>
          
        </div>
        <div className="flex-column single" >
          <div className="section" >{'作品展示'}</div>
          <Articles items={this.props.drawArticle} 
            handleArticleClick={this.handleArticleClick.bind(this)}
            handleLoadMore={this.handleLoadMore.bind(this)}
            showCount={this.state.drawShowCount}
            subTitle={this.props.drawCat} />
          <Articles items={this.props.psArticle} 
            handleArticleClick={this.handleArticleClick.bind(this)}
            handleLoadMore={this.handleLoadMore.bind(this)}
            showCount={this.state.psShowCount}
            subTitle={this.props.psCat} />       
        </div>
        {/* 点击放大 */}
        <div className="show-pic full flex-column flex-v-center"
          style={{
            display: this.state.show ? "flex" : "none",
          }}
          onClick={this.handleMaskClick.bind(this)} >
          {/* 图片显示 */}
          <div className="pic-container flex-normal flex-v-center" >
            <img className="pic shadow font-white" 
              alt={this.state.showItem.title} 
              src={this.state.showItem.url}
              style={{
                maxHeight: document.documentElement 
                  ? `${document.documentElement.clientHeight - 75}px`
                  : "100%",
              }} ></img>
            </div>
          {/* 详细显示 */}
          <div className="desc font-white" >
            <div>{this.state.showItem.title}</div>
            <div>{this.state.showItem.description}</div>
          </div>
        </div>

      </div>
    );
  }
}


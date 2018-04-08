/* @flow */
// 页面脚部

import React from 'react';

import './shoes.css';
import logo from './img/logo.jpg';

type Props = {
  mailtoSubject: string,
  drawCount: number,
  psCount: number,
}

/**
 * 生成页面脚部
 */
export default class Shoes extends React.Component<Props> {
  render() {
    return (
      <div className="shoes flex-normal" >
        <div className="summary mr-auto" >
          <div>东隅已逝，桑榆非晚。最好的学习时机就是现在。</div>
          <div className="flex-normal flex-v-center count-info" >
            <div>手绘</div><span className="count draw font-white" >{this.props.drawCount}</span>
            <div>PS习作</div><span className="count ps font-white" >{this.props.psCount}</span>
          </div>
          <a className="contact" 
            href={`mailto:MinamiAnami@outlook.com?subject=${this.props.mailtoSubject}`} >
            联系我ヽ(●´∀`●)ﾉ MinamiAnami@outlook.com
          </a>
        </div>
        <img className="shoes-logo" src={logo} alt="logo" />
      </div>
    );
  }
}


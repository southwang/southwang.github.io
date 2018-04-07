/* @flow */
// 页面脚部

import React from 'react';

import './shoes.css';

type Props = {
  mailtoSubject: string,
  drawCount: number,
  psCount: number,
}

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
        </div>
        <a className="contact" 
          href={`mailto:MinamiAnami@outlook.com?subject=${this.props.mailtoSubject}`} >
          联系我 MinamiAnami@outlook.com
        </a>
      </div>
    );
  }
}


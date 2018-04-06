/* @flow */
// 页面头部

import React from 'react';
import './sight.css';


function Navigation(props: {
  height: number,
}) {
  return (
    <div className="nav background-color flex-normal" style={{
      height: `${props.height}px`,
    }}>

      <div className="search flex-normal flex-hv-center" >
        <input className="font-white" />
      </div>
      <div className="about font-white flex-normal flex-hv-center" >
        ABOUT ME
      </div>

    </div>
  );
}

function Banner(props: {
  bannerImage: string,
  height: number,
  fontSize: number,
  offset: number,
}) {
  return (
    <div
      className="banner flex-normal flex-hv-center"
      style={{
        backgroundImage: `url(${props.bannerImage})`,
        height: `${props.height}px`,
      }} >

      <div
        className="title font-white"
        style={{
          fontSize: `${props.fontSize}px`,
          transform: `translate3d(0,${-props.offset}px,0)`,
        }} >
        {
          document.documentElement && document.body
            ? `${document.documentElement.clientWidth}:${document.body.clientWidth}`
            : "MINAMI"
        }
      </div>

      <div
        className="sub-area"
        style={{
          height: `${props.offset}px`,
        }} />

    </div>
  );
}

type Props = {
  bannerImage: string,
  navRatio: number,
  bannerRatio: number,
  fontRatio: number,
  subAreaRatio: number,
}

type State = {
  bannerHeight: number,
  navHeight: number,
  fontSize: number,
  subAreaHeight: number,
}

export default class Sight extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      bannerHeight: 0,
      navHeight: 0,
      fontSize: 0,
      subAreaHeight: 0,
    };
  }

  /**
   * 屏幕尺寸变化时缩放
   */
  onResize() {
    if (document.documentElement) {
      const w = document.documentElement.clientWidth;
      this.setState({
        bannerHeight: w * this.props.bannerRatio - 10, // 保留量10px
        fontSize: w * this.props.fontRatio,
        navHeight: w * this.props.navRatio,
        subAreaHeight: w * this.props.subAreaRatio,
      });
    }
  }

  /**
   * 初始化尺寸
   */
  componentWillMount() {
    this.onResize();
  }

  /**
   * 组件挂载后监听屏幕尺寸变化事件
   */
  componentDidMount() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  /**
   * 组件卸载后去除事件监听
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  render() {
    return (
      <div
        className="sight flex-column" 
        style={{
          height: `${this.state.bannerHeight + this.state.navHeight}px`
        }} >

        <Navigation
          height={this.state.navHeight}
        />
        <Banner
          bannerImage={this.props.bannerImage}
          height={this.state.bannerHeight}
          fontSize={this.state.fontSize}
          offset={this.state.subAreaHeight}
        />

      </div>
    );
  }
}


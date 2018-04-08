/* @flow */
// 页面头部

import React from 'react';
import './sight.css';
import title from './img/title.jpg';
import logo from './img/logo.jpg';


/**
 * 生成导航
 * @param {*} props 
 */
function Navigation(props: {
  handleAboutClick: () => void,
}) {
  return (
    <div className="nav background-color flex-normal" >

      <div className="flex-normal flex-v-center logo font-white" >
        <img src={logo} alt="logo" />
      </div>
      <div className="m-auto nav-title" >SOUTHWANG</div>
      <div className="about font-white flex-normal flex-hv-center"
        onClick={props.handleAboutClick} >
        ABOUT ME
      </div>

    </div>
  );
}

/**
 * 生成Banner
 * @param {*} props 
 */
function Banner(props: {
  bannerImage: string,
}) {
  return (
    <div className="banner flex-normal flex-hv-center transition" style={{
      backgroundImage: `url(${props.bannerImage})`,
    }} >

      <div className="title font-white" >
        <img className="title-img" src={title} alt="title" />
        <div className="small-title font-white" >MINAMI</div>
      </div>

      <div className="sub-area" />

    </div>
  );
}

type Props = {
  bannerImage: string,
  handleAboutClick: () => void,
}

type State = {
}

/**
 * 生成页面头部
 */
export default class Sight extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="sight flex-column" >

        <Navigation handleAboutClick={this.props.handleAboutClick} />
        <Banner bannerImage={this.props.bannerImage} />

      </div>
    );
  }
}


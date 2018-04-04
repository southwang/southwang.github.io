/* @flow */
// 页面头部

import React from 'react';
import './sight.css';


function Navigation() {
  return (
    <div className="nav background-color" >

    </div>
  );
}

function Banner(props: {
  bannerImage: string,
  height: number,
  fontSize: number,
}) {
  return (
    <div className="banner flex-normal" style={{
      backgroundImage: `url(${props.bannerImage})`,
      height: `${props.height}px`,
    }}>
      <div className="title font-white" style={{
        fontSize: `${props.fontSize}px`
      }}>MINAMI</div>
    </div>
  );
}

type Props = {
  bannerImage: string
}

type State = {
  height: number,
  heightRatio: number,
  navHeight: number,
  fontSize: number,
  fontRatio: number,
  subAreaHeight: number 
}

export default class Sight extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      height: 0,
      heightRatio: 700 / 1920,
      navHeight: 70,
      fontSize: 0,
      fontRatio: 250 / 1920,
      subAreaHeight: 60,
    };
  }

  onResize() {
    if (document.documentElement) {
      const w = document.documentElement.clientWidth;
      this.setState({
        height: w * this.state.heightRatio,
        fontSize: w * this.state.fontRatio
      });
    }
  }

  componentWillMount() {
    this.onResize();
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  render() {
    return (
      <div className="sight flex-column" style={{
        height: `${this.state.height + this.state.navHeight}px`
      }} >
        <Navigation />
        <Banner 
          bannerImage={this.props.bannerImage}
          height={this.state.height}
          fontSize={this.state.fontSize}
        />
      </div>
    );
  }
}


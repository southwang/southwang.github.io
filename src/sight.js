/* @flow */
// 页面头部

import React from 'react';

import './sight.css';

type Props = {
  bannerImage: string
}

function Navigation() {
  return (
    <div className="nav background-color" >

    </div>
  );
}

function Banner(props: Props) {
  return (
    <div className="banner flex-normal" style={{
      backgroundImage: `url(${props.bannerImage})`
    }}>
      <div className="title font-white" >MINAMI</div>
    </div>
  );
}

export default class Sight extends React.Component<Props> {

  render() {
    return (
      <div className="sight flex-column" >
        <Navigation />
        <Banner bannerImage={this.props.bannerImage} />
      </div>
    );
  }
}


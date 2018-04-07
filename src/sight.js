/* @flow */
// 页面头部

import React from 'react';
import './sight.css';


function Navigation() {
  return (
    <div className="nav background-color flex-normal" >

      <div className="flex-normal flex-hv-center mr-auto logo font-white" >
        假装有 LOGO
      </div>
      <div className="about font-white flex-normal flex-hv-center" >
        ABOUT ME
      </div>

    </div>
  );
}

function Banner(props: {bannerImage: string}) {
  return (
    <div className="banner flex-normal flex-hv-center" style={{
      backgroundImage: `url(${props.bannerImage})`,
    }} >

      <div className="title font-white" >
        假装有标题
      </div>

      <div className="sub-area" />

    </div>
  );
}

type Props = {
  bannerImage: string,
}

type State = {
}

export default class Sight extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="sight flex-column" >

        <Navigation />
        <Banner bannerImage={this.props.bannerImage} />

      </div>
    );
  }
}


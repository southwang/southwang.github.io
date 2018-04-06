/* @flow */
// 页面主体

import React from 'react';

import './contents.css';

type Props = {
  backgroundImage: string
}

export default class Contents extends React.Component<Props> {
  render() {
    return (
      <div style={{
        backgroundImage: `url(${this.props.backgroundImage})`
      }}>
        Contents
      </div>
    );
  }
}


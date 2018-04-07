/* @flow */
// 页面主体

import React from 'react';

import './contents.css';

type Props = {
  backgroundImage: string,
  article: Array<{
    [string] : string,
  }>,
}

export default class Contents extends React.Component<Props> {
  render() {
    return (
      <div className="background-color flex-normal article-container" >
        {
          this.props.article.map(a => (
            <div key={a.url} className="article" >
              <div></div>
            </div>
          ))
        }
      </div>
    );
  }
}


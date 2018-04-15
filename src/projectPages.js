/* @flow */

import React from 'react';
import { markdown } from 'markdown';
import { Spring, config } from 'react-spring';
import { Link } from 'react-router-dom';
import ScrollToTop from './scrollToTop';

import './contents.css';
import './project.css';

type projectType = {
  [string]: string | number,
}

type Props = {
  project: projectType,
  baseURL: string,
  projectFooterImage: string,
}

export default class ProjectPages extends React.Component<Props> {

  render() {
    const { project, baseURL, projectFooterImage } = this.props;
    return (
      <Spring from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={config.gentle} >
        {
          styles => (
            <div style={{ ...styles }}
              className="background-color flex-column contents" >
              <div className="project project-content light-shadow">
                <div dangerouslySetInnerHTML={{
                  __html: markdown.toHTML(project.content),
                }} />
                <ScrollToTop />
                <div className="flex-normal flex-v-center project-footer" >
                  <Link className="back font-white" to={baseURL} >返回首页</Link>
                  <img className="project-icon" src={projectFooterImage} alt="icon" />
                </div>
              </div>
            </div>
          )
        }
      </Spring>
    );
  }
}

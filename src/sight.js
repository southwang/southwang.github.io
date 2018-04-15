/* @flow */
// 页面头部

import React from 'react';
import { range } from 'lodash';
import { Spring } from 'react-spring';
import { Link } from 'react-router-dom';
import './sight.css';


/**
 * 生成导航
 * @param {*} props 
 */
function Navigation(props: {
  handleAboutClick: () => void,
  baseURL: string,
}) {
  return (
    <div className="nav font-white flex-normal" >
      <Link to={props.baseURL} className="flex-normal flex-v-center logo font-white" >
        <svg viewBox="0 0 300.68 329.82">
          <title>logo</title>
          <path className="logo-svg transition" d="M541.69,139.53q-23-18.75-57.48-27.56-42.7-10.9-77.55,4.86t-44.48,53.44q-7.55,29.58,5.29,54.86T419.79,281q32.31,24.6,44.62,43.2t7,39.25c-10.08,39.45-43.33,57.9-92,45.47a153.87,153.87,0,0,1-15-5,46.15,46.15,0,0,0,2.46-6.75A45.38,45.38,0,0,0,368.59,385a47,47,0,0,0-10.7-29.57c-10.09-24.86-25.75-48.7-31.85-62.64a3,3,0,0,1,1.37-3.79c42.08-21.48,20.21-58.56,19.93-59,0,0,0,0,0,0l2.6-30.62L321,211.21a.45.45,0,0,1-.34,0c-12.47-5.59-32,.07-32,.07l-29.6-11.94L261.53,231c-16.47,33.15,3.74,50.24,11.13,55.11a4.13,4.13,0,0,1,1.68,4.51c-8.2,30.39-14.3,50.43-18.7,66.54A46.71,46.71,0,0,0,246.25,385a45.47,45.47,0,0,0,1.63,12c6.34,23.11,30.59,40.33,59.54,40.33,19.55,0,36.93-7.85,48.13-20.05,31.05,12.63,80,18.12,102,7.12q33.8-16.92,43.14-53.48,7.92-31-5.5-54T438.7,259.67q-28.29-22.22-39.42-37.28a47.22,47.22,0,0,1-3.34-58.12,24.13,24.13,0,0,1,9.44-10.06A47,47,0,0,1,434.75,144c.91,0,1.8,0,2.7.08a117,117,0,0,1,33.88,3.64c17.79,4.54,27.05,7.3,42,19.33,8.09,6.51,30.6-3,33.16-13A14.17,14.17,0,0,0,541.69,139.53Z" transform="translate(-246.25 -107.51)" />
        </svg>
      </Link>
      <div className="m-auto nav-title text-shadow" >SOUTHWANG</div>
      <div className="about font-white flex-normal flex-hv-center transition"
        onClick={props.handleAboutClick} >
        ABOUT ME
      </div>

    </div>
  );
}

type bannerProps = {
  bannerImage: Array<string>,
  title: Array<string>,
}

type bannerState = {
  active: number,
  old: number,
}

function BannerImage(props: {
  img: string,
  title: string,
  className?: string,
  transform: string,
}) {
  return (
    <div className={
      "banner flex-normal flex-hv-center transition "
      + (
        props.className
          ? props.className : ''
      )
    }
      style={{
        backgroundImage: `url(${props.img})`,
        transform: props.transform,
      }} >
      <div className="title font-white transition" >
        <img className="title-img" src={props.title} alt="title" />
        <div className="small-title font-white" >MINAMI</div>
      </div>
    </div>
  );
}

/**
 * 生成Banner
 */
class Banner extends React.Component<bannerProps, bannerState> {
  constructor(props: bannerProps) {
    super(props);
    this.state = {
      active: 0,
      old: 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.switchBanner(this.countNext());
    }, 8000);
  }

  switchBanner(i) {
    this.setState({
      active: i,
      old: this.state.active,
    })
  }

  shouldComponentUpdate() {
    return true;
  }

  countNext() {
    const active = this.state.active;
    return active + 1 >= this.props.bannerImage.length
      ? 0 : active + 1;
  }

  handleSubClick(active: number) {
    if (this.state.active !== active) {
      this.switchBanner(active);
    }
  }

  render() {
    const active = this.state.active;
    const old = this.state.old;

    return (
      <div className="banner-root flex-normal" >
        <Spring
          from={{ x: old * 100 }}
          to={{ x: active * -100 }}
          config={{ tension: 350, friction: 100 }} >
          {styles => (
            <div className="banner-container" style={{
              transform: `translate3d(${styles.x}%,0,0)`,
            }} >
              {
                this.props.bannerImage.map((img, i) => (
                  <BannerImage
                    transform={`translate3d(${i * 100}%,0,0)`}
                    key={i}
                    img={img}
                    title={this.props.title[i]} />
                ))
              }

            </div>
          )
          }
        </Spring>

        <div className="sub-area flex-normal flex-hv-center" >
          {
            range(this.props.bannerImage.length).map(i => (
              <div key={i}
                className={
                  "o transition " + (active === i ? "active" : "")
                }
                onClick={() => { this.handleSubClick.bind(this)(i) }} />
            ))
          }
        </div>
      </div>
    );
  }
}

type Props = {
  bannerImage: Array<string>,
  handleAboutClick: () => void,
  title: Array<string>,
  baseURL: string,
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

    const {
      bannerImage, title, baseURL
    } = this.props;

    return (
      <div className="sight flex-column" >

        <Navigation baseURL={baseURL}
          handleAboutClick={this.props.handleAboutClick} />
        <Banner bannerImage={bannerImage} title={title} />

      </div>
    );
  }
}


/* @flow */
// 页面头部

import React from 'react';
import { range } from 'lodash';
import { Spring } from 'react-spring';
import './sight.css';
import logo from './img/logo.svg';


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
        <Banner bannerImage={this.props.bannerImage}
          title={this.props.title} />

      </div>
    );
  }
}


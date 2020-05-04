import React, { Component } from 'react';
import Base from './base';


class Selenium extends Component {

  render() {
    const mendel = 'images/portfolio/mendel.jpg';
    const mendelMk2 = 'images/portfolio/mendel_mk2.jpg';

    return (
      <Base id="mendel" title="모듈러 디자인 Iot 화분: Mendel">
        <img alt="" src={mendel} />
        <img alt="" src={mendelMk2} />
        <h3>기간: MAR 2017 ~ JUN 2017</h3>

      </Base>
    )
  }
}

export default Selenium;

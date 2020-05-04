import React, { Component } from 'react';
import Selenium from './modals/selenium';

class Modal extends Component {

  render() {
    // for 문 없애고, modal 은 미리 정의하기

    return (
      <div>
        <Selenium/>
      </div>
    );

  }
}

export default Modal;

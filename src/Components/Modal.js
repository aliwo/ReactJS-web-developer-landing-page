import React, { Component } from 'react';
import Selenium from './modals/selenium';
import Mendel from './modals/mendel';

class Modal extends Component {

  render() {
    return (
      <div>
        <Selenium/>
        <Mendel/>
      </div>
    );
  }
}

export default Modal;

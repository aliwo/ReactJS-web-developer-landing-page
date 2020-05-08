import React, { Component } from 'react';
import Base from './base';
import ltf from './letterfly.png'

class Selenium extends Component {

  render() {
    return (
      <Base id="letterfly" title="Letterfly">

        <img src={ltf} className="modal-image"/>

        <h1><span>셀레니움 결제테스트 자동화</span></h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="1000px" height="auto" viewBox="0 0 592.745 49.209">
          <g id="" transform="translate(-124.37 -190.999)">
            <path d="M246.089,3292.048l.03-.02-16.1-24.589-2.8,1.831,1.878,2.868H124.37l13.041,19.956h0L124.37,3312.05H229.154l-1.786,2.8,2.819,1.8,4.45-6.987,11.481-17.568Z" transform="translate(0 -3076.441)" fill="#e1a61e"/>
            <path d="M363.838,3292.048l.03-.02-16.1-24.589-2.8,1.831,1.878,2.868H242.119l13.041,19.956h0l-13.041,19.956H346.9l-1.786,2.8,2.819,1.8,4.45-6.987,11.481-17.568Z" transform="translate(0 -3076.441)" fill="#ca4740"/>
            <path d="M481.587,3292.048l.03-.02-16.1-24.589-2.8,1.831,1.878,2.868H359.868l13.041,19.956h0l-13.041,19.956H464.652l-1.786,2.8,2.819,1.8,4.45-6.987,11.481-17.568Z" transform="translate(0 -3076.441)" fill="#535b95"/>
            <path d="M599.336,3292.048l.03-.02-16.1-24.589-2.8,1.831,1.878,2.868H477.617l13.041,19.956h0l-13.041,19.956H582.4l-1.786,2.8,2.819,1.8,4.45-6.987,11.481-17.568Z" transform="translate(0 -3076.441)" fill="#0088ce"/>
            <path d="M717.085,3292.048l.03-.02-16.1-24.589-2.8,1.831,1.878,2.868H595.366l13.041,19.956h0l-13.041,19.956H700.15l-1.786,2.8,2.819,1.8,4.45-6.987,11.481-17.568Z" transform="translate(0 -3076.441)" fill="#1a9887"/>
            <text transform="translate(152.065 218.94)" fill="#fff" font-size="12" font-family="NanumBarunGothicBold, NanumBarunGothic"><tspan x="0" y="0">셀레니움 실행</tspan></text>
            <text transform="translate(285.237 218.94)" fill="#fff" font-size="12" font-family="NanumBarunGothicBold, NanumBarunGothic"><tspan x="0" y="0">로그인</tspan></text>
            <text transform="translate(512.221 218.94)" fill="#fff" font-size="12" font-family="NanumBarunGothicBold, NanumBarunGothic"><tspan x="0" y="0">상품 선택</tspan></text>
            <text transform="translate(396.648 218.941)" fill="#fff" font-size="12" font-family="NanumBarunGothicBold, NanumBarunGothic"><tspan x="0" y="0">포인트 사용</tspan></text>
            <text transform="translate(631.224 218.941)" fill="#fff" font-size="12" font-family="NanumBarunGothicBold, NanumBarunGothic"><tspan x="0" y="0">결제 완료!</tspan></text>
          </g>
        </svg>

        <h1></h1>

      </Base>
    )
  }
}

export default Selenium;

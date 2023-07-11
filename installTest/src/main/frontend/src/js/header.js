import React, {useEffect, useState} from 'react';
import '../css/header.css';
import axios from 'axios';
import $ from 'jquery';
import DropdownMenu from '../jsx/DropdownMenu';
import DropdownLan from '../jsx/DropdownLan';
import styled, { css } from "styled-components";
import Bar from '../components/Bars';
import Menu from '../components/Menu';
import logo from '../img/logo.png';
import member from '../img/member.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas ,far)


const Close = styled.button`
  position: relative;
  top: 0;
  right: 0;
  background-color: #13b6bc;
  border: 0;
  padding: 22px;
  z-index: 10;
  cursor: pointer;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #472662;
`;

const Outside = styled.div`
  width: 25vw;
  min-width: 200px;
  max-width: 250px;
  height: 100vh;
  transform: translateX(-101%);
  transition: all 0.5s cubic-bezier(0, 0.05, 0, 1.3);
  overflow: hidden;

  &.in {
    transform: translateX(0);
    transition: 0;
  }

  > div {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    display: block;
    width: 100%;
    height: 100%;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0 100% 100% 0;
    transition: all 0.25s cubic-bezier(1, 0.05, 1, 1.5);
    transition-delay: 0.5s;
    background-color: whitesmoke;
  }

  &.in > div {
    border-radius: 0;
    transition-delay: 0s;
  }

  /* material animation*/
  > div:before {
    content: "";
    width: 2100px;
    height: 2100px;
    display: block;
    background-color: white;
    position: absolute;
    top: -50%;
    left: -100%;
    z-index: -1;
    transition: all 0.75s linear;
    transition-delay: 0.15s;
    transform: scale(0);
    transform-origin: top right;
    border-radius: 1000px;
  }
  &.in > div:before {
    transform: scale(1);
  }


`;

function Header() {
   const [hello, setHello] = useState('')
   const [view, setView] = useState(false);
   const [isActive, setActive] = useState(true);

     const handleClick = () => {
       console.log("active!");
       setActive(!isActive);
     };


    return (
        <>
        <div className="header_nav">
            <div className="navbar-header">
                <a className="navbar-brand navbar-brand-center" href="#">
                    <img className="navbar-brand-logo" src={logo} alt="mcloudoc"/>
               </a>
            </div>
             <Close onClick={handleClick}>
              <Bar isActive={isActive} />
            </Close>
            <div className="nav navbar-left">
                <ul className="navbar-nav">
                   <li className="">
                       <a href="#1">채팅</a>
                   </li>
                   <li className="">
                      <a href="#2">번역</a>
                   </li>
                    <li className="">
                      <a href="#3">문서봇</a>
                    </li>
                    <li className="">
                      <a href="#4">자동화봇</a>
                    </li>
                </ul>
            </div>
            <div className="nav navbar-right " >
                <ul className="navbar-nav" >
                    <li>
                         <FontAwesomeIcon icon="fa-regular fa-bell" size="xl" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon="fa-regular fa-circle-user" size="xl" style={{color: "gray"}} /><span>이름</span>
                    </li>
                    <li><DropdownLan /></li>
                    <li ><DropdownMenu /></li>
                </ul>
            </div>

         </div>
         <div>
            <Outside className={isActive ? "in" : null}>
              <div className="inside">
                <Menu isActive={isActive} />
              </div>
            </Outside>
         </div>
        </>
    );
}

export default Header;


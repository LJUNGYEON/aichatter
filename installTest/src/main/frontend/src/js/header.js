import React, {useEffect, useState} from 'react';
import axios from 'axios';
import $ from 'jquery';
import DropdownMenu from '../jsx/DropdownMenu';
import DropdownLan from '../jsx/DropdownLan';
import styled, { css } from "styled-components";

import logo from '../img/logo.png';
import member from '../img/member.jpg';
import '../css/elephant.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas ,far)


function Header() {
   const [hello, setHello] = useState('')
   const [view, setView] = useState(false);
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))

    }, []);
    return (
      <div className="layout-header" >
          	<div className="navbar navbar-default">
          		<div className="navbar-header">
          			<a className="navbar-brand navbar-brand-center" href="#">
                        <img className="navbar-brand-logo" src={logo} alt="mcloudoc"/>
                    </a>
          		</div>
          		<ul className="nav navbar-nav navbar-left">
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
          		<ul className="nav navbar-nav navbar-right" style={{marginRight: "0px"}}>
          		    <li className="">
                       <div>
                          <h4 className="navbar-text text-center"><FontAwesomeIcon icon="fa-regular fa-bell" size="xl" /></h4>
                       </div>
                    </li>
                    <li className="">
                        <div>
                           <h4 className="navbar-text text-center"><FontAwesomeIcon icon="fa-regular fa-circle-user" size="xl" style={{color: "gray",}} /><span style={{ paddingLeft: "5px"}}>이름</span></h4>
                        </div>
                    </li>
                    <li><DropdownLan /></li>
                    <li ><DropdownMenu /></li>
                </ul>
          	</div>
          </div>
    );
}

export default Header;


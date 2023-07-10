import React, {useEffect, useState} from 'react';
import axios from 'axios';
import $ from 'jquery';
import '../css/elephant.css';
import '../css/custom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export function SideBar() {

   const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))

           $("#sidemenu").removeClass("sidenav-collapsed");
        $("#sidemenu > li > a > .icon").removeClass("sidenav-icon");
        $("#sidemenu > li > ul").removeClass("sidenav-collapsed");
        $(".sidenav.level-2>li>a").attr("style","padding-left:43px !important");
    }, []);

    return (

      <div className="layout-sidebar">
        <div className="layout-sidebar-backdrop"></div>
        <div className="layout-sidebar-body">
          <div className="custom-scrollbar">
            <nav id="sidenav" className="sidenav-collapse">
              <ul id="sidemenu" className="sidenav level-1">
      			<li className="sidenav-search">
                    <form className="sidenav-form" >
                      <div className="form-group form-group-sm">
                        <div className="input-with-icon">
                          <input id="sidemenu_search" className="form-control" type="text" placeholder="Search..."/>
                          <span className="icon icon-search input-icon"></span>
                        </div>
                      </div>
                    </form>
                  </li>
      	  		<li className="sidenav-item " style={{padding: "0px 0px 0px 5px",borderBottom: "solid 1px #e7e7e7"}}>
      				<a href="#" aria-haspopup="true" style={{paddingLeft:"30px", fontWeight: "bold"}}>
      					<FontAwesomeIcon icon="fa-solid fa-chevron-down" />
      					<span className="sidenav-label">탐색기</span>
      				</a>
      			</li>
      			<li className="sidenav-item " style={{padding: "0px 0px 0px 5px",borderBottom: "solid 1px #e7e7e7"}}>
      				<a href="#" aria-haspopup="true" style={{paddingLeft: "30px",fontWeight: "bold"}}>
      					<FontAwesomeIcon icon="fa-solid fa-chevron-down" />탐색기
      					<span className="sidenav-label">탐색기</span>
      				</a>
      			</li>
      			<li className="sidenav-item " style={{padding: "0px 0px 0px 5px",borderBottom: "solid 1px #e7e7e7"}}>
      				<a href="#" aria-haspopup="true" style={{paddingLeft: "30px",fontWeight: "bold"}}>
      					<FontAwesomeIcon icon="fa-solid fa-chevron-down" />
      					<span className="sidenav-label">탐색기</span>
      				</a>
      			</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
}

export default SideBar;
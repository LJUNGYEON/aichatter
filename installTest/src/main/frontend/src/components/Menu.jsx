import styled from "styled-components";
import { useState } from 'react';
import data from '../test/data'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas ,far)


const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  line-height: 2;

  > li {
    background: whitesmoke;
    opacity: 0;
    padding: 12px 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    color: gray;
    /* -webkit-transition: all 0.25s linear; */
    transition: all 0.25s linear;
  }
  &.in > li {
    /* -webkit-transform: translateX(0%); */
    transform: translateX(0%);
    opacity: 1;
  }

`;
const Menu = ({ isActive }) => {
   let [chatList,setChatList]=useState(data);
   let [updateFlag, setUpdateFlag]= useState([
    chatList.map((a,i)=>{
        return(false);
    })
   ]);
   console.log(updateFlag);
  return (
    <>
      <Ul className={isActive ? "in" : null}>
        <li>
           <label className="custom-control custom-control-success custom-checkbox">
               <input name="chkAll" className="custom-control-input" type="checkbox" value="chkAll" />
               <span className="custom-control-indicator"></span>
               <span className="custom-control-label">
                    채팅 목록 <FontAwesomeIcon icon="fas fa-plus-large" />
               </span>
            </label>
        </li>
        {
            chatList.map(function(a,i){
                return (
                    <ChatList chatList={chatList} index={i} updateFlag={updateFlag} setUpdateFlag={setUpdateFlag}/>
                )
            })
        }

      </Ul>
    </>
  );
};
function ChatList(props){
    return(
        <li>
            <div>
            <FontAwesomeIcon icon="far fa-message-dots" />
            <p>{props.chatList[props.index].title}</p>
                <input type="hidden" value={props.chatList[props.index].title} />
             <button onClick={()=>{
               let updateFlagTmp = [...props.updateFlag];
               updateFlagTmp[props.index] = true;
               props.setUpdateFlag(updateFlagTmp);
             }} >수정</button>
             <button>삭제</button>
            </div>
        </li>
    )
}
export default Menu;

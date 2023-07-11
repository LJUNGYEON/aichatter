import styled from "styled-components";
import { useState , useRef } from 'react';
import data from '../test/data'
import '../css/side.css';
import $ from 'jquery';
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
                    채팅 목록 <FontAwesomeIcon icon="fa-solid fa-plus" />
               </span>
            </label>
        </li>
        {
            chatList.map(function(a,i){
                return (
                    <ChatList index={i} chatList={chatList} setChatList={setChatList} updateFlag={updateFlag} setUpdateFlag={setUpdateFlag}/>
                )
            })
        }

      </Ul>
    </>
  );
};
function ChatList(props){
    return(
        <li className="chatList">
            <div className="chatList-main">
             <FontAwesomeIcon icon="fa-regular fa-message" style={{float:"left"}} />

             {
                props.updateFlag[props.index] === true?
                    <>
                        <input className="chat-title-input" type="text" id={"cTitle"+props.chatList[props.index].id} defaultValue={props.chatList[props.index].title} />
                            <p className="chat-lsit-btn" onClick={()=>{
                            let updateFlagTmp = [...props.updateFlag];
                            updateFlagTmp[props.index] = false;
                            props.setUpdateFlag(updateFlagTmp);

                            let chatListTmp = [...props.chatList];
                            console.log(document.getElementById("cTitle"+props.chatList[props.index].id).value);
                            chatListTmp[props.index].title = document.getElementById("cTitle"+props.chatList[props.index].id).value;
                            props.setChatList(chatListTmp);

                         }} ><FontAwesomeIcon icon="fa-solid fa-check" /></p>
                    </>
                 :
                 <>
                    <p  className="chat-title">{props.chatList[props.index].title}</p>
                      <p className="chat-lsit-btn" onClick={()=>{
                        let updateFlagTmp = [...props.updateFlag];
                        updateFlagTmp[props.index] = true;
                        props.setUpdateFlag(updateFlagTmp);

                      }} ><FontAwesomeIcon icon="fa-solid fa-pen" /></p>
                 </>

             }
             <p className="chat-lsit-btn" onClick={()=>{
                    let updateFlagTmpDelete = [...props.updateFlag];
                    updateFlagTmpDelete.splice(props.index, 1);
                    props.setUpdateFlag(updateFlagTmpDelete);

                    let chatListTmpDelete = [...props.chatList];
                    chatListTmpDelete.splice(props.index, 1);
                    props.setChatList(chatListTmpDelete);
             }}><FontAwesomeIcon icon="fa-solid fa-trash-can" /></p>
            </div>
        </li>
    )
}
export default Menu;

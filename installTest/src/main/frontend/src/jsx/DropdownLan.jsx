import React from "react";
import styled, { css } from "styled-components";
import useDetectClose from "../js/useDetectClose";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const DropdownLan = () => {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const [boardIsOpen, boardRef, boardHandler] = useDetectClose(false);

  const logoutClickHandler = () => {
    console.log("logout");
  };

  return (
    <Wrapper>

       <DropdownContainer>
        <DropdownButton onClick={boardHandler} ref={boardRef}>
         <FontAwesomeIcon icon="fa-solid fa-globe" />
        </DropdownButton>
        <Menu isDropped={boardIsOpen}>
          <Ul>
            <Li>
              <LinkWrapper href="#2-1">한국어</LinkWrapper>
            </Li>
           <Li>
             <LinkWrapper href="#2-2">English</LinkWrapper>
           </Li>
           <Li>
             <LinkWrapper href="#2-3">中文(简体)</LinkWrapper>
           </Li>
           <Li>
            <LinkWrapper href="#2-4">日本語</LinkWrapper>
           </Li>
          </Ul>
        </Menu>
      </DropdownContainer>


    </Wrapper>
  );
};

export default DropdownLan;

const Wrapper = styled.div`
  margin: 0px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 19px;
  background: #13b6bc;
  width: 50px;
  height: 70px;
  font-weight: bold;
`;

const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
`;

const DropdownButton = styled.div`
  cursor: pointer;
`;

const Menu = styled.div`
  background: #13b6bc;
  position: absolute;
  top: 52px;
  left: 50%;
  width: 100px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color:  #13b6bc;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

const Ul = styled.ul`
  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li``;

const LinkWrapper = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: white;
`;

const Logout = styled.div`
  cursor: pointer;
  font-size: 16px;
  display: block;
  text-decoration: none;
  color: white;
  font-size: 19px;
`;

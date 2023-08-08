import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #8da8d8;
  position: fixed;
  background-color: #f3f3f3;
  top: 0;
`;

const HeaderInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .nav {
    display: flex;
    
    li {
      font-size: 14px;
      padding: 0 20px;
    }

    li + li {
      border-left: 1px solid #333;
    }

    li:last-child {
      padding-right: 0;
    }
  }

  @media screen and (max-width: 768px) {

    .logo {
      font-size: 22px;
    }

    .nav li {
      font-size: 12px;
      padding: 0 10px;
    }
  }
`;

const Logo = styled.div`
  font-size: 26px;

  :hover {
    /* color: aliceblue; */
  }
`;

const StyledFooter = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 30px;
  border-top: 1px solid #c7c7c7;
`;

function Layout(props) {
  return (
    <>
      {/* 헤더 영역 */}
      <StyledHeader id='top'>
        <HeaderInner className='inner'>
          <Logo className='cursor-pointer logo'>Yumi Kim</Logo>
          <ul className='nav'>
            <li className='cursor-pointer'><a href='#profile'>Profile</a></li>
            <li className='cursor-pointer'><a href='#introduce'>Introduce</a></li>
            <li className='cursor-pointer'><a href='#education'>Educations</a></li>
            <li className='cursor-pointer'><a href='#work'>Works</a></li>
            <li className='cursor-pointer'><a href='#project'>Project</a></li>
            <li className='cursor-pointer'><a href='#other'>Others</a></li>
            <li className='cursor-pointer'><a href='#skill'>Skills</a></li>
          </ul>
        </HeaderInner>
      </StyledHeader>

      <Outlet />

      {/* 푸터 영역 */}
      <StyledFooter>
        <ul>
          <li></li>
        </ul>
      </StyledFooter>
    </>
  );
}

export default Layout;
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: calc(100% - 40px);
  width: 100%;
  height: 65px;
  position: fixed;
  background-color: #f3f3f3;
  border-bottom: 1px solid #8da8d8;
  top: 0;
  left: 0;
  @media screen and (max-width: 440px) {
    border-bottom: 0;
  }
`;

const HeaderInner = styled.div`
  height: 100%;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .nav {
    display: flex;
    
    li {
      font-size: 14px;
      padding: 0 15px;
    }

    li + li {
      border-left: 1px solid #333;
    }
    li:first-child {
      padding-left: 0;
    }
    li:last-child {
      padding-right: 0;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;

    .logo {
      font-size: 22px;
    }

    .nav {
      
      li {
        font-size: 12px;
        padding: 0 10px;
      }
    }
  }
`;

const Logo = styled.div`
  font-size: 26px;
`;

const NavWrapper = styled.div`
  @media screen and (max-width: 440px) {
    width: 100%;
    /* overflow-x: scroll; */
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 5px;
    border-bottom: 1px solid #8da8d8;
  }
`;

const StyledFooter = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 30px;
  border-top: 1px solid #c7c7c7;
`;

const FooterInner = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 14px;
  }

  ul {
    display: flex;
    text-align: left;

    li {
      display: flex;
      p + p {
        margin-left: 10px;
      }
    }
    li + li {
      margin-left: 50px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    p {
      font-size: 12px;
    }

    ul {
      li {
        display: list-item;
        p + p {
          margin-left: 0;
        }
      }
    }
  }
`;

function Layout(props) {
  const thisYear = new Date;

  return (
    <>
      {/* 헤더 영역 */}
      <StyledHeader id='top'>
        <HeaderInner className='inner'>
          <Logo className='cursor-pointer logo'><a href='#'>Yumi Kim</a></Logo>
          <NavWrapper>
            <ul className='nav'>
              {/* <li className='cursor-pointer'><a href='#profile'>Profile</a></li> */}
              <li className='cursor-pointer'><a href='#contact'>Contact</a></li>
              <li className='cursor-pointer'><a href='#introduce'>Introduce</a></li>
              <li className='cursor-pointer'><a href='#education'>Education</a></li>
              <li className='cursor-pointer'><a href='#work'>Work</a></li>
              <li className='cursor-pointer'><a href='#project'>Project</a></li>
              <li className='cursor-pointer'><a href='#other'>Others</a></li>
              <li className='cursor-pointer'><a href='#skill'>Skills</a></li>
            </ul>
          </NavWrapper>
        </HeaderInner>
      </StyledHeader>

      <Outlet />

      {/* 푸터 영역 */}
      <StyledFooter>
        <FooterInner className='inner'>
          <p>&copy;{thisYear.getFullYear()} by Yumi Kim.</p>
          <ul>
            <li>
              <p>Phone.</p>
              <p>010-2990-5887</p>
            </li>
            <li>
              <p>Email.</p>
              <p>kyumi16@gmail.com</p>
            </li>
          </ul>
        </FooterInner>
      </StyledFooter>
    </>
  );
}

export default Layout;
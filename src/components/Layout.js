import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: orange;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;

const Logo = styled.div`
  font-size: 24px;

  :hover {
    color: aliceblue;
  }
`;

const StyledFooter = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  background-color: #aeeaa0;
`;

function Layout(props) {
  return (
    <>
      {/* 헤더 영역 */}
      <StyledHeader>
        <HeaderInner className='inner'>
          <Logo className='cursor-pointer'>YUMI KIM</Logo>
          <ul>
            <li>Profile</li>
            <li>Project</li>
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
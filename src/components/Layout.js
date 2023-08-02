import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
`;

const HeaderInner = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav {
    display: flex;
    font-size: 20px;
    
    li {
      padding: 0 20px;
    }

    li + li {
      border-left: 1px solid #333;
    }
  }
`;

const Logo = styled.div`
  font-size: 26px;

  :hover {
    color: aliceblue;
  }
`;

const StyledOutlet = styled(Outlet)`
  margin-top: 80px;
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
      <StyledHeader>
        <HeaderInner className='inner'>
          <Logo className='cursor-pointer'>Yumi Kim</Logo>
          <ul className='nav'>
            <li className='cursor-pointer'>Profile</li>
            <li className='cursor-pointer'>Project</li>
          </ul>
        </HeaderInner>
      </StyledHeader>

      <StyledOutlet />

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
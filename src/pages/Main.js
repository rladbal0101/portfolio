import React, { useState } from 'react';
import Profile from '../components/Profile';
import Educations from '../components/Educations';
import Works from '../components/Works';
import Projects from '../components/Projects';
import Others from '../components/Others';
import Skills from '../components/Skills';

import { BsArrowUpCircleFill, BsArrowUpCircle } from "react-icons/bs";
import styled from 'styled-components';

const Scroll = styled.div`
  svg {
    font-size: 25px;
    color: #80d8da;

    :hover {
      color: red;
    }
  }
`;

function Main(props) {
  const [mouseOver, setMouseOver] = useState(true);

  if(mouseOver) {
    setMouseOver(!mouseOver);
  }

  return (
    <div className='inner'>
      {/* 
        제목, 직무명, 인적사항, 자기소개, 학력 및 교육사항, 경력, 프로젝트, 직무 관련 활동, 기타 경력 및 경험, 스킬
      */}
      <Profile />
      <Educations />
      <Works />
      <Projects />
      {/* <Others /> */}
      <Skills />

       {/* SCROLL TO TOP */}
      <Scroll id="to-top" className='cursor-pointer'>
        {
          mouseOver
          ? <BsArrowUpCircle />
          : <BsArrowUpCircle />
        }        
      </Scroll>
    </div>
  );
}

export default Main;
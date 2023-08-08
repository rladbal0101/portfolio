import React from 'react';
import Profile from '../components/Profile';
import Introduce from '../components/Introduce';
import Educations from '../components/Educations';
import Works from '../components/Works';
import Projects from '../components/Projects';
import Others from '../components/Others';
import Skills from '../components/Skills';

import { BsArrowUpCircleFill } from "react-icons/bs";
import styled from 'styled-components';

const Scroll = styled.a`

  svg {
    font-size: 30px;
    color: #aaa;
    position: fixed;
    bottom: 20px;
    right: 20px;

    :hover {
      color: #80d8da;
    }
  }
`;

function Main(props) {

  return (
    <div className='inner'>
      {/* 
        제목, 직무명, 인적사항, 자기소개, 학력 및 교육사항, 경력, 프로젝트, 직무 관련 활동, 기타 경력 및 경험, 스킬
      */}
      <Profile />
      <Introduce />
      <Educations />
      <Works />
      <Projects />
      <Others />
      <Skills />
      <Scroll href='#'>
        <BsArrowUpCircleFill />
      </Scroll>
    </div>
  );
}

export default Main;
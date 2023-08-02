import React from 'react';
import Profile from '../components/Profile';
import Education from '../components/Education';
import Work from '../components/Work';
import Projects from '../components/Projects';
import Other from '../components/Other';
import Skills from '../components/Skills';


function Main(props) {
  return (
    <div className='inner'>
      {/* 
        제목, 직무명, 인적사항, 자기소개, 학력 및 교육사항, 경력, 프로젝트, 직무 관련 활동, 기타 경력 및 경험, 스킬킬
      */}
      <Profile />
      <Education />
      <Work />
      <Projects />
      <Other />
      <Skills />
    </div>
  );
}

export default Main;
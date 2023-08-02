import React from 'react';
import styled from 'styled-components';

const SkillsWraaper = styled.div`
  padding: 50px 0;
  border-top: 1px dashed #80d8da;

  li {
    display: flex;
    align-items: center;
    text-align: left;
  }
`;

function Skills(props) {
  return (
    <SkillsWraaper className='mt-5'>
      <h2>Skills</h2>
        <ul className='mt-5'>
          <li className='mt-2'>
            <h3>UI</h3>
            <p className='ml-1'>HTML, CSS, JavaScript(ES6+), React, Redux, ajax(Axios), Bootstrap</p>
          </li>
          <li className='mt-2'>
            <h3>Language</h3>
            <p className='ml-1'>JavaScript</p>
          </li>
          <li className='mt-2'>
            <h3>MiddleWare</h3>
            <p className='ml-1'>Redux</p>
          </li>
          <li className='mt-2'>
            <h3>개발도구</h3>
            <p className='ml-1'>Git, Chrome Dev Tool, Visual Studio Code</p>
          </li>
          <li className='mt-2'>
            <h3>협업도구</h3>
            <p className='ml-1'>GitHub, Figma</p>
          </li>
          <li className='mt-2'>
            <h3>품질관리도구</h3>
            <p className='ml-1'>LightHouse, W3C, Validators</p>
          </li>
        </ul>
    </SkillsWraaper>
  );
}

export default Skills;
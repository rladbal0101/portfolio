import React from 'react';
import styled from 'styled-components';
import dataSkills from "../dataSkills.json";

const SkillsWraaper = styled.div`
  padding: 50px 0;
  border-top: 1px dashed #80d8da;

  &#skill {
    padding-top: 65px;
  }

  li {

    h3 {
      font-weight: 700;
      white-space : nowrap;
      padding: 0 8px;
    }
  }
`;

function Skills(props) {
  return (
    <SkillsWraaper className='mt-5' id='skill'>
      <h1>Skills</h1>
        <ul className='mt-5'>
          {
            dataSkills.map(skill => 
              <li className='mt-2'>
                <h3>{skill.title}</h3>
                <p className='ml-1'>{skill.content}</p>
              </li>
            )
          }
        </ul>
    </SkillsWraaper>
  );
}

export default Skills;
import React from 'react';
import styled from 'styled-components';
import dataSkills from "../dataSkills.json";
import Table from 'react-bootstrap/Table';

const SkillsWraaper = styled.div`
  padding: 50px 0;
  border-top: 1px dashed #80d8da;

  &#skill {
    padding-top: 65px;
  }

  table {
    width: 100%;

    td {
      border: 1px solid #aaa;
      padding: 4px 8px;
  
      &.skill-title {
        font-weight: 700;
        white-space : nowrap;
        text-align: center;
        vertical-align: middle;
        border-left: none;
      }
    
      &.skill-content {
        border-right: none;
      }
    }
  }
`;

function Skills(props) {
  return (
    <SkillsWraaper className='mt-5' id='skill'>
      <h1>Skills</h1>
      <table className='mt-5'>
        {
          dataSkills.map(skill => 
            <tr>
              <td className='skill-title'>{skill.title}</td>
              <td className='skill-content'>{skill.content}</td>
            </tr>
          )
        }
      </table>
    </SkillsWraaper>
  );
}

export default Skills;
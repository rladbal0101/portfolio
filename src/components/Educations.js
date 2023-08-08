import React, { useEffect } from 'react';
import styled from 'styled-components';
import dataEducation from "../dataEducation.json";
import { BsNodePlus, BsThreeDots } from "react-icons/bs";

const EducationWraaper = styled.div`
  padding: 50px 0;
  border-top: 1px dashed #80d8da;

  &#education {
    padding-top: 65px;
  }
`;

const Education = styled.div`
  text-align: left;

  p {
    margin-bottom: 10px;
  }
`;

const CurriculumText = styled.ul`
  list-style-type: '- ';
  
  li {
    margin-left: 10px;
  }
`;

const ResultText = styled.ul`
  font-size: 25px;
  /* list-style-type: '- '; */
  list-style-type: circle;

  li {
    margin-left: 20px;
  }

`;

function Educations(props) {

  return (
    <EducationWraaper className='mt-5' id='education'>
      <h2>Education</h2>
      {
        dataEducation.reverse().map(education => 
          <Education className='mt-5' key={education.id}>
            <h3 className='mb-1'>{education.title}</h3>
            <p>교육기간 : {education.period}</p>
            <CurriculumText className='mb-1'>교육내용 : 
              {education.curriculum.map(curriculum => <li>{curriculum}</li>)}                
            </CurriculumText>
            <ResultText className='mb-1'><BsThreeDots />
              {education.result.map(result => <li>{result}</li>)}                
            </ResultText>
            {/* <p>교육활동 : 
              <p>{education.content}</p>
            </p> */}
          </Education>
        )
      }
    </EducationWraaper>
  );
}

export default Educations;
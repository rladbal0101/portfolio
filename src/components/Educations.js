import React, { useEffect } from 'react';
import styled from 'styled-components';
import dataEducation from "../dataEducation.json";

const EducationWraaper = styled.div`
  padding: 50px 0;
  border-top: 1px dashed #80d8da;
`;

const Education = styled.div`
  text-align: left;
`;

const TitleText = styled.h3`
  margin-bottom: 10px;
`;
const PeriodText = styled.p`
`;
const ContentText = styled.ul`
`;

function Educations(props) {
  return (
    <EducationWraaper className='mt-5'>
      <h2>Education</h2>
      
      {
        dataEducation.reverse().map(education => 
          <Education className='mt-5'>
            <TitleText>{education.title}</TitleText>
            <PeriodText>교육기간 : {education.period}</PeriodText>
            <ContentText>교육내용 : 
              {education.content.map(content => <li>- {content}</li>)}                
            </ContentText>
          </Education>
        )
      }
    </EducationWraaper>
  );
}

export default Educations;
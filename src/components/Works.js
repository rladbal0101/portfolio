import React from 'react';
import styled from 'styled-components';
import dataWork from "../dataWork.json";

const WorkWraaper = styled.div`
  padding: 50px 0;
  border-top: 1px dashed #80d8da;
`;

const Work = styled.div`
  text-align: left;
`;

const WorkTitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const CompanyText = styled.h3`

`;
const PositionText = styled.p`
  margin-left: 10px;
`;

const PeriodText = styled.p`

`;
const FieldText = styled.p`
`;

const ContentText = styled.ul`
  li {
    padding-left: 10px;

  }
`;

function Works(props) {
  return (
    <WorkWraaper className='mt-5'>
      <h2>Work</h2>
      {
        dataWork.reverse().map(work =>
          <Work className='mt-5'>
            <WorkTitleContainer>
              <CompanyText>{work.company}</CompanyText>
              <PositionText>{work.position}</PositionText>
            </WorkTitleContainer>
            <PeriodText>{work.period}</PeriodText>
            <FieldText>직무 : {work.field}</FieldText>
            <ContentText>담당업무 : 
              {work.content.map(content => <li>- {content}</li>)}  
            </ContentText>
          </Work>
        )
      }
    </WorkWraaper>
  );
}

export default Works;
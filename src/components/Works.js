import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dataWork from "../dataWork.json";

const WorkWraaper = styled.div`
  padding: 50px 0;
  border-top: 1px dashed #80d8da;

  &#work {
    padding-top: 65px;
  }
`;

const Work = styled.div`
  text-align: left;

  & + & {
    margin-top: 30px;
  }
`;

const WorkTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PositionText = styled.p`
  margin-left: 10px;
`;

const ContentText = styled.ul`
  list-style-type: '- ';

  li {
    margin-left: 10px;
  }
`;

function Works(props) {
  const [sortWorkData, setSortWorkData] = useState([]);

  useEffect(() => {
    const reverseData = dataWork.reverse();
    setSortWorkData(reverseData);
  }, []);
  
  return (
    <WorkWraaper className='mt-5' id='work'>
      <h1>Work</h1>
      <div className='mt-5'>
        {
          sortWorkData.map(work =>
            <Work>
              <WorkTitleContainer>
                <h3>{work.company}</h3>
                <PositionText>{work.position}</PositionText>
              </WorkTitleContainer>
              <p>{work.period}</p>
              <p>직무 : {work.field}</p>
              <ContentText>담당업무 : 
                {work.content.map(content => <li>{content}</li>)}  
              </ContentText>
            </Work>
          )
        }
      </div>
    </WorkWraaper>
  );
}

export default Works;
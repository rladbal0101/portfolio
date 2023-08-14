import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dataEducation from "../dataEducation.json";

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

const TextContainer = styled.ul`
  list-style-type: '- ';
  
  li {
    margin-left: 10px;
  }
`;

function Educations(props) {
  const [sortEducationData, setSortEducationData] = useState([]);

  useEffect(() => {
    const reverseData = dataEducation.reverse();
    setSortEducationData(reverseData);
  }, []);

  return (
    <EducationWraaper className='mt-5' id='education'>
      <h2>Education</h2>
      {
        sortEducationData.map(education => 
          <Education className='mt-5' key={education.id}>
            <h3 className='mb-1'>{education.title}</h3>
            <p>교육기간 : {education.period}</p>
            <TextContainer className='mb-1'>교육내용 : 
              {education.curriculum.map(curriculum => <li>{curriculum}</li>)}                
            </TextContainer>
            <TextContainer className='mb-1'>교육활동 : 
              {education.result.map(result => <li>{result}</li>)}                
            </TextContainer>
          </Education>
        )
      }
    </EducationWraaper>
  );
}

export default Educations;
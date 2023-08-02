import React from 'react';
import styled from 'styled-components';

const WorkWraaper = styled.div`
  padding: 50px 0;
  border-top: 1px dashed #80d8da;

`;

function Work(props) {
  return (
    <WorkWraaper className='mt-5'>
      <h2>Work</h2>
      
    </WorkWraaper>
  );
}

export default Work;
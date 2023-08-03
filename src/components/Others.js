import React from 'react';
import styled from 'styled-components';

const OtherWraaper = styled.div`
  padding: 50px 0;
  border-top: 1px dashed #80d8da;

`;

const Other = styled.div`

`;

function Others(props) {
  return (
    <OtherWraaper className='mt-5'>
      <h2>Other Experience</h2>
      <Other className='mt-5'>
      </Other>
    </OtherWraaper>
  );
}

export default Others;
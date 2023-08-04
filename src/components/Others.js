import React from 'react';
import styled from 'styled-components';

const OtherWraaper = styled.div`
  padding: 50px 0;
  border-top: 1px dashed #80d8da;

`;

const Other = styled.div`
  text-align: left;

  ul {
    list-style-type: square;
    padding-left: 20px;

  }
`;

function Others(props) {
  return (
    <OtherWraaper className='mt-5'>
      <h2>Other Experience</h2>
      <Other className='mt-5'>
        <h3 className='mb-3'>인천국제공항 & 스카이몬스</h3>
        {/* <p>
          들어갈 내용: 1) 회사 2) 부서/직함 3) 기간 4) 진행한 일 5) 사용한 기술 6) 성과와 수치 중심의 결과(예: 매출 신장률, 수상 경력, 언론 기사 등) 등
        </p> */}
        <p>인천국제공항 제2터미널</p>
        <ul className='mt-1'>
          <li>인천공항 T2 오픈에 따른 인천국제공항 홈페이지 리뉴얼 작업</li>
          <li>인천국제공항, 인천국제공항공사 서브 페이지 구현/교통, 주차 페이지</li>          
        </ul>
        <p className='mt-3'>스카이몬스</p>
        <ul className='mt-1'>
          <li>
            인천국제공항 관련 사이트 스카이몬스(인천국제공항 배드민턴단) 메인 페이지 및 서브페이지 헤더 작업
          </li>
        </ul>
      </Other>
    </OtherWraaper>
  );
}

export default Others;
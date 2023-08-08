import React from 'react';
import styled from 'styled-components';

const OtherWraaper = styled.div`
  padding: 50px 0;
  border-top: 1px dashed #80d8da;

  &#other {
    padding-top: 65px;
  }
`;

const Other = styled.div`
  text-align: left;

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
`;

function Others(props) {
  return (
    <OtherWraaper className='mt-5' id='other'>
      <h2>Other Experience</h2>
      <Other className='mt-5'>
        {/* <p>
          들어갈 내용: 1) 회사 2) 부서/직함 3) 기간 4) 진행한 일 5) 사용한 기술 6) 성과와 수치 중심의 결과(예: 매출 신장률, 수상 경력, 언론 기사 등) 등
        </p> */}
        <h3 className='mb-2'>인천국제공항 제2터미널 오픈에 따른 홈페이지 리뉴얼 작업</h3>
        <p className='mt-3'><a href='https://www.airport.kr/ap/ko/index.do' target='_blank'>인천국제공항</a></p>
        <ul className='mt-1'>
          <li>인천국제공항 서브 페이지&#40;교통&#44; 주차 페이지&#41; 구현</li>
        </ul>
        <p className='mt-3'><a href='https://www.airport.kr/co/ko/index.do' target='_blank'>인천국제공항공사</a></p>
        <ul className='mt-1'>
          <li>인천국제공항공사 서브 페이지&#40;공사소개 CEO메시지&#44; 일반현황&#41; 구현</li>
        </ul>
        <p className='mt-3'><a href='https://www.airport.kr/sm/index.do' target='_blank'>스카이몬스</a></p>
        <ul className='mt-1'>
          <li>인천국제공항 관련 사이트 스카이몬스&#40;인천국제공항 배드민턴단&#41; 메인 페이지 작업</li>
          <li>서브페이지 헤더 작업</li>
        </ul>
      </Other>
    </OtherWraaper>
  );
}

export default Others;
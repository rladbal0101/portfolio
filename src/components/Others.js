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

  div p {
    text-indent: 0.5em;
  }
`;

function Others(props) {
  return (
    <OtherWraaper className='mt-5' id='other'>
      <h1>Other Experience</h1>
      <Other className='mt-5'>
        {/* <p>
          들어갈 내용: 1) 회사 2) 부서/직함 3) 기간 4) 진행한 일 5) 사용한 기술 6) 성과와 수치 중심의 결과(예: 매출 신장률, 수상 경력, 언론 기사 등) 등
        </p> */}
        <h3 className='mb-2'>인천국제공항 제2터미널 오픈에 따른 홈페이지 리뉴얼 작업</h3>
        <p className='mt-3'><a href='https://www.airport.kr/ap/ko/index.do' target='_blank'>1. 인천국제공항</a></p>
        <ul className='mt-1'>
          <li>인천국제공항 서브 페이지&#40;교통&#44; 주차 페이지&#41; 구현</li>
        </ul>
        <p className='mt-3'><a href='https://www.airport.kr/co/ko/index.do' target='_blank'>2. 인천국제공항공사</a></p>
        <ul className='mt-1'>
          <li>인천국제공항공사 서브 페이지&#40;공사소개 CEO메시지&#44; 일반현황&#41; 구현</li>
        </ul>
        <p className='mt-3'><a href='https://www.airport.kr/sm/index.do' target='_blank'>3. 스카이몬스</a></p>
        <ul className='mt-1'>
          <li>인천국제공항 관련 사이트 스카이몬스&#40;인천국제공항 배드민턴단&#41; 메인 페이지 작업</li>
          <li>서브페이지 헤더 작업</li>
        </ul>
        <div className='mt-3'>
          <p>
            인천국제공항 제2터미널의 홈페이지 리뉴얼 작업에 참여한 경험이 있습니다. 제2터미널의 오픈을 기념하여 홈페이지를 새롭게 구성하고 개선하는 작업이었습니다. 제가 맡은 역할은 메인페이지의 작업과 서브페이지의 구현이었습니다. HTML, CSS, JavaScript를 활용하여 웹페이지를 구성하고, 사용자 경험을 향상시키기 위해 반응형 웹 디자인을 적용했습니다.
          </p>
          <p className='mt-1'>
            프로젝트를 통해 프론트엔드 개발에 대한 실무 경험을 쌓을 수 있었고, 협업과 커뮤니케이션의 중요성을 깨닫게 되었습니다. 제2터미널 홈페이지 리뉴얼은 많은 사람들에게 사용되는 중요한 웹페이지였기 때문에, 정확한 요구사항을 파악하고 효율적인 작업을 위해 팀원들과의 원활한 소통이 필요했습니다. 프로젝트 기간 동안 발생하는 문제를 팀원들과 함께 해결하고, 야근과 철야를 하며 일정을 맞추기 위해 노력했습니다. 앞으로도 다양한 프로젝트에 도전하여 실력을 향상시키고, 최신 웹 기술과 트렌드를 습득하여 사용자에게 더 나은 경험을 제공하는 프론트엔드 개발자로 성장하고 싶습니다.
          </p>
        </div>
      </Other>
    </OtherWraaper>
  );
}

export default Others;
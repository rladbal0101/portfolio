import React from 'react';
import styled from 'styled-components';

const IntroduceWrapper = styled.div`
  padding: 50px 0;
  border-top: 1px dashed #80d8da;

  &#introduce {
    padding-top: 65px;
  }
  `;

const IntroduceParagraph = styled.div`

  & + & {
    margin-top: 50px;
  }

  p {
    text-align: left;
    margin-top: 20px;
    text-indent: 0.5em;

    span {
      color: #db002b;
    }
  }
`;

function Introduce(props) {
  return (
    <IntroduceWrapper className='mt-5' id='introduce'>
      <IntroduceParagraph>
        <h2>안녕하세요&#63;</h2>
        <p className='intro'>
          대학시절 배운 전공지식을 바탕으로 국비지원 수업을 들으며 웹 서비스를 기획/개발/배포하며 프론트엔드 개발을 꿈꾸고 있는 김유미 입니다. <br />
        </p>
      </IntroduceParagraph>
      <IntroduceParagraph>
        <h2>새로운 시작</h2>
        <p>
          대학 졸업 후 취업을 고민하며 1년동안 교내 학군단에서 근무하면서 진로에 대해 고민하는 시간을 가졌습니다. 지금까지 무엇인가를 배우며 흥미있었던 일이 무엇일까 생각해보던 중 전공 선택 과목인 웹서버프로그래밍 수업을 듣고 내가 작성한 코드들이 바로 결과물로 보여지는 것에 재미를 느꼈던 것이 생각났습니다.
          이후 국비수업을 수강하며 프론트엔드 개발에 꿈을 키웠습니다.
        </p>
        <p>
          학원 수료 후 <span>인천국제공항 제2터미널 오픈에 따른 사이트 리뉴얼</span>로 인한 프로젝트에 참여하게 되었습니다. 단기간 참여한 프로젝트임에도 사이트 오픈이 얼마 남지 않은 시기에 투입되어 짧은 시간동안 많은 것을 배울 수 있었습니다. 하지만 큰 기대와는 달리 프로젝트 종료 이후 취업의 문턱은 높았습니다.
        </p>
        <p>
          취업이 되지 않아 친구의 권유로 아르바이트를 시작하고 아르바이트로 시작한게 직업이 되고, 퇴사 후에도 다른 직종에 종사했지만 늘 첫 시작은 주변의 권유나 추천으로 시작하게 되었습니다.
        </p>
        <p>
          직전 직장의 사업장 이전으로 인해 퇴사를 하고 다시 한번 취업의 길에 들어섰을 때, <span>과연 내가 내 의지로 시작한 일이 있었을까</span> 라는 생각이 들었습니다.
          다양한 분야의 일을 하면서 내 의지로 시작한 일이 없는 것 같다고 느꼈습니다.
          그래서 이번엔 <span>내 의지대로 내가 하고싶은 일을 하자</span> 라는 마음으로 이전에 이루지 못한 프론트엔드 개발에 도전하게 되었습니다.
        </p>
      </IntroduceParagraph>
      <IntroduceParagraph>
        <h2>변화와 함께하는 개발자</h2>
        <p>
          프론트엔드 개발은 다른 분야에 비해 트렌드 변화가 빠르다고 생각합니다. 때문에 뒤처지지 않기 위해서는 새로운 기술에 대해 끊임없이 공부를 해야한다고 생각합니다.
        </p>
        <p>
          6년간 다른 분야에 종사하는 동안 프론트엔드 개발 환경들은 많이 변했지만 기본적인 지식에 변화된 것을 배우는 것은, 결코 어렵지 않았습니다.
        </p>
        <p>
          앞으로도 발전하는 개발 트렌드를 따라가며 변화를 두려워하지 않는, 변화와 함께하는 개발자가 되겠습니다.
        </p>
      </IntroduceParagraph>
    </IntroduceWrapper>
  );
}

export default Introduce;
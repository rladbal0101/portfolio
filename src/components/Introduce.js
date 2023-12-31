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
      <h1>Introduce</h1>
      <IntroduceParagraph>
        <h2 className='mt-5'>프론트엔드 개발자로서의 꿈을 향해 노력하고 있는 김유미입니다</h2>
        <p className='intro'>
          수 많은 전공 과목들 중 전공선택 과목이었던 웹 서버 프로그래밍 수업에서 큰 흥미를 느끼게 되었습니다. <span>작성한 코드들이 실제 웹 페이지로 구현되어 상호작용하는 것을 보며 느낀 창조적인 성취감</span>과 코드가 실제로 동작하는 것을 보며 느낀 재미는 저에게 큰 자극이 되었습니다. 이러한 경험을 통해 프론트엔드 개발에 대한 열정이 더욱 커졌습니다.
        </p>
        <p>
          이러한 경험을 통해 프론트엔드 개발에 대한 열정이 더욱 커졌습니다. 사용자들과 상호작용하는 웹페이지를 개발함으로써 사람들에게 가치를 전달하고 편리함을 제공하는 일에 큰 의미를 느끼며, 이를 통해 끊임없이 성장하고 싶습니다. 저의 끈질긴 노력과 열정을 통해 멋진 프론트엔드 개발자로서의 길을 걷고자 합니다.
        </p>
      </IntroduceParagraph>
      <IntroduceParagraph>
        <h2>새로운 시작</h2>
        <p>
          대학 졸업 후, 교내 학군단&#40;학생군사교육단&#41;에서의 근무 경험을 통해 진로에 대한 고민과 흥미를 지속적으로 탐구해왔습니다. 이를 계기로 국비지원 수업을 수강하였고 학원에서의 수료 후, <span>인천국제공항 제2터미널 사이트 리뉴얼 프로젝트에 참여</span>하게 되었습니다. 이 프로젝트는 사이트 오픈이 다가온 시점에 투입되어 짧은 기간 동안 많은 경험을 쌓을 수 있는 기회였습니다. 프로젝트에서는 시간적 제약과 고객의 요구를 빠르게 반영하며 사용자 경험을 개선하는 작업은 도전적이었지만, 그 과정에서의 성장과 성취감은 더욱 큰 자신감을 부여해 주었습니다. 이 경험을 통해 유연한 문제 해결 능력과 효율적인 협업의 중요성을 깨달았습니다. 하지만 큰 기대와는 달리 프로젝트 종료 이후 취업의 문턱은 높았습니다.
        </p>
        <p>
          지금까지의 경험을 돌아보면, 주변의 권유나 추천에 의해 시작한 일이 많았습니다. 그러나 이번만큼은 스스로의 선택에 의해 <span>내가 진정으로 원하는 분야에서 일하고 싶다</span>는 마음으로, 프론트엔드 개발에 도전하고자 합니다. 프론트엔드 개발은 끊임없이 변화하는 웹 기술을 통해 사용자들에게 탁월한 경험과 편리함을 제공하는 과정에서 큰 가치를 지니는 일이라고 믿습니다.
        </p>
      </IntroduceParagraph>
      <IntroduceParagraph>
        <h2>약속을 어기지 않는 성실함</h2>
        <p>
          초 , 중, 고, 대학교에서 개근을 한 경험을 통해 약속을 어기지 않는 것을 중요하게 여기고 실천했습니다. 이러한 성실함은 항상 책임감을 가지고 일을 처리하며, 신뢰성 있는 사람으로 인정받을 수 있게 해주었습니다. 제 성격으로 인해 주변 사람들은 저에게 믿음과 안정성을 느끼며 협력을 원하는 경향이 있습니다.
        </p>
        <p>
          그러나 부탁을 거절하기 힘들어 하는 성격으로 인해 개인 시간을 희생할 때가 있습니다. 다른 사람들에게 도움을 주려고 하다 보면, 제 우선 순위를 무시하는 경우가 발생할 수 있습니다. 이러한 단점을 극복하기 위해, 부탁을 받았을 때 현실적으로 얼마나 시간과 노력을 할애할 수 있는지를 신중하게 고려하고, 우선순위를 설정하는 데 노력하고 있습니다. 이러한 접근을 통해 부탁을 거절하는 것이 필요한 상황에서도 적절하게 대처할 수 있도록 노력하고 있습니다.
        </p>
      </IntroduceParagraph>
      <IntroduceParagraph>
        <h2>변화와 함께하는 개발자</h2>
        <p>
          그동안 다른 분야에 종사하면서 느꼈던 것은 프론트엔드 개발 환경이 매우 빠르게 변화한다는 것입니다. 하지만 <span>전공 지식을 바탕으로 한 기본적인 개념과 원리</span>를 알고 있기에 변화된 개발 트렌드에 빠르게 적응할 수 있었고, 앞으로도 끊임없는 공부와 학습을 통해 뒤처지지 않고 성장하고자 합니다. 이러한 변화에 적응하면서 얻은 경험은 더 나은 개발자로 성장하는 데 큰 도움이 되었습니다.
        </p>
        <p>
          저의 여러 경력은 해당 직종에서 맡은 역할을 수행하며 다양한 능력을 키워왔음을 나타냅니다. 이 과정에서 사람들과의 <span>원활한 커뮤니케이션 방법</span>을 배우고 <span>문제 해결 능력</span>을 강화했습니다. 또한 조직 내부의 업무 운영, 문서 작업, 회계 지원 등을 효율적으로 수행할 수 있는 능력을 갖추게 되었습니다.
        </p>
        <p>
          앞으로도 새로운 개발 트렌드와 기술을 열린 마음으로 수용하고 익히며, 기존의 지식을 바탕으로 새로운 도전을 두려워하지 않고 변화와 함께 나아가는 개발자로서 조직의 성장과 발전에 기여하고 싶습니다.
        </p>
      </IntroduceParagraph>
    </IntroduceWrapper>
  );
}

export default Introduce;
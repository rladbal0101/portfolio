import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import Main from './pages/Main';
import Layout from './components/Layout';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: 'HallymGothic-Regular';
    font-size: 20px;
    box-sizing: border-box;
    background-color: #F3F3F3;
  }

  #root {
    text-align: center;
  }

  * {
    box-sizing: inherit;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .inner {
    max-width: 860px;
    margin: 0 auto;
  }

  h2 {
    font-size: 28px;
  }
  h3 {
    font-size: 20px;
  }
  h4 {
    font-size: 18px;
  }

  p {
    font-size: 16px;
  }
  li {
    font-size: 14px;
  }
  .nav li {
    font-size: 20px;
  }

  .mt-1 {
    margin-top: 10px;
  }
  .mt-2 {
    margin-top: 20px;
  }
  .mt-3 {
    margin-top: 30px;
  }
  .mt-5 {
    margin-top: 50px;
  }
  .ml-1 {
    margin-left: 10px;
  }
  .ml-2 {
    margin-left: 20px;
  }

  @media screen and (max-width: 768px) {
    body {
      font-size: 18px;
    }
    .inner {
      max-width: 500px;
    }
    h2 {
      font-size: 25px;
    }
    h3 {
      font-size: 18px;
    }
    h4 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
    }
    li {
      font-size: 12px;
    }
    .nav li {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 375px) {
    .inner {
      max-width: 350px;
    }
  }
`;

function App() {
  return (
    <>
      {/* 오픈 그래프와 트위터 카드 설정 (링크 프리뷰) */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="yumi-portfolio" />
      <meta property="og:title" content="Piece of your wish" />
      <meta property="og:description" content="프론트엔드 개발을 꿈꾸는 김유미 입니다." />
      <meta property="og:image" content="images/profile_img.jpg" />
      <meta property="og:url" content="https://yumi-portfolio.netlify.app" />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="Pieceofyourwish" />
      <meta property="twitter:title" content="Piece of your wish" />
      <meta property="twitter:description" content="피스오브유어위시는 용산에 있는 플라워샵으로 1:1 맞춤 주문으로 진행되고 있습니다." />
      <meta property="twitter:image" content="./images/pieceofyourwish.png" />
      <meta property="twitter:url" content="https://famous-cannoli-c5b4ed.netlify.app" />
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

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

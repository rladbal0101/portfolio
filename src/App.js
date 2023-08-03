import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import Main from './pages/Main';
import Layout from './components/Layout';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: 'HallymGothic-Regular';
    font-size: 16px;
    padding: 0 20px;
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
    /* padding: 0 20px; */
  }

  h2 {
    font-size: 1.75rem; // 28px
  }
  h3 {
    font-size: 1.25rem; // 20px
  }
  h4 {
    font-size: 1.125rem; // 18px
  }

  p {
    // font-size: 16px;
  }
  li {
    font-size: 0.875rem; // 14px
  }
  .nav li {
    font-size: 1.25rem; // 20px
  }

  .mt-1 {
    margin-top: 0.625rem; // 10px
  }
  .mt-2 {
    margin-top: 1.25rem; // 20px
  }
  .mt-3 {
    margin-top: 1.875rem; // 30px
  }
  .mt-5 {
    margin-top: 3.125rem; // 50px
  }
  .ml-1 {
    margin-left: 0.625rem; // 10px
  }
  .ml-2 {
    margin-left: 1.25rem; // 20px
  }

  @media screen and (max-width: 768px) {
    body {
      font-size: 14px;
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

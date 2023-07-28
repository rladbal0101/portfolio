import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import Main from './pages/Main';
import Layout from './components/Layout';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: 'GangwonState';
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
    width: 960px;
    margin: 0 auto;
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

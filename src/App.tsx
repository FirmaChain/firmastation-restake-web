import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { RootContainer } from './styles/main';
import Main from './pages/main';
import theme from './themes';
import './default.css';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <RootContainer>
          <Main/>
        </RootContainer>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

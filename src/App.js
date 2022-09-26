import { ThemeProvider } from 'styled-components';
import WeddingPage from './pages/Wedding';
import GlobalStyle from './styles/global';
import { theme } from './styles/themes';
import "swiper/css/bundle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WeddingPage />
    </ThemeProvider>
  );
}

export default App;

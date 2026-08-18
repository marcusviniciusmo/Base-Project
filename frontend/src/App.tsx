import { ThemeContextProvider } from './contexts/ThemeContextProvider';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Router } from './routes/Router';
import { GlobalStyle } from './styles/Global';

export function App() {
  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>

        <GlobalStyle />
      </ThemeContextProvider>
    </>
  );
}

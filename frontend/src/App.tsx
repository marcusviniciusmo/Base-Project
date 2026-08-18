import { ThemeContextProvider } from './contexts/ThemeContextProvider';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { GlobalStyle } from './styles/Global';

export function App() {
  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <GlobalStyle />
      </ThemeContextProvider>
    </>
  );
}

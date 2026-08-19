import { ThemeContextProvider } from './contexts/ThemeContextProvider';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Router } from './routes/Router';
import { Footer } from './components/Footer';
import { GlobalStyle } from './styles/Global';

export function App() {
  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
          <Header />
          <Menu />
          <Router />
          <Footer />
        </BrowserRouter>

        <GlobalStyle />
      </ThemeContextProvider>
    </>
  );
}

import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { GlobalStyle } from './styles/Global';

export function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Base Project</h1>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
}

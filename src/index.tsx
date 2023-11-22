import CssBaseline from '@suid/material/CssBaseline';
import { ThemeProvider } from '@suid/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import App from './components/App';

const cache = createCache({ key: 'css' });

function Main() {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </CacheProvider>
  );
}

ReactDOM.hydrate(<Main />, document.querySelector('#root'));

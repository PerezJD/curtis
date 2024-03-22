import React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import theme from "../theme";
import App from "../client/components/App";

// Get page name from window.location
let pageName = window.location.pathname.split('/').pop();
if (!pageName) {
  pageName= 'index';
} else {
  pageName = pageName.replace('.html','');
}

const pageProps = import((`../../data/pages/${pageName}.json`))
  .then((pageProps) => {
    console.log(pageProps);
    const root = createRoot(document.querySelector('#root') as HTMLElement);
    root.render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App {...pageProps} />
      </ThemeProvider>
    );
  });

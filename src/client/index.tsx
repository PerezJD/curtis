import React from 'react';
import { hydrate } from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import theme from "../theme";
import App from "./components/App";
import readJsonFile from "../server/readJsonFile";
import {PageProps} from "../models";

// Get page name from window.location
let pageName = window.location.pathname.split('/').pop();
if (!pageName) {
  pageName= 'index';
} else {
  pageName = pageName.replace('.html','');
}

console.log(pageName);
const pageProps = readJsonFile<PageProps>(`./data/pages/${pageName}.json`);

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App {...pageProps} />
    </ThemeProvider>
  );
}

hydrate(<Main />, document.querySelector('#root'));

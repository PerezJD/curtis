import React from 'react';
import { hydrate } from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import {PageData} from "../models";
import readJsonFile from "../server/readJsonFile";
import theme from "../theme";
import App from "./components/App";

// Get page name from window.location
const pageName = window.location.pathname.split('/').pop();
const pageData = readJsonFile<PageData>(`./data/pages/${pageName}.json`);

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App pageData={pageData} />
    </ThemeProvider>
  );
}

hydrate(<Main />, document.querySelector('#root'));

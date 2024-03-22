import React from 'react';
import { hydrate } from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import {PageProps} from "../models";
import readJsonFile from "../server/readJsonFile";
import theme from "../theme";
import App from "./components/App";

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

hydrate(<Main />, document.querySelector('#root'));

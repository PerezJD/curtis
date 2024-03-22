import React from 'react';
import {renderToString} from 'react-dom/server';

import {CssBaseline, ThemeProvider} from "@mui/material";

import createCache from "@emotion/cache";
import { CacheProvider } from '@emotion/react';
import createEmotionServer from "@emotion/server/create-instance";

import theme from '../theme';
import {PageData} from "../models";
import App from "../client/components/App";

export default class PageRenderer {

  static async render(pageData: PageData) {
    const cache = createCache({ key: 'css' });
    const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

    // Render the components to a string.
    const html = await renderToString(
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline
            to build upon. */}
          <CssBaseline />
          <App pageData={pageData}/>
        </ThemeProvider>
      </CacheProvider>
    );

    // Grab the CSS from emotion
    const emotionChunks = extractCriticalToChunks(html);
    const emotionCss = constructStyleTagsFromChunks(emotionChunks);

    return PageRenderer.#renderHtmlTemplate(html, emotionCss, pageData);
  }

  static #renderHtmlTemplate(html: string, css: string, pageData: PageData): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>${pageData.title}</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            rel="stylesheet" 
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap"
          >
          ${css}
          <script src="./js/bundle.js" defer></script>
        </head>
        <body>
          <div id="root">${html}</div>
        </body>
      </html>
    `;
  }

}

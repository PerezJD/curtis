import {renderToStringAsync} from "solid-js/web";

// Styles
// @ts-ignore
import { CacheProvider } from "emotion-solid";
import createCache, {type EmotionCache} from "@emotion/cache";
import createEmotionServer from "@emotion/server/create-instance";

import {createTheme, CssBaseline, Theme, ThemeProvider} from "@suid/material";

// App
import App from "../src/components/App";
import {PageData} from "../src/components/models";
import readJsonFile from "./readJsonFile";
import {render} from "./PageTemplate";

const DATA_PATH = './data';
const PAGES_PATH = `${DATA_PATH}/pages`;

const renderPage = async (pageData: PageData, theme: Theme) => {
  const cache = createCache({ key: 'css' });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);
  const fullTheme = createTheme(theme);

  // Render the components to a string.
  const html = await renderToStringAsync(() =>
    <CacheProvider value={cache}>
      <ThemeProvider theme={fullTheme}>
        <CssBaseline />
        <App pageData={pageData} />
      </ThemeProvider>
    </CacheProvider>
  );

  // Grab the CSS from emotion
  const emotionChunks = extractCriticalToChunks(html);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);

  return render(html, '', pageData);
};

const req = async (props: any) => {
  let pageName = props.url.split('/')[1];
  if (!pageName) {
    pageName = 'index';
  }

  const pageData = await readJsonFile<PageData>(`${PAGES_PATH}/${pageName}.json`);
  const theme = await readJsonFile<Theme>(`${DATA_PATH}/theme.json`);
  return await renderPage(pageData, theme);
};

export default req;

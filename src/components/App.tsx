import {CssBaseline, ThemeProvider} from "@suid/material";
import createCache from "@emotion/cache";
import {CacheProvider} from "../EmotionCache";
import Header from "./header/Header";
import PageContainer from "./page/PageContainer";
import HeroComponent from "./hero/HeroComponent";
import PageComponent from "./page/PageComponent";
import Footer from "./footer/Footer";
import {PageProps} from "./models";

const cache = createCache({ key: 'css' });

const App = ({ pageData, theme }: PageProps) => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
        <PageContainer>
          {!!pageData.hero && <HeroComponent {...pageData.hero} />}
          {pageData.components.map(componentProps => <PageComponent {...componentProps} />)}
        </PageContainer>
        <Footer/>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;

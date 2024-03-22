import React from 'react';
import createCache from "@emotion/cache";
import Header from "./header/Header";
import PageContainer from "./page/PageContainer";
import HeroComponent from "./hero/HeroComponent";
import PageComponent from "./page/PageComponent";
import Footer from "./footer/Footer";
import {PageProps} from "../../models";

// Don't pass the theme, use the same theme JSON fil
const App = ({ pageData }: PageProps) => {
  return (
    <>
        <Header/>
        <PageContainer>
          {!!pageData.hero && <HeroComponent {...pageData.hero} />}
          {pageData.components.map((componentProps, index) => <PageComponent key={`${componentProps.component}-component-${index}`} {...componentProps} />)}
        </PageContainer>
        <Footer/>
    </>
  );
};

export default App;

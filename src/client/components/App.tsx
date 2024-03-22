import React from 'react';
import Header from "./header/Header";
import PageContainer from "./page/PageContainer";
import HeroComponent from "./hero/HeroComponent";
import PageComponent from "./page/PageComponent";
import Footer from "./footer/Footer";
import {PageProps} from "../../models";

// Don't pass the theme, use the same theme JSON fil
const App = ({ hero, components }: PageProps) => {
  return (
    <>
        <Header/>
        {hero && <HeroComponent {...hero} />}
        <PageContainer>
          {components && components.map((componentProps, index) => <PageComponent key={`${componentProps.component}-component-${index}`} {...componentProps} />)}
        </PageContainer>
        <Footer/>
    </>
  );
};

export default App;

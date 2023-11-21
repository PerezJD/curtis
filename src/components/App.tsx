import Header from "./header/Header";
import PageContainer from "./page/PageContainer";
import HeroComponent from "./hero/HeroComponent";
import PageComponent from "./page/PageComponent";
import Footer from "./footer/Footer";
import {PageProps} from "./models";

const App = ({ pageData }: PageProps) => {
  return (
    <>
      <Header/>
      <PageContainer>
        {!!pageData.hero && <HeroComponent {...pageData.hero} />}
        {pageData.components.map(componentProps => <PageComponent {...componentProps} />)}
      </PageContainer>
      <Footer/>
    </>
  );
};

export default App;

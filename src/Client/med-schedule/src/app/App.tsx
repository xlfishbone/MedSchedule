import React from 'react';
import './App.scss';
import {SideNavBar} from './layout/SideNavBar';
import {PageWrapper} from './layout/PageWrapper';
import {Footer} from './layout/Footer';
import {Header} from './layout/Header';
import {MainContent} from './layout/MainContent';

const App = () => {
  return (
    <div id="wrapper">
      <SideNavBar></SideNavBar>
      <PageWrapper>
        <Header></Header>
        <MainContent></MainContent>
        <Footer></Footer>
      </PageWrapper>
    </div>
  );
};

export default App;

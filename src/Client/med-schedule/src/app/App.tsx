import React from 'react';
import './App.scss';
import {SideNavBar} from './layout/SideNavBar';
import {PageWrapper} from './layout/PageWrapper';
import {Footer} from './layout/Footer';
import {Header} from './layout/Header';
import {MainContent} from './layout/MainContent';
import { Switch, Route } from 'react-router-dom';
import { EmployeeForm } from './employee/EmployeeForm';
import { ExampleScreen } from './example/ExampleScreen';

const App = () => {
  return (
    <div id="wrapper">
      <SideNavBar></SideNavBar>
      <PageWrapper>
        <Header></Header>
        <MainContent>
          {/* this is where I want my stuff to go */}
          <Switch>
            <Route path="/employees">
              <EmployeeForm />
            </Route>
            <Route path="/">
              <ExampleScreen />
            </Route>
          </Switch>
        </MainContent>
        <Footer></Footer>
      </PageWrapper>
    </div>
  );
};

export default App;

import React from 'react';
import './App.scss';
import {SideNavBar} from './layout/SideNavBar';
import {PageWrapper} from './layout/PageWrapper';
import {Footer} from './layout/Footer';
import {Header} from './layout/Header';
import {MainContent} from './layout/MainContent';
import {Switch, Route} from 'react-router-dom';
import {EmployeeForm} from './employee/EmployeeForm';
import {ExampleScreen} from './example/ExampleScreen';

const App = () => {
  return (
    <div id="wrapper">
      <SideNavBar />
      <PageWrapper>
        <Header />
        <MainContent>
          <Switch>
            <Route path="/employees">
              <EmployeeForm employeeId={1} />
            </Route>
            <Route path="/">
              <ExampleScreen />
            </Route>
          </Switch>
        </MainContent>
        <Footer />
      </PageWrapper>
    </div>
  );
};

export default App;

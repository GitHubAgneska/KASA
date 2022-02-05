import React, {Fragment, Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
/* import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'*/
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import ScrollToTop from './components/elements/ScrollToTop';

import Header  from './components/layout/Header'
import Footer from './components/layout/Footer'

import NotFoundPage from './components/containers/404'
import About from './components/containers/About'

const Rental = lazy(()=> import('./components/containers/Rental'))
const Home = lazy(() => import('./components/containers/Home') )


const App = () =>  {

    return (
      <div className="App">
        <div className="container">
              
              <Router>
              <Header/>
                <Fragment>
                <Suspense fallback={<div>Loading...</div>}>
                    <ScrollToTop />
                    <Switch>
                      <Route exact path="/" render={() => <Redirect to="/home" />} />
                      <Route exact path="/home" component={Home} />
                      <Route exact path="/rental/:id" component={Rental} />
                      <Route exact path="/about" component={About} />
                      <Route component={NotFoundPage} />
                    </Switch>
                  </Suspense>
                </Fragment>
              <Footer />
              </Router>
      
        </div>
      </div>
    );
}

export default App

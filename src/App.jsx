import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './App.module.scss';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import NoMatch from "./components/NoMatch/NoMatch";
import Checklist from './containers/Checklist/Checklist';
import Result from './containers/Result/Result';
import ErrorBoundary from './hoc/ErrorBoundary/ErrorBoundary';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Test from './store/Test';

function App({ updateIframe }) {

  useEffect(() => {
    if (window.location !== window.parent.location) 
      updateIframe(true);
    else 
      updateIframe(false);
  }, [updateIframe]);

  return (
    <CssBaseline>
      <div className={classes["App"]}>
        <ErrorBoundary>
          <Layout>
            <BrowserRouter>
              <Switch>
                <Route path='/' exact component={Home}>
                </Route>
                <Route path='/result' exact component={Result}>
                </Route>
                <Route path='/checklist' component={Checklist} >
                </Route>
                <Route path="*" component={NoMatch}>
                </Route>
              </Switch>
            </BrowserRouter>
            {/* <Test></Test> */}
          </Layout>
        </ErrorBoundary>
      </div>
    </CssBaseline>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateIframe: (isIframe) => dispatch({ type: 'iframeUpdated', payload: isIframe }) 
  }
}

export default connect(null, mapDispatchToProps)(App);

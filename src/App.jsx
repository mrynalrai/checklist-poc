import { BrowserRouter, Route, Switch } from 'react-router-dom';
import classes from './App.module.scss';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import NoMatch from "./components/NoMatch/NoMatch";
import Checklist from './containers/Checklist/Checklist';
import Result from './containers/Result/Result';
import ErrorBoundary from './hoc/ErrorBoundary/ErrorBoundary';

function App() {
  return (
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
      </Layout>

      </ErrorBoundary>
    </div>
  );
}

export default App;

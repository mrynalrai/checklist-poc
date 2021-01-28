import { BrowserRouter, Route, Switch } from 'react-router-dom';
import classes from './App.module.scss';
import Layout from './hoc/Layout/Layout';
import Home from './Home/Home';
import NoMatch from "./components/NoMatch/NoMatch";
import Checklist from './Checklist/Checklist';
import Result from './Result/Result';

function App() {
  return (
    <div className={classes["App"]}>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home}>
            </Route>
            <Route path='/result' exact component={Result}>
            </Route>
            <Route path='/:player' component={Checklist} >
            </Route>
            <Route path="*" component={NoMatch}>
            </Route>
          </Switch>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;

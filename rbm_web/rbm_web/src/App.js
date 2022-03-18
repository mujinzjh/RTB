/*
 * @Author: mujin
 * @Date: 2022-03-18 16:03:22
 * @LastEditTime: 2022-03-18 17:17:19
 * @Description: 
 */
import './App.css';
import { Router, Switch, Route, Redirect, BrowserRouter, HashRouter } from 'react-router-dom'
import history from './Utils/history';

import Page1 from './Components/component.jsx'
import Page2 from './Components/component1.jsx'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/page1" component={Page1}></Route>
          <Route exact path="/page2" component={Page2}></Route>
          <Route exact path="/" render={() =>
            <Redirect to="/page1" />
          }>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

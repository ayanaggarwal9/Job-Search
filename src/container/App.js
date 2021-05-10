
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import ShowJobTitle from '../components/ShowJobTitle';
import EditJobTitle from '../components/EditJobTitle';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/' exact component={ShowJobTitle} />
          <Route path='/editjob/:id' component={EditJobTitle} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Fragment>)
}

export default App;
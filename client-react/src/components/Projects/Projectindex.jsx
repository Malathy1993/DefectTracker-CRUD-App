import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListProject from "./ListProject"
import AddProject from "./AddProject"
 import EditProject from "./EdiProject"

class Projectindex extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={ListProject} />
          <Route path="/AddProject" exact component={AddProject} />
          <Route path="/EditProject/:id" exact component={EditProject} />
          <Route path="/BackProjectList" exact component={ListProject} />
        </Switch>
      </Router>
    );
  }
}

export default Projectindex;
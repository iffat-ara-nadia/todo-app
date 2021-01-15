import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import TodoList from "./components/todolist";
import CreateTodo from "./components/create";
import EditTodo from "./components/edit";
import Navbar from "./components/navbar";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/todolist" component={TodoList}></Route>
          <Route path="/edit/:id" component={EditTodo}></Route>
          <Route path="/create" component={CreateTodo}></Route>
          <Redirect from="/" exact to="/todolist"></Redirect>
        </Switch>
      </div>
    );
  }
}

export default App;

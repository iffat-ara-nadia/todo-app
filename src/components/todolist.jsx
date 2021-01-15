import React, { Component } from "react";
// import { toast } from "react-toastify";
import axios from "axios";
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";
import TodosTable from "./common/todosTable";
import _ from "lodash";

class TodoList extends Component {
  state = {
    todos: [],
    currentPage: 1,
    pageSize: 7,
    sortColumn: { path: "priority", order: "asc" },
  };

  async componentDidMount() {
    const { data: todos } = await axios.get("http://localhost:3800/api/todos");
    //TypeError: can't get property of undefined map(),coz i forgot to write await )
    console.log(todos);
    this.setState({ todos });
  }

  handleDelete = async (todo) => {
    //console.log(exercise);
    const originalTodos = this.state.todos;
    const todos = this.state.todos.filter((t) => t._id !== todo._id);
    this.setState({ todos });

    try {
      await axios.delete("http://localhost:3800/api/todos/" + todo._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        console.error("This has already been deleted");
    }

    this.setState({
      todos: originalTodos,
    });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    console.log(sortColumn);
    this.setState({ sortColumn });
  };

  render() {
    const count = this.state.todos.length;

    const { todos: allTodos, currentPage, pageSize, sortColumn } = this.state;

    const sorted = _.orderBy(allTodos, [sortColumn.path], [sortColumn.order]); //forgot to write this line to render the sort in browser.

    const todos = paginate(sorted, currentPage, pageSize);

    return (
      <div>
        <h3 style={{ marginTop: 30, textAlign: "center" }}>All Todos ..</h3>

        <TodosTable
          todos={todos}
          sortColumn={sortColumn}
          onSort={this.handleSort}
          onDelete={this.handleDelete}
        />

        <Pagination
          items={count}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default TodoList;

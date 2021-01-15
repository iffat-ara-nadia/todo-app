import React, { Component } from "react";
import { Link } from "react-router-dom";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class TodosTable extends Component {
  columns = [
    { path: "description", label: "Description" },
    { path: "responsible", label: "Responsible" },
    { path: "priority", label: "PRiority" },
    {
      key: "actions",
      content: (todo) => (
        <div>
          <Link to={"/edit/" + todo._id}>
            {/* <i className="fas fa-pen-square"></i> */}

            <button className="btn btn-success btn-small mr-1">Edit</button>
          </Link>
          <button
            className="btn btn-danger btn-small mr-1"
            onClick={() => this.props.onDelete(todo)}
          >
            Delete
          </button>
          {/* <button>
                  <i className="fas fa-trash"></i>
                </button> */}
        </div>
      ),
      label: "Actions",
    },
  ];

  render() {
    const { todos, sortColumn, onSort } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />

        <TableBody columns={this.columns} data={todos} />
      </table>
    );
  }
}

export default TodosTable;

{
  /* <thead className="thead-dark">
<tr>
  <th onClick={() => this.raiseSort("description")}>Description</th>
  <th onClick={() => this.raiseSort("responsible")}>Responsible</th>
  <th onClick={() => this.raiseSort("priority")}>PRiority</th>
  <th>Actions</th>
</tr>
</thead> 

<tbody>
          {todos.map((todo) => (
            <tr className="table-danger" key={todo._id}>
              <td className={todo.isCompleted ? "completed" : ""}>
                {todo.description}
              </td>
              <td className={todo.isCompleted ? "completed" : ""}>
                {todo.responsible}
              </td>
              <td className={todo.isCompleted ? "completed" : ""}>
                {todo.priority}
              </td>
              <td>
                <Link to={"/edit/" + todo._id}>
                
                  <button className="btn btn-success btn-small mr-1">
                    Edit
                  </button>
                </Link>
                <button
                  className="btn btn-danger btn-small mr-1"
                  onClick={() => onDelete(todo)}
                >
                  Delete
                </button>
             
              </td>
            </tr>
          ))}
        </tbody>

          */
}

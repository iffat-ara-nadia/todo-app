import React, { Component } from "react";
import axios from "axios";

class EditTodo extends Component {
  state = {
    data: {
      description: "",
      responsible: "",
      priority: "",
      isCompleted: false
    }
  };

  async componentDidMount() {
    const todoId = this.props.match.params.id;

    const { data: todo } = await axios.get(
      "http://localhost:3800/api/todos/" + todoId
    );

    this.setState({ data: this.mapToViewModel(todo) });
  }

  mapToViewModel(todo) {
    return {
      _id: todo._id, //Major error of mine: id: todo._id
      description: todo.description,
      responsible: todo.responsible,
      priority: todo.priority,
      isCompleted: todo.isCompleted
    };
  }

  saveTodo(todo) {
    if (todo._id) {
      const body = { ...todo };
      delete body._id;
      return axios.put("http://localhost:3800/api/todos/" + todo._id, body);
    }
  }

  doSubmit = async () => {
    await this.saveTodo(this.state.data);

    window.location = "/";
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log("submitted");
    console.log(e);

    this.doSubmit();
  };

  handleChange = ({ currentTarget }) => {
    const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;
    //this.setState({checked: !currentTarget.checked});
    // data[currentTarget.checked] = !currentTarget.checked ;

    this.setState({ data });
  };

  handleChangeCheckbox = () => {
    const data = { ...this.state.data };
    data.isCompleted = !data.isCompleted;
    this.setState({
      data
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Edit a Todo </h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              name="description"
              id="description"
              value={data.description}
              type="text"
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="responsible">Responsible</label>
            <input
              name="responsible"
              id="responsible"
              value={data.responsible}
              type="text"
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                name="priority"
                id="priorityLow"
                value="Low"
                type="radio"
                checked={data.priority === "Low"}
                onChange={this.handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                name="priority"
                id="priorityMedium"
                value="Medium"
                type="radio"
                checked={data.priority === "Medium"}
                onChange={this.handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                name="priority"
                id="priorityHigh"
                value="High"
                type="radio"
                checked={data.priority === "High"}
                onChange={this.handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">High</label>
            </div>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isCompleted"
              name="isCompleted"
              onChange={this.handleChangeCheckbox}
              checked={data.isCompleted}
              value={data.isCompleted}
            />
            <label className="isCompleted" htmlFor="isCompleted">
              Completed
            </label>
          </div>
          <br />
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default EditTodo;

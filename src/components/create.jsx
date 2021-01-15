import React, { Component } from "react";
import axios from "axios";

class CreateTodo extends Component {
  state = {
    data: {
      description: "",
      responsible: "",
      priority: "",
      isCompleted: false
    }
  };

  handleChange = ({ currentTarget }) => {
    const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;

    this.setState({ data });
  };

  handleChangePriority = () => {};

  handleSubmit = e => {
    e.preventDefault();

    console.log("submitted");
    console.log(e);

    this.doSubmit();
  };

  doSubmit = async () => {
    const response = await axios.post("http://localhost:3800/api/todos", {
      description: this.state.data.description,
      responsible: this.state.data.responsible,
      priority: this.state.data.priority,
      isCompleted: this.state.data.isCompleted
    });
    console.log(response);
    window.location = "/";
  };

  render() {
    const { data } = this.state;
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create NEW Todo </h3>
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

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateTodo;

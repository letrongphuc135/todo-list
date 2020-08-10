import React, { Component } from "react";
import { Link } from "react-router-dom";

class index extends Component {
  handleDelete = (id) => {
    this.props.handleDelete(id);
  };

  handleUpdateStatus = (id) => {
    this.props.handleUpdateStatus(id)
  }

  render() {
    var { task, index } = this.props;
    var statusName = task.status ? "Kich hoat" : "An";
    var statusClass = task.status ? "success" : "danger";
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{task.name}</td>
        <td className="text-center">
          <span onClick={() => this.handleUpdateStatus(task.id)} className={`badge badge-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link to={`/todo/${task.id}/edit`} className="btn btn-warning">Sua</Link>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(task.id)}
          >
            Xoa
          </button>
        </td>
      </tr>
    );
  }
}

export default index;

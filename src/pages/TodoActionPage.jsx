import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  actAddProductRequest,
  actGetProductRequest,
  actUpdateProductRequest,
} from "../actions";

class TodoActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      chkbStatus: "",
    };
  }

  onSave = (e) => {
    e.preventDefault();
    var { txtName, chkbStatus, id } = this.state;
    var { history } = this.props;
    var task = {
      id: id,
      name: txtName,
      status: chkbStatus,
    };

    if (id) {
      this.props.onUpdateTask(task);
    } else {
      this.props.onAddTask(task);
    }
    history.goBack();
  };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.itemEditing !== prevState) {
  //     return {
  //       id: nextProps.itemEditing.id,
  //       txtName: nextProps.itemEditing.name,
  //       chkbStatus: nextProps.itemEditing.status,
  //     };
  //   } else return null;
  // }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        chkbStatus: itemEditing.status,
      });
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  //Get data from url
  componentDidMount() {
    var { match, onEditTask } = this.props;
    if (match) {
      var id = match.params.id;
      onEditTask(id);
    }
  }

  render() {
    var { txtName, chkbStatus } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Tên Sản Phẩm: </label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Trạng Thái: </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="chkbStatus"
                value={chkbStatus}
                onChange={this.onChange}
                checked={chkbStatus}
              />
              Còn Hàng
            </label>
          </div>
          <Link to="/todo-list" className="btn btn-danger mr-10">
            Trở Lại
          </Link>
          <button type="submit" className="btn btn-primary">
            Lưu Lại
          </button>
        </form>
      </div>
    );
  }
}
// const mapStateToProps = () => {};

const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTask: (task) => {
      dispatch(actAddProductRequest(task));
    },
    onEditTask: (id) => {
      dispatch(actGetProductRequest(id));
    },
    onUpdateTask: (task) => {
      dispatch(actUpdateProductRequest(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoActionPage);

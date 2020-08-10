import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actFetchTasksRequest,
  actDeleteProductRequest,
  actFilterProduct,
  actUpdateStatusProduct,
} from "../actions";
import ProductList from "../components/ProductList";
import ProductItem from "../components/ProductItem";

class TodoListPage extends Component {
  componentDidMount() {
    this.props.fetchAllData();
  }

  handleDelete = (id) => {
    this.props.onDeleteTask(id);
  };

  handleFilterTable = (filter) => {
    this.props.onFilterTask(filter);
  };

  handleUpdateStatus = (id) => {
    this.props.onUpdateStatus(id);
  };

  showProducts(tasks) {
    let result = null;
    if (tasks.length > 0) {
      result = tasks.map((task, index) => (
        <ProductItem
          key={index}
          index={index}
          task={task}
          handleUpdateStatus={this.handleUpdateStatus}
          handleDelete={this.handleDelete}
        />
      ));
    }
    return result;
  }

  render() {
    var { tasks, keyword, filterTable, sort } = this.props;

    //Search
    if (keyword) {
      tasks = tasks.filter(({ name }) => {
        return name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    }

    //Filter
    if (filterTable.name) {
      tasks = tasks.filter(
        ({ name }) =>
          name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1
      );
    }

    if (filterTable.status > -1) {
      tasks = tasks.filter(({ status }) => +status === +filterTable.status);
    }

    //Sort
    if (sort.by === "name") {
      console.log("aaa");
      tasks = tasks.sort((a, b) => {
        if (a.name < b.name) return -sort.value;
        else return sort.value;
      });
    } else if (sort.by === "status") {
      tasks = tasks.sort((a, b) => {
        if (sort.value === 1) return b.status - a.status;
        else return a.status - b.status;
      });
    }

    console.log(tasks);
    console.log(sort);
    return (
      <div className="container">
        <div className="text-center">
          <h2>Quan li cong viec</h2>
        </div>
        <hr />
        <ProductList onFilterTable={this.handleFilterTable}>
          {this.showProducts(tasks)}
        </ProductList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    keyword: state.search,
    filterTable: state.filter,
    sort: state.sort,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllData: () => {
      dispatch(actFetchTasksRequest());
    },
    onDeleteTask: (id) => {
      dispatch(actDeleteProductRequest(id));
    },
    onFilterTask: (filter) => {
      dispatch(actFilterProduct(filter));
    },
    onUpdateStatus: (id) => {
      dispatch(actUpdateStatusProduct(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage);

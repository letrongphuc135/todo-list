import React, { Component } from "react";
import { actSortProduct } from "../../actions";
import { connect } from "react-redux";

class index extends Component {
  handleSort = (sortName, sortValue) => {
    this.props.onSort({
      by: sortName,
      value: sortValue,
    });
  };

  render() {
    return (
      <div className="col-6">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sap xep
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              className="dropdown-item"
              onClick={() => this.handleSort("name", 1)}
            >
              <i className="fa fa-sort-alpha-asc">Ten A-Z</i>
            </a>
            <a
              className="dropdown-item"
              onClick={() => this.handleSort("name", -1)}
            >
              <i className="fa fa-sort-alpha-desc pr-5">Ten Z-A</i>
            </a>
            <a
              className="dropdown-item"
              onClick={() => this.handleSort("status", 1)}
            >
              Trang thai kich hoat
            </a>
            <a
              className="dropdown-item"
              onClick={() => this.handleSort("status", -1)}
            >
              Trang thai an
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sort: state.sort,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSort: (sort) => {
      dispatch(actSortProduct(sort));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);

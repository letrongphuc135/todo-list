import { Link } from "react-router-dom";
import Search from "../Search/index";
import Sort from "../Sort/index";
import React, { Component } from "react";
import Pagination from "../Pagination/Pagination";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1,
      pagition: {
        page: 1,
        limit: 5,
      },
    };
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });

    var filter = {
      name: name === "filterName" ? value : this.state.filterName,
      status: name === "filterStatus" ? value : this.state.filterStatus,
    };

    this.props.onFilterTable(filter);
  };

  onPageChange = (newPage) => {
    this.setState({
      pagition: { ...this.state.pagition, page: newPage },
    });
  };

  render() {
    console.log(this.state.pagition);
    return (
      <div className="row">
        <div className="col-12">
          <Link to="/todo/add" className="btn btn-primary">
            Them cong viec
          </Link>
          <button className="btn btn-danger ml-3">Generate data</button>
          <div className="row mt-3">
            <Search />
            <Sort />
          </div>
          <div className="row mt-3">
            <div className="col-sm-12 col-lg-12">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Ten</th>
                    <th scope="col">Trang thai</th>
                    <th scope="col">Hanh dong</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" />
                    <td>
                      <input
                        type="text"
                        name="filterName"
                        onChange={this.onChange}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <select
                        className="form-control"
                        name="filterStatus"
                        onChange={this.onChange}
                      >
                        <option value={-1}>Tat ca</option>
                        <option value={0}>An</option>
                        <option value={1}>Kich hoat</option>
                      </select>
                    </td>
                    <td />
                  </tr>
                  {this.props.children}
                </tbody>
              </table>
            </div>
          </div>

          <Pagination
            onPageChange={this.onPageChange}
            pagition={this.state.pagition}
          />
        </div>
      </div>
    );
  }
}

export default ProductList;

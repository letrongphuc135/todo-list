import React, { Component } from "react";
import { connect } from "react-redux";
import { actSearchProduct } from "../../actions";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }
  handleSearch = () => {
    this.props.onSearch(this.state.keyword);
  };

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="col-6">
        <div className="input-group">
          <input
            type="text"
            onChange={this.onChange}
            className="form-control"
            name="keyword"
            placeholder="Nhap tu khoa tim kiem"
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.handleSearch}
            >
              Tim
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (keyword) => {
      dispatch(actSearchProduct(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(index);

import React, { Component } from "react";

class Pagination extends Component {
  handlePageChange = (newPage) => {
      var {onPageChange} = this.props;
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  render() {
    var { pagition } = this.props;
    var { page} = pagition;
    return (
      <div>
        <button
          className="btn"
          disabled={page === 1}
          onClick={() => this.handlePageChange(page - 1)}
        >
          Prev <span className="badge badge-primary"></span>
        </button>

        <button
          className="btn"
          disabled={page === 10}
          onClick={() => this.handlePageChange(page + 1)}
        >
          Next <span className="badge badge-primary"></span>
        </button>
      </div>
    );
  }
}

export default Pagination;

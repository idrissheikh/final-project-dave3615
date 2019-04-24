import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class ProductList extends Component {
  delete = id => {
    this.props.delete(id);
  };
  constructor(props) {
    super(props);
  }

  render() {
    const imageUrl = "https://via.placeholder.com/100";
    return (
      <div className="scrolling-wrapper p-3">
        {this.props.products.map((product, key) => {
          const editLink = "/editForm/" + product.id;
          const id = product.id;
          return (
            <div className="card my-3 ">
              <img
                className="card-img-top"
                src={imageUrl}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.rate}</p>
                <a href="#" className="btn btn-primary">
                  Buy
                </a>
                <Link to={editLink}>
                  <button
                    onClick={this.navigateEditForm}
                    className="btn btn-success btn-lg mr-5 my-3 "
                  >
                    Edit{" "}
                  </button>
                </Link>

                <button
                  onClick={() => this.delete(id)}
                  className="btn btn-primary"
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductList;

/*

  <div className="card my-3 ">
            <img className="card-img-top" src={imageUrl} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{product.id}</h5>
              <p className="card-text">{product.releaseYear}</p>
              <a href="#" className="btn btn-primary">
                Buy
              </a>
            </div>
          </div>

*/
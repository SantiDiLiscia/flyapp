import React from "react";
import { Link } from "react-router-dom";

export default ({ producto, storing }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff"
      }}
    >
      <div
        className="row aling-items-center"
        style={{
          backgroundColor: "#ffffff"
        }}
      >
        <div
          className="col"
          style={{
            padding: "40px",
            backgroundColor: "#ffffff",
            paddingBottom: "200px"
          }}
        >
          <div
            className="jumbotron"
            style={{
              backgroundColor: "#ffffff"
            }}
          >
            <h4>****</h4>
            <h1
              className="font-weight-bold"
              style={{
                paddingBottom: "10px"
              }}
            >
              {producto.name}
            </h1>

            <p
              className="font-weight-normal"
              style={{
                paddingBottom: "20px"
              }}
            >
              {producto.description}{" "}
            </p>
            <h5
              className="font-weight-normal"
              style={{
                paddingBottom: "20px",
                marginBottom: "20px"
              }}
            >{`U$D ${producto.price}`}</h5>

            <Link
              onClick={e => storing(e, producto)}
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#2EC4B6",
                borderColor: "#2EC4B6",
                marginRight: "20px"
              }}
              to="/experiences"
            >
              Add to Cart
            </Link>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#ffffff",
                color: "#EA526F",
                borderColor: "#EA526F"
              }}
              to="/checkout"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>

        <div className="col">
          <img
            style={{
              maxHeight: "760px"
              //maxWidth: "660px"

              // position: "fixed",
              // right: "0"
            }}
            src={producto.img_1}
            //src="https://insideone.s3-sa-east-1.amazonaws.com/image-home-05.png"
            className="img-fluid"
            alt="Responsive image"
          />
        </div>
      </div>
      <div>
        <h2
          className="font-weight-bold"
          style={{ paddingBottom: "10px", margin: "60px" }}
        >
          Comments
        </h2>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-10">
              <div className="card-body">
                <p className="font-weight-bold" style={{ marginLeft: "35px" }}>
                  Pablito escobar
                </p>
                <p
                  className="font-weight-normal"
                  style={{ marginLeft: "35px" }}
                >
                  Me encanto re zarpado!!
                </p>
                <p
                  className="font-weight-normal"
                  style={{ marginLeft: "35px" }}
                >
                  ⭐ ⭐ ⭐ ⭐ ⭐
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

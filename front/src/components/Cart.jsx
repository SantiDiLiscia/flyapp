import React from "react";
import { Link } from "react-router-dom";

export default ({ carrito }) => {
  console.log(carrito);
  return (
    <div
      style={{
        backgroundColor: "#ffffff"
      }}
    >
      <div
        className="card text-center"
        style={{
          borderColor: "#ffffff"
        }}
      >
        <div
          className="card-body"
          style={{
            padding: "40px"
          }}
        >
          <h1
            className="font-weight-bold"
            style={{
              padding: "10px"
            }}
          >
            Cart
          </h1>
          <h5 className="font-weight-normal">
            These are your selected experiences.
          </h5>
        </div>
      </div>

      <div
        className="card mb-3"
        style={{
          borderColor: "#ffffff"
        }}
      >
        <div className="row no-gutters">
          {carrito ? (
            <div className="div">
              {carrito.data.map(algo => (
                <div key={algo.id}>
                  <div className="col-md-2">
                    <img src={algo.img_1} className="card-img" alt="..." />

                    <div className="col-md-10">
                      <div className="card-body">
                        <h5 className="font-weight-bold">{algo.name}</h5>
                        <p className="font-weight-normal">{algo.description}</p>
                        <p className="font-weight-bold">u$S {algo.price} </p>
                        <Link
                          className="btn btn-primary btn-lg"
                          style={{
                            backgroundColor: "#2EC4B6",
                            borderColor: "#2EC4B6"
                          }}
                          to="/cart"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="col-md-2">
<img src={carrito.data.img_1} className="card-img" alt="..." />
</div>
<div className="col-md-10">
<div className="card-body">
  <h5 className="font-weight-bold">{carrito.data.name}</h5>
  <p className="font-weight-normal">{carrito.data.description}</p>
  <p className="font-weight-bold">u$S {carrito.data.price} </p>
  <Link
    className="btn btn-primary btn-lg"
    style={{
      backgroundColor: "#2EC4B6",
      borderColor: "#2EC4B6"
    }}
    to="/cart"
  >
    Delete
  </Link>
</div>
</div> */
}

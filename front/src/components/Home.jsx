import React from "react";
import { Link } from "react-router-dom";
// let random1 = Math.floor(Math.random() * 10) //va del 0 - 9
export default ({ products }) => {
    // console.log(products);
    return (<div
        style={{
            backgroundColor: "white"
        }}
    >
        <div className="row align-items-center">
            <div className="col">
                <div
                    className="jumbotron"
                    style={{
                        backgroundColor: "white"
                    }}
                >
                    <h1 className="font-weight-bold">Best experiences for your enjoy!</h1>
                    <p className="font-weight-normal">
                        This is a simple hero unit, a simple jumbotron-style component for
                        calling extra attention to featured content or information.
          </p>
                    <Link
                        className="btn btn-primary btn-lg"
                        style={{
                            backgroundColor: "#2EC4B6",
                            borderColor: "#2EC4B6"
                        }}
                        to="/experiences"
                    >
                        Disvover Experiences
          </Link>
                </div>
            </div>
            <div className="col">
                <img
                    src="https://insideone.s3-sa-east-1.amazonaws.com/image-home-04.png"
                    class="img-fluid"
                    alt="Responsive image"
                />
            </div>
        </div>
        <nav
            className="navbar sticky-top"
            style={{
                backgroundColor: "#ffffff",
                padding: "20px"
            }}
        ></nav>
        {/* <div className="container"> */}
        <h1>Experiences that matters</h1>
        {/* </div> */}
        <div className="card-deck">
            {/* ------------------------------------- */}
            {
                products ?
                    products.slice(0, 4).map(singles => (
                        <div className="card" key={singles.id}>
                            <img
                                src={singles.img_1}
                                class="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">{singles.name}</h5>
                                <p className="card-text">
                                    {singles.description}
                                </p>
                                <p className="card-text">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    ))
                    : null
            }
            {/* ------------------------------------- */}
        </div>
        <div className="card text-center">
            <div className="card-body">
                <h1 className="card-title">Specials experiences for you</h1>
                <h4 className="card-text">
                    We give you a lot of special experiences for your enjoy
        </h4>
                <a href="#" className="btn btn-primary">
                    Experiences
        </a>
            </div>
        </div>
        <div className="card-deck">
            {
                products ?
                    products.slice(4, 7).map(singles => (
                        <div className="card" key={singles.id}>
                            <img
                                src={singles.img_1}
                                class="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">{singles.name}</h5>
                                <p className="card-text">
                                    {singles.description}
                                </p>
                                <p className="card-text">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    ))
                    : null
            }
        </div>
        <div className="row align-items-center">
            <div className="col">
                <img
                    src="https://insideone.s3-sa-east-1.amazonaws.com/image-home-01.png"
                    class="img-fluid"
                    alt="Responsive image"
                />
            </div>
            <div className="col">
                <div className="jumbotron">
                    <h1 className="display-4">Contact us!</h1>
                    <h3 className="lead">hi@flyapp.com</h3>
                    <h3 className="lead">+1 305 4224 783</h3>
                    <h3 className="lead">Av. Lincoln 2362, Washington, DC, EE.UU</h3>
                </div>
            </div>
        </div>
    </div>)
}
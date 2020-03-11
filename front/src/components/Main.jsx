import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import LoginContainer from "../containers/LoginContainer";
import HomeContainer from "../containers/HomeContainer";
import RegisterContainer from "../containers/RegisterContainer";
import ProductsContainer from "../containers/ProductsContainer";
import ProductIDContainer from "../containers/productIDContainer";
import CartContainer from "../containers/CartContainer";
import ProfileContainer from "../containers/ProfileContainer";
import EditUsersContainer from "../containers/EditUsersContainer";
import NavbarContainer from "../containers/NavbarContainer";
import CategoryContainer from "../containers/CategoryContainer";
import CategorySingleContainer from "../containers/CategorySingleContainer";
import CheckoutContainer from "../containers/CheckoutContainer";
import CategoriesAdminContainer from "../containers/CategoriesAdminContainer";
import newCategoryAdminContainer from "../containers/NewCategoryAdminContainer";
import editCategoryAdmin from "../containers/EditCategoryContainer";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <NavbarContainer />
        {this.props.history.location.pathname == "/cart" ? (
          <Route exact path="/cart" component={CartContainer} />
        ) : null}
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/experiences" component={ProductsContainer} />
          <Route path="/experience/:id" component={ProductIDContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/profile" component={ProfileContainer} />
          <Route exact path="/category" component={CategoryContainer} />
          <Route
            exact
            path="/category/:id"
            component={CategorySingleContainer}
          />
          <Route exact path="/editUsers" component={EditUsersContainer} />
          <Route exact path="/checkout" component={CheckoutContainer} />
          <Route
            exact
            path="/categoriesAdmin"
            component={CategoriesAdminContainer}
          />
          <Route
            exact
            path="/newCategoryAdmin"
            component={newCategoryAdminContainer}
          />
          <Route
            exact
            path="/editCategoryAdmin/:id"
            component={editCategoryAdmin}
          />
        </Switch>
      </div>
    );
  }
}

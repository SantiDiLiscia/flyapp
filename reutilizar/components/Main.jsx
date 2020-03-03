import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import PeliculasContainer from "../../front/src/containers/PeliculasContainer";
import SeriesContainer from "../../front/src/containers/SeriesContainer";
import PeliculasSingleContainer from "../../front/src/containers/PeliculaSingleContainer";
import SeriesSingleContainer from "../../front/src/containers/SeriesSingleContainer";
import SearchContainer from "../../front/src/containers/SearchContainer";
import FavoriteContainer from "../../front/src/containers/FavoriteContainer";
import UserLoginContainer from "../../front/src/containers/UserLoginContainer";
import LoginContainer from "../../front/src/containers/LoginContainer";
import HomeContainer from "../../front/src/containers/HomeContainer";
import Home from "./Home";

class Main extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        {this.props.userLogged[0] ? <SearchContainer /> : null}

        <Switch>
          <Route exact path="/search" component={PeliculasContainer} />
          <Route path="/movies/:movieId" component={PeliculasSingleContainer} />
          <Route path="/favorites" component={FavoriteContainer} />
          <Route exact path="/register" component={UserLoginContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/home" component={HomeContainer} />
          <Redirect from="/" to="/login" />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    userLogged: state.userLogged.loginUser
  };
};

export default connect(mapStateToProps)(Main);

//   /: mostrará un input para hacer la búsqueda.
// /search: mostrará un listado de resultados de la búsqueda.
// /movies/:movieId: mostrará los detalles de una película en particular.
